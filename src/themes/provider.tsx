import { ThemeProvider } from '@emotion/react'
import { ReactNode } from 'react'
import { SSTheme, themeMap } from './theme'

export interface SSThemeProviderProps {
  children: ReactNode
  themeName?: string
  theme?: SSTheme
}

export function SSThemeProvider({ children, themeName, theme }: SSThemeProviderProps) {
  return <ThemeProvider theme={theme ?? themeMap[themeName ?? 'dark']}>{children}</ThemeProvider>
}
