import React, { ReactNode } from 'react';
import { Box, Headline, Text, Line } from 'elemental-react';

interface SectionProps {
  title: string,
  description?: string,
  children: ReactNode,
};

const Section = ({ title, description, children }: SectionProps) => (
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
