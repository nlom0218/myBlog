import React from 'react';
import { enableRightContents, notInitLoad, seeRightContents, moveHome, movePage, leftPageVar } from '../../apollo';
import { BiLeftArrowAlt } from "react-icons/bi";
import { BarIcon } from './BarIcon';
import { AiOutlineHome } from "react-icons/ai";
import { BarContainer } from './BarContainer';
import { FaPlane } from "react-icons/fa";
import { useReactiveVar } from '@apollo/client';

const LeftIcons = () => {
  const onClickDivideBar = () => {
    enableRightContents()
    notInitLoad()
    seeRightContents()
  }
  const onClickBarIcon = (direction, page) => {
    if (!page) {
      moveHome(direction)
    } else {
      movePage(direction, page)
    }
  }
  return (<BarContainer>
    <BarIcon onClick={onClickDivideBar}><BiLeftArrowAlt /></BarIcon>
    <BarIcon onClick={() => onClickBarIcon("left")}>
      <AiOutlineHome />
    </BarIcon>
    <BarIcon onClick={() => onClickBarIcon("left", "travel")}>
      <FaPlane />
    </BarIcon>
  </BarContainer>);
}

export default LeftIcons;