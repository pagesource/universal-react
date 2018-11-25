
const { STATIC_FOLDER_PREFIX } = require('../../isomorphic/constants');

const isStaticUrl = url => url.length > 0 && url.indexOf(STATIC_FOLDER_PREFIX) !== -1;


const parseStaticUrl = (url = '') => {
  const regEx = new RegExp(`${STATIC_FOLDER_PREFIX}[^/]*/`);
  return url.replace(regEx, STATIC_FOLDER_PREFIX);
};

module.exports = {
  isStaticUrl,
  parseStaticUrl,
};
