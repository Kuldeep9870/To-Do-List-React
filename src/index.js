import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider,theme } from '@chakra-ui/react'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
    <App />
    </ChakraBaseProvider>
  </React.StrictMode>
);
