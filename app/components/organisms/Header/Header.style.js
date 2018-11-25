import { css } from 'styled-components';

import { DESKTOP, MOBILE } from '../../../constants';

const commonStyles = css`
`;

export default {
  [DESKTOP]: css`
    ${commonStyles};
  `,
  [MOBILE]: css`
    ${commonStyles};
  `,
};
