import { keyframes } from "styled-components";

export const welcomeTitleAni = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
`

export const welcomeDownIconAni = keyframes`
  from {
    bottom: 60px;
    opacity: 0.8;
  }
  to {
    bottom: 20px;
    opacity: 0.2;
  }
`