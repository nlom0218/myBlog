import { useReactiveVar } from '@apollo/client';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkModeVar, hideRightContents, leftPageVar, rightContentsVar, rightPageVar, seeRightContents, setInitLoad } from './apollo';
import BasicContainer from './Components/Shared/BasicContainer';
import LeftContainer from './Components/Shared/LeftContainer';
import RightContainer from './Components/Shared/RightContainer';
import MyLifeHome from './pages/MyLife/MyLifeHome';
import SchoolLife from './pages/MyLife/SchoolLife';
import Travel from './pages/MyLife/Travel';
import Calendar from './pages/Study/Calendar';
import StudyHome from './pages/Study/StudyHome';
import { darkTheme, GlobalStyle, ligthTheme } from './styles';

function App() {
  const darkMode = useReactiveVar(darkModeVar)
  const rightContents = useReactiveVar(rightContentsVar)
  const leftPage = useReactiveVar(leftPageVar)
  const rightPage = useReactiveVar(rightPageVar)

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
      <BasicContainer>

        {/* MY LIFE */}
        <LeftContainer>
          {!leftPage && <MyLifeHome />}
          {leftPage === "travel" && <Travel />}
          {leftPage === "school" && <SchoolLife />}
        </LeftContainer>

        {/* STUDY */}
        <RightContainer>
          {!rightPage && <StudyHome />}
          {rightPage === "calendar" && <Calendar />}
        </RightContainer>
      </BasicContainer>
    </ThemeProvider>

  );
}

export default App;
