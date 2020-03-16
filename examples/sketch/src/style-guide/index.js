import colors from '../styles/colors';
import typography from '../styles/typography';

import { Colors, Typography } from '@elemental-design/style-guide';
// import Components from './components';

import GettingStarted from '../docs/getting-started';

const pages = [{
  name: 'Colours',
  type: 'colors',
  data: colors,
  screens: [{
    name: 'Colour Palette',
    component: Colors,
  }],
}, {
  name: 'Typography',
  type: 'typography',
  data: {
    ...typography,
    fontSizeOrder: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body_small', 'caption', 'overline'],
  },
  screens: [{
    name: 'Typography',
    component: Typography,
  }],
}, {
  name: 'Getting Started',
  type: 'getting-started',
  screens: [{
    name: 'Getting Started',
    component: GettingStarted,
  }],
}/*, {
  name: 'Components',
  type: 'components',
  data: {},
  screens: [{
    name: 'Components',
    component: Components,
  }],
}*/];

export default pages;
