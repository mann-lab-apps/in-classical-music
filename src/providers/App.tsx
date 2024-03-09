import React from 'react';
import { theme } from '@/libraries/styled';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
