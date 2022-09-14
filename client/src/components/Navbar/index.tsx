import React from 'react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Box, Flex, Link, Text, Stack, Button } from '@chakra-ui/react';

const Header: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Box
        // background={'blackAlpha.50'}
        position="fixed"
        top="0"
        left="0"
        zIndex="10"
        minW="100%"
      >
        <Flex
          style={{ backdropFilter: 'blur(7px)', border: 'none' }}
          minH="60px"
          py={{ base: 2 }}
          px={{ base: 4, md: 6 }}
          borderBottom={1}
          borderStyle={'solid'}
          align={'center'}
        >
          <Flex flex={{ base: 0 }} justify={{ base: 'start' }}>
            <Text fontFamily="heading" fontSize="3xl" fontWeight={800}>
              <Link
                as={NavLink}
                to="/"
                textDecoration="none"
                style={{ textDecoration: 'none' }}
                className="navbar-brand"
              >
                Spendify
              </Link>
            </Text>
          </Flex>
          <Stack
            flex={{ base: 1, md: 1 }}
            justify={'end'}
            direction={'row'}
            align={'center'}
            spacing={6}
            mx={{
              base: 0,
              md: 12,
            }}
          >
            <ColorModeSwitcher
              justifySelf="flex-end"
              display={{ base: 'none', md: 'inline-flex' }}
            />
            <Button as={NavLink} to="/login" variant={'outline'} size={'sm'}>
              Log In
            </Button>
            <Button as={NavLink} to="/signup" variant={'ghost'} size={'sm'}>
              Sign Up
            </Button>
          </Stack>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default Header;
