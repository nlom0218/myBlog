import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { disableRightContents, hideRightContents, moveHome, notInitLoad } from '../../apollo';
import { AiOutlineHome } from "react-icons/ai";
import { BarIcon } from './BarIcon';
import { BarContainer } from './BarContainer';

const RightIcons = () => {
  const onClickDivideBar = () => {
    disableRightContents()
    notInitLoad()
    setTimeout(() => {
      hideRightContents()
    }, 1500)
  }
  return (<BarContainer>
    <BarIcon onClick={onClickDivideBar}><BiRightArrowAlt /></BarIcon>
    <BarIcon onClick={moveHome}><AiOutlineHome /></BarIcon>
  </BarContainer>);
}

export default RightIcons;