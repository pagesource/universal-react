import { css } from 'styled-components';

export default css`
  padding: 0 1.25rem;

  ul {
    padding: 0;
    list-style: none;
    margin: 0;
    display: flex;

    li {
      padding: 0;

      a {
        padding: 0 0.75rem;
        color: #fff;
        text-decoration: none;
        display: block;
      }
    }
  }

  ${props =>
    props.vertical &&
    css`
      ul {
        display: block;

        li {
          a {
            padding: 0.5rem 0;
          }
        }
      }
    `};
`;
