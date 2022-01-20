import { useReactiveVar } from '@apollo/client';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkModeVar, hideRightContents, rightContentsVar, seeRightContents, setInitLoad } from './apollo';
import Home from './pages/Home';
import routes from './routes';
import { darkTheme, GlobalStyle, ligthTheme } from './styles';

function App() {
  const darkMode = useReactiveVar(darkModeVar)
  const rightContents = useReactiveVar(rightContentsVar)

  useEffect(() => {
    setInitLoad()
    if (rightContents) {
      seeRightContents()
    } else {
      hideRightContents()
    }
  }, [])
  return (
    <ThemeProvider theme={darkMode ? darkTheme : ligthTheme}>
      <GlobalStyle />
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
