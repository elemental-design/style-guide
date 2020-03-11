/* eslint-disable prefer-destructuring */

const textStyles = {};

const fontSizes = [10, 12, 14, 16, 20, 24, 34, 48, 60, 96];

// eslint-disable-next-line camelcase
const [overline, caption, body_small, body, h6, h5, h4, h3, h2, h1] = fontSizes;

const fontSizeKeys = {
  h1, h2, h3, h4, h5, h6, body, button: body, body_small, caption, overline,
};

Object.assign(fontSizes, fontSizeKeys);

const lineHeights = {
  4: fontSizes[4],
  h1: '112px',
  h2: '72px',
  h3: '56px',
  h4: '40px',
  h5: '32px',
  h6: '24px',
  body: '20px',
  button: '20px',
  body_small: '16px',
  caption: '16px',
  overline: '12px',
};

const typefaces = {
  helvetica: {
    light: 'Helvetica',
    regular: 'Helvetica',
    medium: 'Helvetica',
    semiBold: 'Helvetica',
  },
  roboto: {
    light: 'Roboto',
    regular: 'Roboto',
    medium: 'Roboto',
    semiBold: 'Roboto',
  },
};



const keys = {
  primary: typefaces.helvetica.regular,
  primaries: typefaces.helvetica,
  secondary: typefaces.roboto.regular,
  secondaries: typefaces.roboto,
  // monospace: ...,
};

const fontWeights = {
  light: 300,
  regular: 500,
  medium: 600,
  semiBold: 700,
  bold: 'bold',
};

Object.assign(keys, {
  button: keys.primary,
});

const fonts = {
  typefaces,
  ...typefaces,
  keys,
  ...keys,
};

export default {
  fonts,
  fontSizes,
  fontWeights,
  textStyles,
  lineHeights,
};
