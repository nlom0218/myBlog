import { createGlobalStyle } from "styled-components"
import { generateMedia } from "styled-media-query";
import reset from "styled-reset"

export const customMedia = generateMedia({
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
});

export const color = {
  white: "rgba(240, 240, 240)",
  black: "rgba(40, 40, 40)",
  red: "rgba(255, 80,80)",
  yellow: "rgba(255, 255, 40)"
}

export const ligthTheme = {
  bgColor: color.white,
  fontColor: color.black
}

export const darkTheme = {
  bgColor: color.black,
  fontColor: color.white
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    min-height: 100vh;
    position: relative;
    background-color: red;
    color: ${props => props.theme.fontColor};
    transition: background-color 1s ease, color 1s ease;
    font-size: 1em;
    font-size: 1rem;
  }
  * {
    box-sizing: border-box;
    user-select: none;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
    transition: color 1s ease;
  }
  input {
    all: unset;
    box-sizing: border-box;
  }
  input, textarea {
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto; 
    user-select: auto;
  }
`

