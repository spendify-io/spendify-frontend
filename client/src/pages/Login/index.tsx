import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Input,
  Button,
  FormLabel,
  FormControl,
  Box,
  VStack,
  FormErrorMessage,
} from '@chakra-ui/react';
import axios from 'axios';
import common from '../../helpers/common';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login: React.FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
  const [isError, setError] = useState(false);
  const navigate = useNavigate();

  const handleChangeEmail = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handleChangePassword = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    setError(false);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email && !password) {
      setError(true);
      setErrorEmailMessage('Email is required');
      setErrorPasswordMessage('Password is required');
    }

    if (common.validEmail(email) && email && password) {
      axios
        .post(common.apiURL + '/login', { email, password })
        .then(response => {
          console.log(response.data, 111);
          navigate('/');
        })
        .catch(error => {
          setError(true);
          setErrorEmailMessage('Please enter correct email address');
          setErrorPasswordMessage('Please enter correct password');
          common.alertToastHandling(error?.response?.data?.message);
        });
    }
  };

  return (
    <React.Fragment>
      <Container w={'auto'} mt={24}>
        <Box>
          <form onSubmit={handleSubmit}>
            {/***** Email Input *****/}
            <VStack>
              <FormControl isRequired={isError} isInvalid={isError}>
                <FormLabel htmlFor="Email">Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  variant="filled"
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Your email address"
                />
                {isError ? (
                  <FormErrorMessage>{errorEmailMessage}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/***** Password Input *****/}
              <FormControl isRequired={isError} isInvalid={isError}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  variant="filled"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="Your password"
                />
                {isError ? (
                  <FormErrorMessage>{errorPasswordMessage}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/* Login Button */}
              <Button
                w="full"
                type="submit"
                variant="solid"
                colorScheme="blue"
                _hover={
                  localStorage.getItem('isDarkMode')
                    ? { bgColor: 'blue.600' }
                    : { bgColor: 'blue.400' }
                }
                _focus={{
                  transform: 'scale(1.02)',
                }}
              >
                Log In
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
};

export default Login;
