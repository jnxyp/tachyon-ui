// src/styles/theme.ts
import { darken, lighten, saturate, setSaturation } from 'polished'
import { SSColors } from './colors'

export interface RoleColorConfig {
  foreground: string
  background: string
  isLightTheme?: boolean
  foregroundHover?: string
  backgroundHover?: string
  foregroundActive?: string
  backgroundActive?: string
  disabledForeground?: string
  disabledBackground?: string
}

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

  constructor(config: RoleColorConfig) {
    this.foreground = config.foreground
    this.background = config.background
    this.isLightTheme = config.isLightTheme
    this._foregroundHover = config.foregroundHover
    this._backgroundHover = config.backgroundHover
    this._foregroundActive = config.foregroundActive
    this._backgroundActive = config.backgroundActive
    this._disabledForeground = config.disabledForeground
    this._disabledBackground = config.disabledBackground
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
      return setSaturation(0.1, this.foreground)
    }
  }

  get disabledBackground() {
    if (this._disabledBackground) {
      return this._disabledBackground
    } else {
      return setSaturation(0.1, this.background)
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
    regular: new RoleColor({ foreground: SSColors.lightcyan, background: SSColors.darkcyan }),
    success: new RoleColor({ foreground: SSColors.lime, background: SSColors.darklime }),
    warning: new RoleColor({ foreground: SSColors.yellow, background: SSColors.darkyellow }),
    danger: new RoleColor({ foreground: SSColors.red, background: SSColors.darkred }),
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
    regular: new RoleColor({
      foreground: darken(0.05, SSColors.lightcyan),
      background: lighten(0.1, SSColors.darkcyan),
      isLightTheme: true,
    }),
    success: new RoleColor({
      foreground: darken(0.1, SSColors.lime),
      background: lighten(0.1, SSColors.darklime),
      isLightTheme: true,
    }),
    warning: new RoleColor({
      foreground: darken(0.02, SSColors.yellow),
      background: lighten(0.04, SSColors.darkyellow),
      backgroundHover: lighten(0.065, SSColors.darkyellow),
      backgroundActive: lighten(0.1, SSColors.darkyellow),
      isLightTheme: true,
    }),
    danger: new RoleColor({
      foreground: darken(0.03, SSColors.red),
      background: lighten(0.1, SSColors.darkred),
      isLightTheme: true,
    }),
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
