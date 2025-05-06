import type { Preview } from '@storybook/react'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

import { SSThemeProvider } from '../src/themes/provider'
import { themeMap } from '../src/themes/theme'

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: themeMap.light,
      dark: themeMap.dark,
    },
    defaultTheme: 'light',
    Provider: SSThemeProvider,
  }),
]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
