/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */


import React, { Fragment } from 'react';
import {
  ThemeProvider, Box, Row, Headline, Text,
} from 'elemental-react';
import { Svg } from 'react-sketchapp';

import { Section, Code } from '@elemental-design/style-guide';

const Circle = ({
  size, borderColor, borderRadius, borderWidth, bg, ...boxProps
}) => (
  <Box {...boxProps}>
    <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Svg.Circle cx={`${size / 2}`} cy={`${size / 2}`} r={`${size / 2}`} fill={bg} />
    </Svg>
  </Box>
)

const BulletPoint = props => <Circle size={6} borderWidth="0.01px" bg="selected" mr={2} {...props} />;

const P = props => <Text color="selected" lineHeight="body" fontSize="body" fontFamily="primary" mb={2} {...props} />;
P.displayName = 'P';

const design = {
  Button: {
    outlined: true,
  },
  ButtonText: {
    textTransform: 'uppercase',
    fontFamily: 'primaries.medium',
  },
  H1: {
    fontFamily: 'secondary',
    mb: 3,
  },
  H2: {
    fontFamily: 'primaries.semiBold',
    mb: 3,
  },
  H3: {
    fontFamily: 'secondary',
    mb: 3,
  },
  H4: {
    fontFamily: 'secondary',
    mb: 3,
  },
  H5: {
    fontFamily: 'secondary',
    mb: 3,
  },
  H6: {
    fontFamily: 'secondaries.semiBold',
    mb: 3,
  },
};

export default {
  wrapper({ children, color, title, description, ...otherProps }) {
    return (
      <ThemeProvider
        design={design}
        theme={props => ({
          ...props,
          colors: {
            ...props.colors,
            selected: color || props.colors.black,
          },
        })}
      >
        <Section title={title} description={description}>
          <Box p={80} {...otherProps}>
            {children}
          </Box>
        </Section>
      </ThemeProvider>
    );
  },
  textgroup: ({ ...props }) => {
    return <Text {...props} />;
  },
  ul({ children, ...props }) {
    // console.log(JSON.stringify(children));
    return (
      <Box ml={3} {...props}>
        {children}
      </Box>
    );
  },
  ol: ({ children }) => {
    return <Box {...props}>{children}</Box>
  },
  div: Box,
  br: ({ children }) => <Text>{'\n'}</Text>,
  li({ children, ...props }) {
    // return (
    //   <Box>
    //     <Text>{'\u00B7'}</Text>
    //     <Box>
    //       {children}</Box>
    //   </Box>
    // )
    // console.dir(children);
    // console.dir(children);

    if (typeof children === 'string') {
      return (
        <Row alignItems="center" mb={2} {...props}>
          <BulletPoint />
          <P mb={0}>{children}</P>
        </Row>
      );
    }

    if (children.find((child) => {
      try {
        const { props: { originalType: type } } = child;
        return type === 'ul'
      } catch (err) {
        return false;
      }
    })) {
      return (children || []).map((child, i) => (
        typeof child === 'string' ? (
          <Row alignItems="center" mb={2} key={i} {...props}>
            <BulletPoint />
            <P mb={0}>
              {child}
            </P>
          </Row>
        ) : child
      ))
    }
    // console.dir(children);

    return Array.isArray(children) ? (
      <Row alignItems="center" mb={2} {...props}>
        <BulletPoint />
        {(children || []).map((child, i) => (
          typeof child === 'string' ? (
            <P mb={0} key={i}>
              {child}
            </P>
            // <Row alignItems="center" key={i} {...props}>
            //   <BulletPoint />
            //   <P>
            //     {child}
            //   </P>
            // </Row>
          ) : child
        ))}
      </Row>
    ) : null;
  },
  h1(props) {
    return <Headline.H1 color="selected" {...props} />;
  },
  h2(props) {
    return <Headline.H2 color="selected" {...props} />;
  },
  h3(props) {
    return <Headline.H3 color="selected" {...props} />;
  },
  h4(props) {
    return <Headline.H4 color="selected" {...props} />;
  },
  h5(props) {
    return <Headline.H5 color="selected" {...props} />;
  },
  h6(props) {
    return <Headline.H6 color="selected" {...props} />;
  },
  p: P,
  text: P,
  strong(props) {
    return <P bold color={null} mb={0} {...props} />;
  },
  a(props) {
    return <P color="blue" mb={0} {...props} />;
  },
  inlineCode(props) {
    return <Code ml={1} mr={1} {...props} />;
  },
};
