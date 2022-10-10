import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Collapse,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { linkDetails } from './__linkDeatils';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  setOpen: () => void;
}

const CollapseMenu: React.FunctionComponent<SidebarProps> = ({
  isOpen,
  setOpen,
}) => {
  console.log(isOpen);
  return (
    <React.Fragment>
      <Collapse in={isOpen}>
        <Box
          display={{ md: 'none', sm: 'flex' }}
          flexDir="column"
          m="5"
          p="5"
          borderRadius="md"
          minH="50vh"
          justifyContent="space-between"
          alignItems="start"
          bg={useColorModeValue('black', 'gray.700')}
        >
          <Stack
            display={{ md: 'none', sm: 'flex' }}
            flexDir="column"
            alignItems="start"
          >
            {linkDetails.map(
              (
                item: { link: any; name: any },
                index: React.Key | null | undefined
              ) => (
                <Button
                  key={index}
                  as={NavLink}
                  variant={'ghost'}
                  size="sm"
                  onClick={setOpen}
                  colorScheme="blue"
                  to={item.link}
                  _focus={{ boxShadow: 'outline' }}
                >
                  {item.name}
                </Button>
              )
            )}
          </Stack>
          <ButtonGroup display={{ sm: 'flex' }}>
            <Button
              as={NavLink}
              to="/login"
              border="2px"
              variant="outline"
              size="sm"
              onClick={setOpen}
              colorScheme="blue"
              _focus={{ boxShadow: 'outline' }}
            >
              Log in
            </Button>
            <Button
              as={NavLink}
              to="/signup"
              variant="solid"
              size="sm"
              colorScheme="blue"
              onClick={setOpen}
              _focus={{ boxShadow: 'outline' }}
            >
              Sign up
            </Button>
          </ButtonGroup>
        </Box>
      </Collapse>
    </React.Fragment>
  );
};

export default CollapseMenu;
