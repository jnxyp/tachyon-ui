// src/styles/theme.ts
import { darken, desaturate, lighten, saturate } from 'polished'
import { SSColors } from './colors'

export class RoleColor {
  foreground: string
  background: string

  isLightTheme?: boolean

  _foregroundHover?: string
  _foregroundActive?: string
  _disabledForeground?: string

  _backgroundHover?: string
  _backgroundActive?: string
  _disabledBackground?: string

  constructor(
    foreground: string,
    background: string,
    isLightTheme: boolean = false,
    foregroundHover?: string,
    backgroundHover?: string,
    foregroundActive?: string,
    backgroundActive?: string,
    disabledForeground?: string,
    disabledBackground?: string
  ) {
    this.foreground = foreground
    this.background = background
    this.isLightTheme = isLightTheme
    this._foregroundHover = foregroundHover
    this._backgroundHover = backgroundHover
    this._foregroundActive = foregroundActive
    this._backgroundActive = backgroundActive
    this._disabledForeground = disabledForeground
    this._disabledBackground = disabledBackground
  }

  get foregroundHover() {
    if (this._foregroundHover) {
      return this._foregroundHover
    } else {
      return this.isLightTheme
        ? lighten(0.1, this.foreground)
        : saturate(0.2, lighten(0.1, this.foreground))
    }
  }

  get backgroundHover() {
    if (this._backgroundHover) {
      return this._backgroundHover
    } else {
      return this.isLightTheme
        ? lighten(0.1, this.background)
        : saturate(0.2, lighten(0.1, this.background))
    }
  }

  get foregroundActive() {
    if (this._foregroundActive) {
      return this._foregroundActive
    } else {
      return this.isLightTheme
        ? lighten(0.3, this.foreground)
        : saturate(0.2, lighten(0.2, this.foreground))
    }
  }

  get backgroundActive() {
    if (this._backgroundActive) {
      return this._backgroundActive
    } else {
      return this.isLightTheme
        ? lighten(0.3, this.background)
        : saturate(0.2, lighten(0.2, this.background))
    }
  }

  get disabledForeground() {
    if (this._disabledForeground) {
      return this._disabledForeground
    } else {
      return desaturate(0.7, this.foreground)
    }
  }

  get disabledBackground() {
    if (this._disabledBackground) {
      return this._disabledBackground
    } else {
      return desaturate(0.7, this.background)
    }
  }
}

export interface SSTheme {
  isLightTheme: boolean
  roleColors: {
    regular: RoleColor
    success: RoleColor
    warning: RoleColor
    danger: RoleColor
  }
  colors: {
    regularText: string
    headerText: string

    textShadow: string

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
  roleColors: {
    regular: new RoleColor(SSColors.lightcyan, SSColors.darkcyan),
    success: new RoleColor(SSColors.lime, SSColors.darklime),
    warning: new RoleColor(SSColors.yellow, SSColors.darkyellow),
    danger: new RoleColor(SSColors.red, SSColors.darkred),
  },
  colors: {
    regularText: SSColors.white,
    headerText: SSColors.lightcyan,

    textShadow: SSColors.black,

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
  roleColors: {
    ...baseTheme.roleColors,
    regular: new RoleColor(darken(0.05, SSColors.lightcyan), lighten(0.1, SSColors.darkcyan), true),
    success: new RoleColor(darken(0.1, SSColors.lime), lighten(0.1, SSColors.darklime), true),
    warning: new RoleColor(darken(0.02, SSColors.yellow), lighten(0.05, SSColors.darkyellow), true),
    danger: new RoleColor(darken(0.03, SSColors.red), lighten(0.1, SSColors.darkred), true),
  },
  colors: {
    ...baseTheme.colors,
    regularText: SSColors.black,
    headerText: darken(0.03, SSColors.lightcyan),

    textShadow: SSColors.darkgray,

    checkboxButtonBackground: SSColors.white,
    background: SSColors.white,
  },
}

export const themeMap: Record<string, SSTheme> = {
  dark: baseTheme,
  light: lightTheme,
}

export type RoleColorName = keyof SSTheme['roleColors']

export const getRoleColor = (theme: SSTheme, colorRole: keyof SSTheme['roleColors']): RoleColor => {
  return theme.roleColors[colorRole as keyof SSTheme['roleColors']]
}
