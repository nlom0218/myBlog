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
  ligthRed: "#fc8876",
  yellow: "rgba(255, 255, 40)",
  gray: "#e2e2e2",
  maroon: "#555555",
}

export const ligthTheme = {
  bgColor: color.white,
  fontColor: color.black,
  menuBgColor: "rgb(179, 205, 224)",
  menuFontColor: "rgb(3, 57, 107)",
  redColor: color.red,
  blurColor: "rgba(200, 200, 200, 1)",
  popupBgColor: "rgba(0,0,0,0.75)",
}

export const darkTheme = {
  bgColor: color.black,
  fontColor: color.white,
  menuBgColor: "rgb(3, 57, 107)",
  menuFontColor: "rgb(179, 205, 224)",
  redColor: color.ligthRed,
  blurColor: "rgba(90, 90, 90, 1)",
  popupBgColor: "rgba(200,200,200,0.8)",
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    min-height: 100vh;
    position: relative;
    background-color: ${props => props.theme.menuBgColor};
    color: ${props => props.theme.fontColor};
    transition: background-color 1s ease, color 1s ease;
    font-size: 1em;
    font-size: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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

