import styled, { css } from 'styled-components';
import { MOBILE, DESKTOP } from '../../../constants';

export default styled.div`
  width: ${props => (props.deviceType === MOBILE ? '100%' : '978px')};
  padding: ${props => (props.deviceType === MOBILE ? '0' : ' 0 10px ')};
  transition: transform 0.1s ease-in-out;
  height: ${props => (props.isNavigationDrawerOpen ? '100vh' : '100%')};
  transform: ${props =>
    props.isNavigationDrawerOpen ? 'translate3d(calc(85% + 6px), 0, 0)' : 'none'};
  position: ${props =>
    props.deviceType === MOBILE && props.isNavigationDrawerOpen ? 'fixed' : 'relative'};

  @media (max-width: 1200px) and (min-width: 768px) {
    margin-left: ${props => (props.hasRightGutter ? '10px' : 'auto')};
  }

  @media (max-width: 1070px) {
    ${props => (props.deviceType === DESKTOP && !props.isTablet ? 'margin-left:10px;' : '')};
    ${props =>
      props.hasRightGutter && props.deviceType === DESKTOP && !props.isTablet
        ? 'padding-right:110px; width:1088px;'
        : ''};
  }

  overflow-x: ${props =>
    props.deviceType === MOBILE && !props.isNavigationDrawerOpen ? 'hidden' : 'visible'};
`;
export const upperFooterStyleCheckout = {
  [MOBILE]: css`
    border: none;
    margin: 0;
  `,
};
