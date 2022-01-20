import { keyframes } from "styled-components";

export const FadeInRightContainer = keyframes`
  from {
    right: -100%;
    left: 100%;
  }
  to {
    right: 0;
    left: 0;
  }
`

export const FadeOutRightContainer = keyframes`
  from {
    right: 0;
    left: 0;
  }
  to {
    right: -100%;
    left: 100%;
  }
`

export const FadeOutLeftContainer = keyframes`
  from {
    right: 0;
    left: 0;
  }
  to {
    right: 100%;
    left: -100%;
  }
`

export const FadeInLeftContainer = keyframes`
  from {
    right: 100%;
    left: -100%;
  }
  to {
    right: 0;
    left: 0;
  }
`
