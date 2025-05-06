// src/styles/theme.ts
import { SSColors } from './colors'

export interface SSTheme {
  colors: {
    regularText: string
    headerText: string

    textShadow: string

    regular: string
    regularBackground: string
    success: string
    successBackground: string
    warning: string
    warningBackground: string
    danger: string
    dangerBackground: string

    background: string
  }
  fonts: {
    body: string
    heading: string
  }
  fontWeights: {
    regular: number
    bold: number
  }
  misc: {
    /**
     * @description The size of the bevel on the corners of the button, unit: px
     * @default 8
     */
    cornerBevelSize: number
  }
  animation: {
    hoverTransationDuriation: string
    activeTransationDuriation: string
  }
}

const baseTheme: SSTheme = {
  colors: {
    regularText: SSColors.white,
    headerText: SSColors.lightcyan,

    textShadow: SSColors.black,

    regular: SSColors.lightcyan,
    regularBackground: SSColors.darkcyan,
    success: SSColors.lime,
    successBackground: SSColors.darklime,
    warning: SSColors.yellow,
    warningBackground: SSColors.darkyellow,
    danger: SSColors.red,
    dangerBackground: SSColors.darkred,

    background: SSColors.black,
  },
  fonts: {
    body: 'Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", STXihei, SimHei, "WenQuanYi Micro Hei", sans-serif;',
    heading:
      'Orbitron, REEJI-BigYoung, Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", STXihei, "Microsoft YaHei", SimHei, "WenQuanYi Micro Hei", sans-serif;',
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  misc: {
    cornerBevelSize: 8,
  },
  animation: {
    hoverTransationDuriation: '150ms',
    activeTransationDuriation: '50ms',
  },
}

const lightTheme: SSTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    regular: SSColors.red,
  },
}

export const themeMap: Record<string, SSTheme> = {
  dark: baseTheme,
  light: lightTheme,
}
