import React, { ComponentProps, ReactNode } from 'react';
import { Box, Headline, Text, Row } from 'elemental-react';
import chroma from 'chroma-js';
// import { useTranslation } from 'react-i18next';

import Section from './components/Section';
import Code from './components/Code';

const textColor = (hex: string) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex)
    .darken(3)
    .hex();
};


const Ampersand = ({ color, ...props }: ComponentProps<typeof Text> & { color: string }) => <Text fontSize={42} fontFamily="Helvetica" color={textColor(color)} {...props} />;

const SwatchTile = (props: ComponentProps<typeof Box>) => <Box {...props} />;

SwatchTile.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  height: 120,
  width: 120,
  bg: 'black',
}

interface SwatchProps {
  rounded?: boolean,
  id?: string,
  index?: number,
  name?: string,
  hex: string,
};


const Swatch = ({ rounded, id, index, name, hex }: SwatchProps) => (
  <Box alignItems="center">
    <SwatchTile name={`Swatch ${name}`} bg={hex}>
      <Ampersand color={hex}>
        {chroma.contrast(hex, 'white') > 4 ? 'W' : 'B'}
      </Ampersand>
    </SwatchTile>
    <Text name="Color Shade" fontSize="h6" mt={3} mb={3}>
      {index === 0 ? '50' : `${index}00`}
    </Text>
    <Text color="black" mb={3}>{hex}</Text>
    <Code>
      {`${id}.${index}`}
    </Code>
  </Box>
);

interface ColorsProps { // TODO:
  colors: {
    families: {
      [key: string]: string[],
    },
    keys: {
      [key: string]: string,
    },
    colors: {
      [key: string]: string,
    },
  }
};

const Colors = ({ colors }: ColorsProps) => {
  // const { t } = useTranslation('colors');
  const t = (n: string) => n;

  const colorFamilies = Object.entries(colors.families).map(([id, val]) => ({ id, colors: val }))
    .filter(({ id }) => !['blacks', 'whites'].includes(id));

  const colorList = Object.entries(colors.colors).map(([id, val]) => ({ id, color: val }));

  const keys = Object.entries(colors.keys).map(([id, val]) => {
    const parentFamily = colorFamilies.find(({ colors: colorList }) => colorList.includes(val));
    const parentIndex = parentFamily ? parentFamily.colors.indexOf(val) : -1;

    return { id, color: val, parent: parentFamily ? { family: parentFamily.id, index: parentIndex } : undefined };
  });
  return (
    <Section title="Colors">
      <Box p={80}>
        <Headline.H4 mb={2}>
          Key Colors
        </Headline.H4>
        <Row flexWrap="wrap" mb={3}>
          {keys.map(({ id, color, parent }) => (
            <Box alignItems="center" key={id}>
              <SwatchTile
                name={`Swatch ${id}`}
                bg={color}
                m={4}
                borderRadius={100}
                {...((chroma.contrast('white', color) < 1) && { borderColor: 'black', borderWidth: 1 })}
              />
              <Text fontFamily="Varela" fontSize={4} name="Color Shade" mb={3}>
                {/* {t(`keys.${id}`)} */}
                {id}
              </Text>
              {parent && (
                <Text name="Color Shade" fontSize={18} mb={3}>
                  {/* {`${t(`families.${parent.family}`)} ${parent.index}00`} */}
                  {`${t(`${parent.family}`)} ${parent.index}00`}
                </Text>
              )}
            </Box>
          ))}
        </Row>
        <Headline.H4 mb={2}>
          Colors
        </Headline.H4>
        <Row flexWrap="wrap" mb={3}>
          {colorList.map(({ id, color }) => (
            <Box alignItems="center" key={id}>
              <SwatchTile name={`Swatch ${id}`} bg={color} m={4} borderRadius={100} {...((chroma.contrast('white', color) < 1) && { borderColor: 'black', borderWidth: 1 })} />
              <Text name="Color Shade" fontFamily="Varela" fontSize={4} mb={3}>
                {/* {`${t(`families.${id}s`)} 500`} */}
                {`${id}s 500`}
              </Text>
            </Box>
          ))}
        </Row>
        <Headline.H4 mb={2}>
          {/* {t('colorFamilies')} */}
          Color Families
        </Headline.H4>
        {colorFamilies.map(({ id, colors }) => (
          <Box mt={3} key={id}>
            <Headline.H5 mb={3}>
              {/* {t(`families.${id}`)} */}
              {t(`${id}`)}
            </Headline.H5>
            <Row key={id}>
              {colors.map((color, i) => (
                <Swatch id={id} index={i} name={`${id}.${i}`} hex={color} key={`${color}/${i}`} />
              ))}
            </Row>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default Colors;
