/* eslint-disable prefer-destructuring */

import colors from './colors';
import typography from './typography';

const breakpointOrder = [
  '601px',
  '769px',
  '1025px',
];

const breakpoints = {
  ...breakpointOrder,
  mobile: breakpointOrder[0],
  tablet: breakpointOrder[1],
  desktop: breakpointOrder[2],
  m: breakpointOrder[0],
  t: breakpointOrder[1],
  d: breakpointOrder[2],
};



const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512,
];





export default {
  ...typography,
  space,
  colors,
  
  breakpoints,
};
