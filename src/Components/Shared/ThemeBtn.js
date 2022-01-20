import React from 'react';
import styled from 'styled-components';
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useReactiveVar } from '@apollo/client';
import { darkModeVar, disableDarkMode, enableDarkMode, rightContentsVar } from '../../apollo';
import { color } from "../../styles"
import { opacityThemeBtn } from '../../animation/themeBtnAni';

const SThemeBtn = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 1%;
  right: 1%;
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

const ThemeBtn = () => {
  const darkMode = useReactiveVar(darkModeVar)
  const rightContents = useReactiveVar(rightContentsVar)

  const onClickThemeBtn = () => {
    if (darkMode) {
      disableDarkMode()
    } else {
      enableDarkMode()
    }
  }

  return (<SThemeBtn darkMode={darkMode} onClick={onClickThemeBtn} rightContents={rightContents}>
    {darkMode ? <BsSunFill /> : <BsMoonStarsFill />}
  </SThemeBtn>);
}

export default ThemeBtn;