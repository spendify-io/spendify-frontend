import React, { useState } from 'react';
import {
  Container,
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  FormErrorMessage,
  CircularProgress,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import common from '../../helpers/common';
import axios from 'axios';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmailMessage, setErrorEmailMessage] = useState('');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
  const [errorFirstName, setErrorFirstName] = useState('');
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorLastName, setErrorLastName] = useState('');
  const navigate = useNavigate();

  const handleChangeFirstName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLastName(e.target.value);
  };

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

    if (!email && !password && !firstName && !lastName) {
      setError(true);
      setErrorEmailMessage('Email is required');
      setErrorPasswordMessage('Password is required');
      setErrorFirstName('First name is required');
      setErrorLastName('Last name is required');
    }

    if (
      common.validEmail(email) &&
      email &&
      password &&
      firstName &&
      lastName
    ) {
      setLoading(true);
      axios
        .post(common.apiURL + '/signup', {
          email,
          password,
          firstName,
          lastName,
        })
        .then(response => {
          console.log(response.data, 111);
          navigate('/login');
          // localStorage.setItem('token') =
        })
        .catch(error => {
          setError(true);
          setErrorEmailMessage('Please enter correct email address');
          setErrorPasswordMessage('Please enter correct password');
          setErrorFirstName('Please enter the first name');
          setErrorLastName('Please enter the last name');
          common.alertToastHandling(error?.response?.data?.message);
        });
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <Container w={'auto'} mt={24}>
        <Box>
          <form onSubmit={handleSubmit}>
            <VStack>
              {/***** First Name Input *****/}
              <FormControl isRequired={isError} isInvalid={isError}>
                <FormLabel htmlFor="first-name">First Name</FormLabel>
                <Input
                  type={'text'}
                  name="first-name"
                  id="first-name"
                  variant="filled"
                  value={firstName}
                  onChange={handleChangeFirstName}
                  placeholder="Enter your first name"
                />
                {isError ? (
                  <FormErrorMessage>{errorFirstName}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/***** Last Name Input *****/}
              <FormControl isRequired={isError} isInvalid={isError}>
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <Input
                  type={'text'}
                  name="last-name"
                  id="last-name"
                  variant="filled"
                  value={lastName}
                  onChange={handleChangeLastName}
                  placeholder="Enter your last name"
                />
                {isError ? (
                  <FormErrorMessage>{errorLastName}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/***** Email Input *****/}
              <FormControl isRequired={isError} isInvalid={isError}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type={'email'}
                  name="email"
                  id="email"
                  variant="filled"
                  value={email}
                  onChange={handleChangeEmail}
                  placeholder="Enter your email address"
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
                  type={'password'}
                  name="password"
                  id="password"
                  variant="filled"
                  value={password}
                  onChange={handleChangePassword}
                  placeholder="Enter your password"
                />
                {isError ? (
                  <FormErrorMessage>{errorPasswordMessage}</FormErrorMessage>
                ) : (
                  <></>
                )}
              </FormControl>

              {/* Login Button */}
              <Button
                w={'full'}
                type={'submit'}
                color="white"
                bgColor={'blue.500'}
                _hover={
                  localStorage.getItem('isDarkMode')
                    ? { bgColor: 'blue.600' }
                    : { bgColor: 'blue.400' }
                }
                _focus={{ transform: 'scale(1.02)' }}
              >
                {loading ? (
                  <CircularProgress isIndeterminate size="24px" color="white" />
                ) : (
                  'Sign Up'
                )}
              </Button>
            </VStack>
          </form>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default SignUp;
