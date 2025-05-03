// src/styles/theme.ts
import { darkColors, lightColors } from './colors'

export interface SSTheme {
  colors: typeof darkColors & {
    regularText: string
    headerText: string

    primary: string
    secondary: string
    success: string
    warning: string
    danger: string
    info: string

    background: string
  }
}

export const darkTheme: SSTheme = {
  colors: {
    ...darkColors,

    regularText: darkColors.white,
    headerText: darkColors.lightcyan,

    primary: darkColors.darkcyan,
    secondary: darkColors.cyan,
    success: darkColors.lime,
    warning: darkColors.yellow,
    danger: darkColors.red,
    info: darkColors.lightblue,

    background: darkColors.black,
  },
}

export const lightTheme: SSTheme = {
  colors: {
    ...lightColors,

    regularText: lightColors.black,
    headerText: lightColors.darkblue,

    primary: lightColors.darkcyan,
    secondary: lightColors.cyan,
    success: lightColors.lime,
    warning: lightColors.yellow,
    danger: lightColors.red,
    info: lightColors.lightblue,

    background: lightColors.white,
  },
}

export const themeMap: Record<string, SSTheme> = {
  dark: darkTheme,
  light: lightTheme,
}
