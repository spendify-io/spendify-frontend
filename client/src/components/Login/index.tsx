import React from 'react';
import { Container, Input, Stack, Text } from '@chakra-ui/react';

const Login: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Container m={'10em'} minW={'1xl'}>
        <Stack minH={'90vh'} direction={{ base: 'column' }}>
          <Text fontWeight={600} mb="5px">
            Email
          </Text>
          <Input type={'email'} mt="2" placeholder="Your email address"></Input>
          <Text fontWeight={600} my="5px">
            Password
          </Text>
          <Input type={'password'} placeholder="Your password"></Input>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Login;
