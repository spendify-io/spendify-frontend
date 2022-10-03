import React from 'react';
import { NavLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Box,
  Flex,
  Link,
  Text,
  Stack,
  Button,
  useColorModeValue,
  useColorMode,
  Image,
  ButtonGroup,
} from '@chakra-ui/react';

import logo from '../../assets/svgs/spendify-logo.svg';

const Header: React.FunctionComponent = () => {
  const colorModeText = useColorModeValue('light', 'dark');

  return (
    <React.Fragment>
      <Box position="fixed" top="0" zIndex="10" minW="100%">
        <Flex
          backdropFilter={'blur(4px)'}
          border={'none'}
          minH="60px"
          py={{ base: 2, md: 3 }}
          px={{ base: 4, md: 7 }}
          alignSelf={'center'}
        >
          <Stack
            flex={{ base: 1, md: 1 }}
            justify={'start'}
            direction={'row'}
            align={'center'}
          >
            <Link
              as={NavLink}
              to="/"
              textDecoration="none"
              style={{ textDecoration: 'none' }}
            >
              <Image src={logo} w={'28'} alt="logo" />
            </Link>
          </Stack>
          <Stack
            flex={{ base: 1, md: 1 }}
            justify={'end'}
            direction={'row'}
            align={'center'}
            spacing={3}
            mx={{
              base: 0,
            }}
          >
            <ColorModeSwitcher
              justifySelf="flex-end"
              display={{ base: 'none', md: 'inline-flex' }}
            />
            <ButtonGroup>
              <Button
                as={NavLink}
                to="/login"
                border={'2px'}
                borderColor={'blue.500'}
                variant={'outline'}
                size={'md'}
                colorScheme="blue"
              >
                Log In
              </Button>
              <Button
                bgColor={'blue.500'}
                as={NavLink}
                to="/signup"
                variant={'ghost'}
                size={'md'}
                _hover={
                  colorModeText === 'light'
                    ? { bgColor: 'blue.600' }
                    : { bgColor: 'blue.400' }
                }
                color={colorModeText === 'light' ? 'white' : 'black'}
              >
                Sign Up
              </Button>
            </ButtonGroup>
          </Stack>
        </Flex>
      </Box>
    </React.Fragment>
  );
};

export default Header;
