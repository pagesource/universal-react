import { css } from 'styled-components';

import { DESKTOP, MOBILE } from '../../../constants';

const commonStyles = css`
  padding: 0;

  .copyright {
    margin-top: 1.5rem;
  }
`;

export default {
  [DESKTOP]: css`
    ${commonStyles};
  `,
  [MOBILE]: css`
    ${commonStyles};
  `,
};
