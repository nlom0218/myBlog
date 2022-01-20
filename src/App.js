import { useReactiveVar } from '@apollo/client';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkModeVar, hideRightContents, leftPageVar, rightContentsVar, rightPageVar, seeRightContents, setInitLoad } from './apollo';
import BasicContainer from './Components/Shared/BasicContainer';
import LeftContainer from './Components/Shared/LeftContainer';
import RightContainer from './Components/Shared/RightContainer';
import MyLifeHome from './pages/MyLife/MyLifeHome';
import StudyHome from './pages/Study/StudyHome';
import { darkTheme, GlobalStyle, ligthTheme } from './styles';

function App() {
  const darkMode = useReactiveVar(darkModeVar)
  const rightContents = useReactiveVar(rightContentsVar)
  const leftPage = useReactiveVar(leftPageVar)
  const rightPage = useReactiveVar(rightPageVar)
  console.log(leftPage, rightPage);

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
          {leftPage === "travel" && <div>나의 여행 기록</div>}
        </LeftContainer>

        {/* STUDY */}
        <RightContainer>
          {!rightPage && <StudyHome />}
        </RightContainer>
      </BasicContainer>
    </ThemeProvider>

  );
}

export default App;
