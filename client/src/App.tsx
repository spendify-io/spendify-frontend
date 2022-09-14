import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import './styles/index.css';

/***** Component Imports *****/
import Navbar from './components/Navbar';
import Login from './components/Login';

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Login />
    </BrowserRouter>
  </ChakraProvider>
);
