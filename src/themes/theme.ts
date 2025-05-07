// src/styles/theme.ts
import { darken, lighten } from 'polished'
import { SSColors } from './colors'

export interface SSTheme {
  isLightTheme: boolean
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
    disabled: string
    disabledBackground: string

    checkboxButtonBackground: string
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
  isLightTheme: false,
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
    disabled: lighten(0.1, SSColors.darkgray),
    disabledBackground: SSColors.darkgray,

    checkboxButtonBackground: SSColors.blackbackgound,
    background: SSColors.blackbackgound,
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
  isLightTheme: true,
  colors: {
    ...baseTheme.colors,
    regularText: SSColors.black,
    headerText: darken(0.03, SSColors.lightcyan),

    textShadow: SSColors.darkgray,

    regular: darken(0.03, SSColors.lightcyan),
    regularBackground: lighten(0.1, SSColors.darkcyan),
    success: darken(0.1, SSColors.lime),
    successBackground: lighten(0.1, SSColors.darklime),
    warning: darken(0.01, SSColors.yellow),
    warningBackground: lighten(0.05, SSColors.darkyellow),
    danger: darken(0.05, SSColors.red),
    dangerBackground: lighten(0.05, SSColors.darkred),
    disabled: lighten(0.1, SSColors.gray),
    disabledBackground: SSColors.gray,

    checkboxButtonBackground: SSColors.white,
    background: SSColors.white,
  },
}

export const themeMap: Record<string, SSTheme> = {
  dark: baseTheme,
  light: lightTheme,
}
