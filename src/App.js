import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { darkModeVar } from './apollo';
import Home from './pages/Home';
import { darkTheme, GlobalStyle, ligthTheme } from './styles';

function App() {
  const darkMode = useReactiveVar(darkModeVar)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : ligthTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
