import { useReactiveVar } from '@apollo/client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FadeOutLeftContainer, FadeInLeftContainer } from '../../animation/containerFadeAni';
import { enableRightContents, initLoadVar, notInitLoad, rightContentsVar, seeRightContents } from '../../apollo';

const SLeftContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.rightContents ? "100%" : "0"};
  left: ${props => props.rightContents ? "-100%" : "0"};
  animation: ${props => !props.initLoad && (props.rightContents ? FadeOutLeftContainer : FadeInLeftContainer)} 1.5s ease-in-out;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  ::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
  background-color: ${props => props.theme.bgColor};
  transition: background-color 1s ease;
  display: grid;
  grid-template-columns: 1fr auto;
`

const DivideBar = styled.div`
  width: 60px;
  width: 3.75rem;
  min-height: 100vh;
  background-color: ${props => props.theme.menuBgColor};
  transition: background-color 1s ease;
`

const LeftContainer = ({ children }) => {
  const rightContents = useReactiveVar(rightContentsVar)
  const initLoad = useReactiveVar(initLoadVar)

  const onClickDivideBar = () => {
    enableRightContents()
    notInitLoad()
    seeRightContents()
  }

  return (<SLeftContainer rightContents={rightContents} initLoad={initLoad}>
    {children}
    <DivideBar rightContents={rightContents} onClick={onClickDivideBar}>

    </DivideBar>
  </SLeftContainer>);
}


export default LeftContainer