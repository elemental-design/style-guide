import React, { ReactNode } from 'react';
import { Box, Text } from 'elemental-react';

const Code = ({ children, ...props }: {
  children: ReactNode,
}) => (
  <Box borderRadius={3} bg="rgba(27,31,35,.1)" pr={2} pl={2} pt={1} pb={1} alignItems="center" {...props}>
    <Text name="Swatch Name" fontSize={18}>
      <Text color="#000" fontFamily="Courier">
        {children}
      </Text>
    </Text>
  </Box>
);

export default Code;
