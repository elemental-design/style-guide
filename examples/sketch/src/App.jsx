import * as React from 'react';
import { ThemeProvider, LayoutProvider } from 'elemental-react';
import { Document, Page } from 'react-sketchapp';

import Screen from './Screen';
import styleguide from './style-guide';
import theme from './styles/theme';


const StyleGuide = () => (
  <React.Fragment>
    {styleguide.map(({
      type, name, screens, data,
    }) => (
        <Page name={name} key={name}>
          <LayoutProvider breakpoint={0}>
            {screens.map(({ name: screenName, component: Component, data: compData }) => (
              <Screen width={1440} name={screenName}>
                <Component {...{ [type]: Object.assign({}, data, compData) }} />
              </Screen>
            ))}
          </LayoutProvider>
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
