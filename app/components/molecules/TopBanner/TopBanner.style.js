import { css } from 'styled-components';

export default css`
  opacity: 1;
  #ticker {
    font-size: 40px;
    margin-top: 90px;
    color: #fff;
    font-weight: 800;
    min-height: 66px;
  }
  .sub-heading {
    font-size: 26px;
    font-weight: 400;
    color: #fff;
  }
  &.features-banner {
    background-image: url(./../../static/images/feature-banner.jpg) !important;
  }
`;
