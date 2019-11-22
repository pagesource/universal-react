/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Layout from '../../templates/Layout';
import API from '../../../utils/fetch';
import API_URLS from '../../../constants/api/services';
import experienceComponentMap from '../../../utils/componentMap';

const Experience = ({ identifier = 'home' }) => {
  const [isFetching, updateIsFetching] = useState(false);
  const [components, updateComponentMap] = useState(false);

  useEffect(() => {
    (async () => {
      updateIsFetching(true);
      const result = await API.fetch(API_URLS.experience, null, {
        params: {
          identifier,
        },
      });
      updateIsFetching(false);
      if (!isFetching) updateComponentMap(result.data);
    })();
  }, []);

  const getElements = () => {
    return !isFetching && Array.isArray(components)
      ? components.map((component, index) =>
          React.createElement(experienceComponentMap[component.id], {
            key: `${component.id}${index}`,
            ...component.props,
          })
        )
      : null;
  };

  return (
    <Layout title="error" className="row" id="content-wrapper" tabindex="-1">
      {getElements()}
    </Layout>
  );
};

Experience.defaultProps = {
  identifier: null,
  getExperience: () => false,
  removeExperience: () => false,
  components: null,
};

export default Experience;
