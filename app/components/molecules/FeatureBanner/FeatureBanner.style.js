import { css } from 'styled-components';

export default css`
  height: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: url(./../../static/images/feature-banner.jpg);
  &:after {
    content: '';
    position: absolute;
    background: linear-gradient(135deg, #ce1b28 0%, #111 74%);
    opacity: 0.8;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
  .inner {
    position: relative;
    z-index: 10;
  }
  h1 {
    font-size: 4rem;
    font-weight: 300;
    color: #fff;
  }
  .subheading {
    font-size: 30px;
    font-weight: 400;
    color: #fff;
  }
  &.ramp-up-banner {
    background: url(./../../static/images/learn.jpg);
  }
`;
