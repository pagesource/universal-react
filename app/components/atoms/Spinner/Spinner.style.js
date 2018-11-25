import { css } from 'styled-components';

export default css`
  width: 100%;

  .rclDefaultSpinner {
    height: 50px;
    width: 50px;
    margin: auto;
    border-radius: 100%;
    display: block;
    position: relative;
    top: 45%;
    background-color: transparent;
    border: 5px solid transparent;
    border-color: #eee #eee #444 #444;
    animation: rotateLoading 1.5s linear 0s infinite normal;
    transform-origin: 50% 50%;
    transition: all 0.1s ease-in;
  }

  @keyframes rotateLoading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .rclLoadOverlay {
    position: relative;
    height: 100%;
  }

  .rclLoadUnderlay {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
    transition: opacity ms ease-out;
    display: flex;
    text-align: center;
    font-size: 1.2em;
    z-index: ${props => props.theme.zIndex.zLoader};
  }

  @keyframes dot-keyframes {
    0% {
      opacity: 0.4;
      transform: scale(1, 1);
    }

    50% {
      opacity: 1;
      transform: scale(1.2, 1.2);
    }

    100% {
      opacity: 0.4;
      transform: scale(1, 1);
    }
  }

  .renderDotSpinner {
    position: absolute;
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  .renderDotSpinner--dot {
    animation: dot-keyframes 1s infinite ease-in-out;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 17px;
    display: inline-block;
    width: 10px;
    height: 10px;
  }

  .renderDotSpinner--dot:nth-child(2) {
    border-radius: 15px;
    margin-left: 10px;
    animation-delay: 0.5s;
    width: 10px;
    height: 10px;
  }

  .renderDotSpinner--dot:nth-child(3) {
    border-radius: 10px;
    margin-left: 10px;
    animation-delay: 0.25s;
    width: 10px;
    height: 10px;
  }
`;
