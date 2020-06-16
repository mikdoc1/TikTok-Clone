import React, { useState, useEffect } from 'react';
import { string, number, bool } from 'prop-types';


const INITIAL_OFFSET = 25;
const circleConfig = {
  viewBox: '0 0 38 38',
  x: '19',
  y: '19',
  radio: '15.91549430918954'
};

const CircleProgressBarBase = ({
  className,
  strokeColor,
  strokeWidth,
  innerText,
  legendText,
  percentage,
  trailStrokeWidth,
  trailStrokeColor,
  trailSpaced,
  speed,
  musicEnd,
  paused
}) => {
  const [progressBar, setProgressBar] = useState(0);
  const pace = speed;
  let id;
  const updatePercentage = () => {
    id = setTimeout(() => {
      setProgressBar(progressBar + .3);
    }, pace);
  };

  useEffect(() => {
    if (percentage > 0) updatePercentage();
    return () => clearTimeout(id)
  }, [percentage]);

  useEffect(() => {
    if(progressBar >= percentage) {
      musicEnd()
    }
    if(!paused) {
      if (progressBar < percentage) updatePercentage();
    }
    if (progressBar > percentage)  musicEnd()
    return () => clearTimeout(id)
    
  }, [progressBar, paused]);

  return (
    <figure className={className}>
      <svg viewBox={circleConfig.viewBox} className="progress-bar__circle">
        <circle
          className="donut-ring"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={trailStrokeColor}
          strokeWidth={trailStrokeWidth}
          strokeDasharray={trailSpaced ? 1 : 0}
        />

        <circle
          className="donut-segment"
          cx={circleConfig.x}
          cy={circleConfig.y}
          r={circleConfig.radio}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressBar} ${100 - progressBar}`}
          strokeDashoffset={INITIAL_OFFSET}
        />

        {/* <g className="chart-text">
          <text x="50%" y="50%" className="chart-number">
            {progressBar}%
          </text>
          <text x="50%" y="50%" className="chart-label">
            {innerText}
          </text>
        </g> */}
      </svg>
      {legendText && (
        <figcaption className="figure-key">
          <ul
            className="figure-key-list"
            aria-hidden="true"
            role="presentation"
          >
            <li>
              <span className="shape-circle" />
              <span>{legendText}</span>
            </li>
          </ul>
        </figcaption>
      )}
    </figure>
  );
};

CircleProgressBarBase.propTypes = {
  className: string.isRequired,
  strokeColor: string,
  strokeWidth: number,
  innerText: string,
  legendText: string,
  percentage: number,
  trailStrokeWidth: number,
  trailStrokeColor: string,
  trailSpaced: bool,
  speed: number
};

CircleProgressBarBase.defaultProps = {
  strokeColor: 'blueviolet',
  strokeWidth: 1,
  innerText: 'Completed',
  legendText: '',
  percentage: 0,
  trailStrokeWidth: 1,
  trailStrokeColor: '#d2d3d4',
  trailSpaced: false,
  speed: 1
};

export default CircleProgressBarBase;