import { createGlobalStyle } from 'styled-components';
import globalStyles from './globalStyles';
import typography from './typography';

// eslint-disable-next-line no-unused-expressions
export default createGlobalStyle`
  ${typography}
  ${globalStyles}
`;
