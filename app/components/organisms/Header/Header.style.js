import { css } from 'styled-components';

import { DESKTOP, MOBILE } from '../../../constants';

const commonStyles = css`
  opacity: 1;
`;

export default {
  [DESKTOP]: css`
    ${commonStyles};
  `,
  [MOBILE]: css`
    ${commonStyles};
  `,
};
