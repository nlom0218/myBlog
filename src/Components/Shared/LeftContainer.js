import { useReactiveVar } from '@apollo/client';
import styled from 'styled-components';
import { FadeOutLeftContainer, FadeInLeftContainer } from '../../animation/containerFadeAni';
import { enableRightContents, rightContentsVar } from '../../apollo';

const SLeftContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: ${props => props.rightContents ? "100%" : "0"};
  left: ${props => props.rightContents ? "-100%" : "0"};
  animation: ${props => props.rightContents ? FadeOutLeftContainer : FadeInLeftContainer} 1.5s ease-in-out;
  min-height: 100vh;
  max-height: 100vh;
  overflow-x: scroll;
  -ms-overflow-style: none; // IE and Edge
  scrollbar-width: none; // Firefox
  ::-webkit-scrollbar {
    display: none; // Chrome, Safari, Opera
  }
  background-color: ${props => props.theme.bgColor};
  display: grid;
  grid-template-columns: 1fr auto;
`

const DivideBar = styled.div`
  width: 30px;
  min-height: 100vh;
  background-color: red;
`

const LeftContainer = ({ children }) => {
  const rightContents = useReactiveVar(rightContentsVar)

  const onClickDivideBar = () => {
    enableRightContents()
  }

  return (<SLeftContainer rightContents={rightContents}>
    {children}
    <DivideBar rightContents={rightContents} onClick={onClickDivideBar} />
  </SLeftContainer>);
}


export default LeftContainer