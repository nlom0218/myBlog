import { makeVar } from "@apollo/client"

const DARK = "dark"
const RIGHT_CONTENTS = "contents"

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