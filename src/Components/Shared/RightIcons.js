import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { disableRightContents, hideRightContents, moveHome, movePage, notInitLoad } from '../../apollo';
import { AiOutlineHome } from "react-icons/ai";
import { BarIcon } from './BarIcon';
import { BarContainer } from './BarContainer';
import { BsCalendarDate } from 'react-icons/bs';

const RightIcons = () => {
  const onClickDivideBar = () => {
    disableRightContents()
    notInitLoad()
    setTimeout(() => {
      hideRightContents()
    }, 1500)
  }
  const onClickBarIcon = (direction, page) => {
    if (!page) {
      moveHome(direction)
    } else {
      movePage(direction, page)
    }
  }
  return (<BarContainer>
    <BarIcon onClick={onClickDivideBar}><BiRightArrowAlt /></BarIcon>
    <BarIcon onClick={moveHome}><AiOutlineHome /></BarIcon>
    <BarIcon onClick={() => onClickBarIcon("right", "calendar")}><BsCalendarDate /></BarIcon>
  </BarContainer>);
}

export default RightIcons;