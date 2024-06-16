import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from './theme/ProviderTheme';
import AllRoutes from './routes/routers';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
          <AllRoutes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
