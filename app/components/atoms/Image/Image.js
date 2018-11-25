// @flow
import type { Node } from 'react';

import withStyles from '../../../lib/withStyles';

type Props = {
  className: string,
  src: string,
  placeholderSrc: string,
  alt: string,
  inheritedStyles: string,
  ref: () => void,
};

const Image = ({
  className, src, placeholderSrc, alt, inheritedStyles, ref, ...other
}: Props): Node => (
  <img
    className={className}
    src={src}
    alt={alt}
    ref={ref}
    {...other}
    onError={(event) => {
      // eslint-disable-next-line no-param-reassign
      event.target.src = placeholderSrc;
    }}
  />
);

export default withStyles(Image);
export { Image as ImageVanilla };
