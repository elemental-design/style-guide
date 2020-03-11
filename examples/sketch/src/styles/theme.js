/* eslint-disable prefer-destructuring */

import colors from './colors';
import typography from './typography';

const breakpoints = [
  '601px',
  '769px',
  '1025px',
];

// aliases
breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.desktop = breakpoints[2];
breakpoints.m = breakpoints[0];
breakpoints.t = breakpoints[1];
breakpoints.d = breakpoints[2];



const space = [
  0, 4, 8, 16, 32, 64, 128, 256, 512,
];





export default {
  ...typography,
  space,
  colors,
  
  breakpoints,
};
