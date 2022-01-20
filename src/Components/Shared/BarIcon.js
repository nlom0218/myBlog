import styled from "styled-components";

export const BarIcon = styled.div`
  cursor: pointer;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 40px;
  width: 2.5rem;
  height: 40px;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.menuFontColor};
  transition: border 1s ease;
  svg {
    font-size: 1.5em;
    font-size: 1.5rem;
    display: flex;
  }
  :hover {
    background-color: ${props => props.theme.menuFontColor};
    color: ${props => props.theme.menuBgColor};
    transition: background-color 0.6s ease, color 0.6 ease;
  }
`