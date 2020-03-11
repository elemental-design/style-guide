/* global context */
import { render } from 'react-sketchapp';

import App from './App';

export default () => {
  const data = context.document.documentData();
  const pages = context.document.pages();

  data.setCurrentPage(pages.firstObject());

  render(App);
};
