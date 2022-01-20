import { useReactiveVar } from '@apollo/client';
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { FadeInRightContainer, FadeOutRightContainer } from '../../animation/containerFadeAni';
import { disableRightContents, hideRightContents, initLoadVar, isSeeRightContentsVar, notInitLoad, rightContentsVar } from '../../apollo';
import routes from '../../routes';

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

const RightContainer = ({ children }) => {
  const navigate = useNavigate()

  const rightContents = useReactiveVar(rightContentsVar)
  const initLoad = useReactiveVar(initLoadVar)
  const isSeeRightContents = useReactiveVar(isSeeRightContentsVar)

  const onClickDivideBar = () => {
    navigate(routes.home)
    disableRightContents()
    notInitLoad()
    setTimeout(() => {
      hideRightContents()
    }, 1500)
  }

  return <SRightContainer rightContents={rightContents} isSeeRightContents={isSeeRightContents} initLoad={initLoad}>
    <DivideBar rightContents={rightContents}>
      <BarIcon onClick={onClickDivideBar}><BiRightArrowAlt /></BarIcon>
    </DivideBar>
    <ContentsContainer>
      {children}
    </ContentsContainer>
  </SRightContainer>;
}


export default RightContainer