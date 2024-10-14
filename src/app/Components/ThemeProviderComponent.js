"use client";

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
export default function ThemeProviderComponent({ children }) {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

