import React from 'react';
import { AnchorVanilla as Anchor } from '@xt-pagesource/atomic-react-pattern-lib';
import ArticleWrap from '../../molecules/ArticleWrap';

const linkArray = [
  {
    title: 'Development Tools',
    link: 'https://github.com/pagesource/universal-react/blob/master/readme/02-DevelopmentTools.md',
  },
  {
    link: 'https://github.com/pagesource/universal-react/blob/master/readme/07-QualityControl.md',
    title: 'Static Code Linters and Code Formatter',
  },
  {
    link: 'http://bradfrost.com/blog/post/atomic-web-design/',
    title: 'Atomic Design',
    nofollow: true,
  },
  {
    link: 'https://github.com/pagesource/universal-react/blob/master/readme/04-FolderStructure.md',
    title: 'Folder Structure',
  },
  {
    link: 'https://github.com/pagesource/universal-react/blob/master/readme/03-Generators.md',
    title: 'Component Scaffolding',
  },
  {
    link: 'https://github.com/pagesource/universal-react/blob/master/readme/05-FlowType.md',
    title: 'Flow Type',
  },
  {
    link:
      'https://github.com/pagesource/universal-react/blob/master/readme/07-QualityControl.md#husky',
    title: 'Husky',
  },
  {
    link: 'https://github.com/pagesource/universal-react/blob/master/readme/ESDocs.md',
    title: 'ES Docs',
  },
  {
    link: 'https://github.com/pagesource/universal-react/blob/master/readme/06-Storybook.md',
    title: 'Storybook',
  },
  {
    link: 'https://github.com/pagesource/universal-react/blob/master/readme/08-Test.md',
    title: 'Running The Tests',
  },
];
const LearnContent = () => (
  <ArticleWrap title="Topics to ramp-up" className="ramp-up-wrap">
    <ul>
      {linkArray.map((val, key) => {
        return (
          <li className="with-link" key={key.toString()}>
            <Anchor to={val.link} target="_blank" rel={val.nofollow ? 'nofollow' : null}>
              {val.title}
            </Anchor>
          </li>
        );
      })}
    </ul>
  </ArticleWrap>
);

export default LearnContent;
