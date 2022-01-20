import { useReactiveVar } from '@apollo/client';
import styled from 'styled-components';
import { FadeOutLeftContainer, FadeInLeftContainer } from '../../animation/containerFadeAni';
import { initLoadVar, rightContentsVar } from '../../apollo';
import LeftIcons from './LeftIcons';

const SLeftContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.rightContents ? "100%" : "0"};
  left: ${props => props.rightContents ? "-100%" : "0"};
  animation: ${props => !props.initLoad && (props.rightContents ? FadeOutLeftContainer : FadeInLeftContainer)} 1.5s ease-in-out;
`

const ContentsContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 60px;
  right: 3.75rem;
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
`

const DivideBar = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 60px;
  width: 3.75rem;
  min-height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  ::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
  background-color: ${props => props.theme.menuBgColor};
  color: ${props => props.theme.menuFontColor};
  transition: background-color 1s ease, color 1s ease;
  display: grid;
  align-items: flex-start;
`

const LeftContainer = ({ children }) => {
  const rightContents = useReactiveVar(rightContentsVar)
  const initLoad = useReactiveVar(initLoadVar)

  return (<SLeftContainer rightContents={rightContents} initLoad={initLoad}>
    <ContentsContainer>
      {children}
    </ContentsContainer>
    <DivideBar rightContents={rightContents}>
      <LeftIcons />
    </DivideBar>
  </SLeftContainer>);
}


export default LeftContainer