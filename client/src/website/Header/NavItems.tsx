import React from 'react';
import { NavLink } from 'react-router-dom';
import { linkDetails } from './__linkDeatils';
import { HStack, Button, ButtonGroup } from '@chakra-ui/react';

const NavItems: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <HStack
        display={{ base: 'flex', md: 'flex', sm: 'none' }}
        flexDir={'row'}
      >
        <ButtonGroup isAttached alignSelf="center">
          {linkDetails.map(
            (
              item: { name: any; link: any },
              index: React.Key | null | undefined
            ) => (
              <Button
                key={index}
                as={NavLink}
                variant={'ghost'}
                size="sm"
                colorScheme="blue"
                to={item.link}
                _focus={{ boxShadow: 'outline' }}
              >
                {item.name}
              </Button>
            )
          )}
        </ButtonGroup>
      </HStack>
    </React.Fragment>
  );
};

export default NavItems;
