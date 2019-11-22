import { css } from 'styled-components';

export default css`
  background: #fff;
  padding: 70px 0;
  &.grey {
    background: #f5f5f5;
  }
  &.text-left {
    h2 {
      text-align: left;
      &:after {
        left: 0;
        right: auto;
      }
    }
  }
  .full-width {
    width: 100%;
  }
  .width-60 {
    width: 60%;
  }
  .text-center {
    text-align: center;
  }
  h2 {
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    text-transform: none;
    position: relative;
    padding-bottom: 12px;
    margin-bottom: 15px;
    &:after {
      content: '';
      position: absolute;
      width: 50px;
      height: 3px;
      background: #2874f0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 0 auto;
    }
  }
  .sub-heading {
    font-size: 20px;
    font-weight: 400;
  }
  .container-wrap {
    margin-top: 60px;
    &.m-t-30 {
      margin-top: 30px;
    }
    p {
      font-size: 16px;
      line-height: 28px;
    }
    ul {
      list-style-type: none;
      li {
        font-size: 16px;
        position: relative;
        &:after {
          content: '';
          background: #2874f0;
          height: 6px;
          width: 6px;
          position: absolute;
          left: -17px;
          top: 9px;
        }
        &.with-link {
          &:after {
            background: #ce1b28;
          }
        }
      }
    }
  }
  &.installation-wrap {
    background: #f5f5f5;
    code {
      display: block;
      color: #232323;
    }
  }
  &.entity-ecosystem {
    background: #f5f5f5;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      li {
        width: calc(100% / 3);
        margin-bottom: 40px;
        .title {
          font-size: 20px;
          font-weight: 500;
          text-align: left;
          color: #2874f0;
        }
        .desc {
          font-size: 16px;
          padding: 0;
          text-align: left;
          padding-right: 50px;
          color: #333;
        }
      }
    }
  }
  &.tech-dependency {
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: calc(100% / 4);
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(4),
        &:nth-child(5) {
          margin-bottom: 50px;
        }
        &:after {
          display: none;
        }
        :hover {
          .image-wrapper {
            img {
              -webkit-filter: grayscale(100%);
              filter: grayscale(100%);
              transform: scale(1.05);
            }
          }
        }
        a {
          color: #555;
          text-decoration: none;
        }
        .image-wrapper {
          height: 170px;
          display: flex;
          align-items: center;
          img {
            width: 165px;
            transition: 0.4s all;
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
            transform: scale(1);
          }
        }
        .text-label {
          text-align: center;
          margin-top: 20px;
          font-weight: 500;
          font-size: 20px;
        }
      }
    }
  }
  &.ramp-up-wrap {
    ul {
      padding: 0;
      margin: 0;
      list-style-type: none;
      li {
        margin-bottom: 10px;
        a {
          font-size: 16px;
          font-weight: 400;
          text-decoration: none;
          position: relative;
          padding-bottom: 3px;
          &:hover {
            &:after {
              transform: scale(1);
            }
          }
          &:after {
            content: '';
            position: absolute;
            width: 100%;
            background: #ce1b28;
            height: 1px;
            left: 0;
            bottom: 0;
            transition: 0.2s all;
            transform: scale(0);
          }
        }
      }
    }
  }
`;
