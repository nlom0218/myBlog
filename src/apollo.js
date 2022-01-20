import { makeVar } from "@apollo/client"

const DARK = "dark"
const RIGHT_CONTENTS = "rightContents"
const INIT_LOAD = "initLoad"
const SEE_RIGHT_CONTENTS = "seeRightContents"

export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK)))
export const enableDarkMode = () => {
  localStorage.setItem(DARK, "true")
  darkModeVar(true)
}
export const disableDarkMode = () => {
  localStorage.removeItem(DARK)
  darkModeVar(false)
}

export const rightContentsVar = makeVar(Boolean(localStorage.getItem(RIGHT_CONTENTS)))
export const enableRightContents = () => {
  localStorage.setItem(RIGHT_CONTENTS, "true")
  rightContentsVar(true)
}
export const disableRightContents = () => {
  localStorage.removeItem(RIGHT_CONTENTS)
  rightContentsVar(false)
}

export const isSeeRightContentsVar = makeVar(Boolean(localStorage.getItem(SEE_RIGHT_CONTENTS)))
export const hideRightContents = () => {
  localStorage.removeItem(SEE_RIGHT_CONTENTS)
  isSeeRightContentsVar(false)
}
export const seeRightContents = () => {
  localStorage.setItem(SEE_RIGHT_CONTENTS, "true")
  isSeeRightContentsVar(true)
}

export const initLoadVar = makeVar(Boolean(localStorage.getItem(INIT_LOAD)))
export const notInitLoad = () => {
  localStorage.removeItem(INIT_LOAD)
  initLoadVar(false)
}
export const setInitLoad = () => {
  localStorage.setItem(INIT_LOAD, "true")
  initLoadVar(true)
}

// routes 대신
const LEFT = "left"
const RIGHT = "right"

export const routes = {

}

export const leftPageVar = makeVar(localStorage.getItem(LEFT))
export const rightPageVar = makeVar(localStorage.getItem(RIGHT))
export const moveHome = (direction) => {
  if (direction === "left") {
    localStorage.removeItem(LEFT)
  } else {
    localStorage.removeItem(RIGHT)
  }
}
export const movePage = (direction, page) => {
  if (direction === "left") {
    localStorage.setItem(LEFT, page)
  } else {
    localStorage.setItem(RIGHT, page)
  }
}