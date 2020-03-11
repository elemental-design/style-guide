import React from 'react';
import { Box, Text, Row } from 'elemental-react';
// import { useTranslation } from 'react-i18next';

import Section from './components/Section';


const Typography = ({ typography }) => {
  // const { t } = useTranslation('typography');
  const t = n => n;


  const { fonts, fontSizes, fontSizeOrder } = typography;
  const { typefaces, keys } = fonts;
  return (
    <Section title="Typography">
      <Box p={80} pt={0}>
        {/* <Headline.H3 textStyle={null} fontFamily="primary" mb={4}>
          Typefaces
        </Headline.H3>
        <Box>
          {Object.entries(typefaces).map(([id, typeface]) => (
            <Box mb={3}>
              <Headline.H4 mb={3}>
                {t(`typefaces.${id}`)} |
                <Text color="greys.5" fontSize="h4">
                  {` #${id}`}
                </Text>
              </Headline.H4>
              <Line mb={4} width="100%" />
              {['bold', 'semiBold', 'regular', 'light']
                .filter((fontWeight) => fontWeight === 'bold' || typeface[fontWeight])
                .map((fontWeight) => (
                  <Text
                    fontFamily={fontWeight !== 'bold' ? typeface[fontWeight] : typeface.regular}
                    fontSize={24}
                    bold={fontWeight === 'bold'}
                    name="Font Family"
                    mb={4}
                  >
                    {fontWeight === 'bold' ? `${typeface.regular} Bold`
                      : /`${typeface.regular} ${fontWeight}`
                    }
                  </Text>
                ))}
            </Box>
          ))}
        </Box> */}
        {/* <Headline.H3 textStyle={null} fontFamily="primary" mb={4}>
          Scale
        </Headline.H3> */}
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
