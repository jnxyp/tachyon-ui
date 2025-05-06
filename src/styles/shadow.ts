import { css } from '@emotion/react'

export const makeTextShadow = (color: string) => {
  return css({
    textShadow: `0.05em 0.05em 0.05em ${color};`,
  })
}
