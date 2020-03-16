import * as React from 'react';
import { ThemeProvider, LayoutProvider } from 'elemental-react';
import { Document, Page, View, Text } from 'react-sketchapp';
import { MDXProvider } from '@mdx-js/react';

import Screen from './Screen';
import styleguide from './style-guide';
import theme from './styles/theme';
import mdComponents from './i18n/components';


const StyleGuide = () => (
  <React.Fragment>
    {styleguide.map(({
      type, name, screens, data,
    }) => (
        <Page name={name} key={name}>
          <MDXProvider components={mdComponents}>
            <LayoutProvider breakpoint={0}>
              {screens.map(({ name: screenName, component: Component, data: compData }) => (
                <Screen width={1440} name={screenName}>
                  <Component {...{ [type]: Object.assign({}, data, compData) }} />
                </Screen>
              ))}
            </LayoutProvider>
          </MDXProvider>
        </Page>
      ))}
  </React.Fragment>
);


const App = ({ colors }) => (
  <Document>
    <ThemeProvider theme={theme}>
      <StyleGuide />
    </ThemeProvider>
  </Document>
);




export default <App />;
