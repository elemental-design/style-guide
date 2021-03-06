
export const families = {
  greys: ['#fafafa', '#f5f5f5', '#eeeeee', '#e0e0e0', '#bdbdbd', '#9e9e9e', '#757575', '#616161', '#424242', '#212121'],
  greens: [
    '#eeffed',
    '#c0fdbf',
    '#93fb91',
    '#3cf43e',
    '#00e90b',
    '#00d816',
    '#00c123',
    '#00a22e',
    '#007c31',
    '#00542a',
  ],
  blues: [
    '#f2f6ff',
    '#cfdefe',
    '#adc5fc',
    '#6d95f7',
    '#3969ef',
    '#1341e4',
    '#0022d3',
    '#0011bd',
    '#0001a3',
    '#090087',
  ],
  yellows: [
    '#FFF9DE',
    '#FFFCC2',
    '#FFF991',
    '#FFF562',
    '#FFF03B',
    '#FFE917',
    '#D8C910',
    '#B1A80A',
    '#8A8606',
    '#646203',
  ],
  reds: [
    '#ffeded',
    '#fdbfbf',
    '#fb9291',
    '#f4403c',
    '#e90900',
    '#d80f00',
    '#c11500',
    '#a21a00',
    '#7c1b00',
    '#541600',
  ],
  pinks: [
    '#fdf2ff',
    '#f7cffe',
    '#f1adfc',
    '#e76df7',
    '#e039ef',
    '#dc13e4',
    '#d300cc',
    '#bd00a7',
    '#a30081',
    '#87005f',
  ],
  blacks: ['#000'],
  whites: ['#fff'],
};

const colors = {
  grey: families.greys[5],
  blue: families.blues[5],
  green: families.greens[5],
  purple: families.pinks[9],
  yellow: families.yellows[5],
  orange: 'orange',
  red: families.reds[5],
  pink: families.pinks[5],
  black: '#000000',
  white: '#ffffff',
};

const keys = {
  primary: colors.blue,
  secondary: families.greens[7],
  success: families.greens[4],
  warning: families.yellows[5],
  error: colors.red,
};

// 50, 100, 200, 300, 400, 500, 600, 700, 800, 900


export default {
  families,
  ...families,
  colors,
  ...colors,
  keys,
  ...keys,
  black: '#000',
  white: '#fff',
  blue: '#0561f5',
  green: families.greens[5],
  navy: '#004175',
  red: '#ab000d',
};
