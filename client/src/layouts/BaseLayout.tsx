import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const BaseLayout: React.FunctionComponent<BoxProps> = ({
  children,
  ...props
}) => {
  return (
    <React.Fragment>
      <Box
        px={{ base: 6, md: 8, lg: 24, xl: 36, sm: 0 }}
        pt={{ base: 8, sm: 16, md: 20 }}
        pb="0"
        {...props}
      >
        {children}
      </Box>
    </React.Fragment>
  );
};

export default BaseLayout;
