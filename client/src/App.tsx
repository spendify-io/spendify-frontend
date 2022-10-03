import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, theme } from '@chakra-ui/react';
import './styles/index.css';

/***** Component Imports *****/
import Header from './components/Header';
import Login from './pages/Login';

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
