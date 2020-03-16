import React from 'react';
import { Box, Text, Row } from 'elemental-react';
// import { useTranslation } from 'react-i18next';

import Section from './components/Section';

interface Props {
  typography: {
    fonts: { [key: string]: string },
    fontSizes: { [key: string]: number },
    fontSizeOrder: string[],
  },
};

const Typography = ({ typography }: Props) => {
  // const { t } = useTranslation('typography');
  const t = (n: string) => n;


  const { fonts, fontSizes, fontSizeOrder } = typography;
  const { typefaces, keys } = fonts;
  return (
    <Section title="Typography">
      <Box p={80} pt={0}>
        {fontSizeOrder.map((fontSize) => (
          <Row mb={5} alignItems="center">
            <Text fontSize={24} color="#555" minWidth={256}>
              {`Headline ${fontSize}`}
            </Text>
            <Box flex={1}>
              <Text
                fontFamily="primary"
                fontSize={fontSize}
              >
                {`${fontSize} / ${fonts.primary} / ${fontSizes[fontSize]}px`}
              </Text>
            </Box>
          </Row>
        ))}
      </Box>
    </Section>
  );
};

export default Typography;
