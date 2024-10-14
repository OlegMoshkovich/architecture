"use client";
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import simpleTheme from './theme'; // Import the simple theme
import Home from './Containers/Home'; // Adjust the path as necessary

function App() {
  return (
    <ThemeProvider theme={simpleTheme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
