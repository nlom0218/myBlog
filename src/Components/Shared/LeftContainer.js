import { useReactiveVar } from '@apollo/client';
import { BiLeftArrowAlt } from "react-icons/bi";
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
  color: ${props => props.theme.menuFontColor};
  transition: background-color 1s ease, color 1s ease;
  display: grid;
  align-items: flex-start;
  padding: 20px 0px;
  padding: 1.25rem 0rem;
  row-gap: 20px;
  row-gap: 1.25rem;
  justify-items: center;
`

const BarIcon = styled.div`
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.menuFontColor};
  transition: border 1s ease;
  svg {
    font-size: 2rem;
    display: flex;
  }
  :hover {
    background-color: ${props => props.theme.menuFontColor};
    color: ${props => props.theme.menuBgColor};
    transition: background-color 0.6s ease, color 0.6 ease;
  }
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
    <DivideBar rightContents={rightContents}>
      <BarIcon onClick={onClickDivideBar}><BiLeftArrowAlt /></BarIcon>
    </DivideBar>
  </SLeftContainer>);
}


export default LeftContainer