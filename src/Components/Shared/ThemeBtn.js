import React from 'react';
import styled from 'styled-components';
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { useReactiveVar } from '@apollo/client';
import { darkModeVar, disableDarkMode, enableDarkMode, rightContentsVar } from '../../apollo';
import { color } from "../../styles"
import { opacityThemeBtn } from '../../animation/themeBtnAni';

const SThemeBtn = styled.div`
  margin: 20px 0px;
  margin: 1.25rem 0rem;
  cursor: pointer;
  font-size: 1.5em;
  font-size: 1.5rem;
  width: 40px;
  width: 2.5rem;
  height: 40px;
  height: 2.5rem;
  border-radius: 50%;
  color: ${props => props.darkMode ? color.red : color.yellow};
  border: 1px solid ${props => props.darkMode ? color.red : color.yellow};
  transition: color 1s ease, background-color 1s ease, border 1s ease;
  svg {
    display: flex;
  }
  display: grid;
  align-items: center;
  justify-items: center;
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