import { useReactiveVar } from '@apollo/client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FadeInRightContainer, FadeOutRightContainer } from '../../animation/containerFadeAni';
import { disableRightContents, rightContentsVar } from '../../apollo';

const SRightContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.rightContents ? "0" : "-100%"};
  left: ${props => props.rightContents ? "0" : "100%"};
  animation: ${props => props.rightContents ? FadeInRightContainer : FadeOutRightContainer} 1.5s ease-in-out;
  min-height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  ::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
  background-color: ${props => props.theme.bgColor};
  display: ${props => props.isSeeDisplay ? "grid" : "none"};
  grid-template-columns: auto 1fr;
`

const DivideBar = styled.div`
  width: 30px;
  min-height: 100vh;
  background-color: red;
`

const RightContainer = ({ children }) => {
  const rightContents = useReactiveVar(rightContentsVar)
  const [isSeeDisplay, setIsSeeDisplay] = useState(rightContents ? true : false)

  const onClickDivideBar = () => {
    disableRightContents()
  }

  useEffect(() => {
    if (rightContents) {
      setIsSeeDisplay(true)
    } else {
      setTimeout(() => {
        setIsSeeDisplay(false)
      }, 1500)
    }
  }, [rightContents])
  return <SRightContainer rightContents={rightContents} isSeeDisplay={isSeeDisplay}>
    <DivideBar rightContents={rightContents} onClick={onClickDivideBar} />
    {children}
  </SRightContainer>;
}


export default RightContainer