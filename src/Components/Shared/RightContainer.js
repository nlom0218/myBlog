import { useReactiveVar } from '@apollo/client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FadeInRightContainer, FadeOutRightContainer } from '../../animation/containerFadeAni';
import { disableRightContents, hideRightContents, initLoadVar, isSeeRightContentsVar, notInitLoad, rightContentsVar } from '../../apollo';

const SRightContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.rightContents ? "0" : "-100%"};
  left: ${props => props.rightContents ? "0" : "100%"};
  animation: ${props => !props.initLoad && (props.rightContents ? FadeInRightContainer : FadeOutRightContainer)} 1.5s ease-in-out;
  min-height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  ::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
  background-color: ${props => props.theme.bgColor};
  transition: background-color 1s ease;
  display: ${props => props.isSeeRightContents ? "grid" : "none"};
  grid-template-columns: auto 1fr;
`

const DivideBar = styled.div`
  width: 60px;
  width: 3.75rem;
  min-height: 100vh;
  background-color: ${props => props.theme.menuBgColor};
  transition: background-color 1s ease;
`

const RightContainer = ({ children }) => {
  const rightContents = useReactiveVar(rightContentsVar)
  const initLoad = useReactiveVar(initLoadVar)
  const isSeeRightContents = useReactiveVar(isSeeRightContentsVar)

  const onClickDivideBar = () => {
    disableRightContents()
    notInitLoad()
    setTimeout(() => {
      hideRightContents()
    }, 1500)
  }

  return <SRightContainer rightContents={rightContents} isSeeRightContents={isSeeRightContents} initLoad={initLoad}>
    <DivideBar rightContents={rightContents} onClick={onClickDivideBar}>

    </DivideBar>
    {children}
  </SRightContainer>;
}


export default RightContainer