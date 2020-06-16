import styled from 'styled-components';
import { string } from 'prop-types';

import CircleProgressBarBase from './CircleProgressBarBase';

const CircleProgressBar = styled(CircleProgressBarBase)`
  max-width: ___CSS_0___;
  vertical-align: middle;

  .chart-text {
    fill: ___CSS_1___;
    transform: translateY(0.25em);
  }

  .chart-number {
    font-size: 0.6em;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.25em);
  }

  .chart-label {
    font-size: 0.2em;
    text-transform: uppercase;
    text-anchor: middle;
    transform: translateY(0.7em);
  }

  .figure-key [class*='shape-'] {
    margin-right: 8px;
    z-index: 1000;
  }

  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    z-index: 1000;
  }

  .figure-key-list li {
    margin: 5px auto;
  }

  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 11px;
    height: 21px;
    border-radius: 50%;
    background-color: ___CSS_2___;
    text-transform: capitalize;
   
  }
`;

CircleProgressBar.propTypes = {
  textColor: string,
  strokeColor: string,
  maxSize: string
};

CircleProgressBar.defaultProps = {
  textColor: 'black',
  strokeColor: 'blueviolet',
  maxSize: '100vh'
};

export default CircleProgressBar;