import { css } from '@emotion/react'

export const makeTextShadow = (color: string, isLightTheme: boolean) => {
  if (!isLightTheme) {
    return css({
      textShadow: `0.05em 0.05em 0.05em ${color};`,
    })
  } else {
    return css({
      textShadow: `0.02em 0.02em 0.02em ${color};`,
    })
  }
}
