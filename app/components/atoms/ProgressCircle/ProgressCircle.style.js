import { css } from 'styled-components';

export default css`
  display: inline-block;
  margin-left: -3px;

  circle.progress {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke: #cccccc;
  }

  circle.underlay {
    transition: stroke-dashoffset 0.35s;
    stroke: #eeeeee;
  }

  text {
    font-size: 1rem;
  }
`;
