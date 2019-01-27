// @flow
import React from 'react';
import withStyles from '../../../lib/withStyles';
import styles from './ProgressCircle.style';

type Props = {
  className: string,
  radius: number,
  circleStrokeWidth: number,
  progress: number,
  textStrokeWidth: number,
  innerText: string,
  inheritedStyles: string,
  dataSlnmId: string,
};

const ProgressRing = ({
  className,
  radius,
  circleStrokeWidth,
  progress,
  textStrokeWidth,
  innerText,
  inheritedStyles,
  dataSlnmId,
  ...others
}: Props) => {
  /* eslint-disable no-mixed-operators */
  const normalizedRadius = radius - circleStrokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      data-slnm-id={dataSlnmId}
      className={className}
      height={radius * 2}
      width={radius * 2}
      {...others}
    >
      <circle
        className="underlay"
        fill="transparent"
        strokeWidth={circleStrokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        className="progress"
        fill="transparent"
        strokeWidth={circleStrokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="middle"
        dy=".1em"
        data-slnm-id={`${dataSlnmId}ProgressText`}
      >
        {innerText || progress}
      </text>
    </svg>
  );
};

export default withStyles(ProgressRing, styles);
export { ProgressRing as ProgressRingVanilla };
