import React from 'react';
import { Box, Headline, Text, Line } from 'elemental-react';

const Section = ({ title, description, children }) => (
  <Box>
    <Box p={80}>
      <Headline.H2 mb={4}>
        {title}
      </Headline.H2>
      {Boolean(description) && (
        <Text fontSize={24}>
          {description}
        </Text>
      )}
    </Box>
    <Line bg="#ddd" width="100%" />
    {children}
  </Box>
);

export default Section;
