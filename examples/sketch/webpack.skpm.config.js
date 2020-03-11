/* eslint-disable no-param-reassign */
const path = require('path');

// eslint-disable-next-line spaced-comment
/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {boolean} isPluginCommand - wether the config is for a plugin command or a resource
 **/
module.exports = (config) => {
  /* you can change config here */

  config.resolve = {
    ...config.resolve,
    extensions: ['.sketch.js', '.js', '.sketch.jsx', '.jsx'],
    alias: {
      ...config.resolve.alias,
      'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
      'styled-system': path.resolve(__dirname, './node_modules/styled-system'),
      'elemental-react': path.resolve(__dirname, './node_modules/elemental-react'),
      '@elemental-design/style-guide': path.resolve(__dirname, '../../'),
      // 'react-primitives-svg': path.resolve(__dirname, './node_modules/react-primitives-svg'),
    },
  };
};
