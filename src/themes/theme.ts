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
  fonts: {
    body: string
    heading: string
  }
}

const defaultFonts = {
  body: 'Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", STXihei, SimHei, "WenQuanYi Micro Hei", sans-serif;',
  heading:
    'Orbitron, REEJI-BigYoung, Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", STXihei, "Microsoft YaHei", SimHei, "WenQuanYi Micro Hei", sans-serif;',
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
  fonts: defaultFonts,
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
  fonts: defaultFonts,
}

export const themeMap: Record<string, SSTheme> = {
  dark: darkTheme,
  light: lightTheme,
}
