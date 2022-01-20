import { useReactiveVar } from '@apollo/client';
import styled from 'styled-components';
import { FadeInRightContainer, FadeOutRightContainer } from '../../animation/containerFadeAni';
import { initLoadVar, isSeeRightContentsVar, rightContentsVar } from '../../apollo';
import RightIcons from './RightIcons';
import ThemeBtn from './ThemeBtn';

const SRightContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.rightContents ? "0" : "-100%"};
  left: ${props => props.rightContents ? "0" : "100%"};
  animation: ${props => !props.initLoad && (props.rightContents ? FadeInRightContainer : FadeOutRightContainer)} 1.5s ease-in-out;
  display: ${props => !props.isSeeRightContents && "none"};
`

const ContentsContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 60px;
  left: 3.75rem;
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
  left: 0;
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
  width: 60px;
  width: 3.75rem;
  min-height: 100vh;
  background-color: ${props => props.theme.menuBgColor};
  color: ${props => props.theme.menuFontColor};
  transition: background-color 1s ease, color 1s ease;
  display: grid;
  grid-template-rows: 1fr auto;
  justify-items: center;
  align-items: flex-start;
`

const RightContainer = ({ children }) => {
  const rightContents = useReactiveVar(rightContentsVar)
  const initLoad = useReactiveVar(initLoadVar)
  const isSeeRightContents = useReactiveVar(isSeeRightContentsVar)

  return <SRightContainer rightContents={rightContents} isSeeRightContents={isSeeRightContents} initLoad={initLoad}>
    <DivideBar rightContents={rightContents}>
      <RightIcons />
      <ThemeBtn />
    </DivideBar>
    <ContentsContainer>
      {children}
    </ContentsContainer>
  </SRightContainer>;
}


export default RightContainer