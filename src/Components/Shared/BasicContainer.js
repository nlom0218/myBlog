import { useReactiveVar } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { darkModeVar, disableDarkMode, disableRightContents, enableDarkMode, enableRightContents, rightContentsVar } from '../../apollo';
import { color } from "../../styles"

const Container = styled.div`
  position: relative;

`

const ThemeBtn = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 1%;
  right: 40px;
  right: 2.5rem;
  font-size: 1.25em;
  font-size: 1.25rem;
  padding: 10px 20px;
  padding: 0.625rem 1.25rem;
  border-radius: 20px;
  border-radius: 1.25rem;
  color: ${props => props.darkMode ? color.red : color.yellow};
  background-color: ${props => props.theme.fontColor};
  transition: color 1s ease, background-color 1s ease;
  svg {
    display: flex;
  }
`

const BasicContainer = ({ children }) => {
  const darkMode = useReactiveVar(darkModeVar)
  const rightContents = useReactiveVar(rightContentsVar)
  const onClickThemeBtn = () => {
    if (darkMode) {
      disableDarkMode()
    } else {
      enableDarkMode()
    }
  }
  const onClickDivideBar = () => {
    if (rightContents) {
      disableRightContents()
    } else {
      enableRightContents()
    }
  }
  return (<Container>
    {children}
    <ThemeBtn darkMode={darkMode} onClick={onClickThemeBtn}>
      {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
    </ThemeBtn>
  </Container>);
}

export default BasicContainer;