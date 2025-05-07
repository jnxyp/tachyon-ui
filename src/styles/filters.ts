import { css } from '@emotion/react'

export const makeHoverFilter = (color: string, isLightTheme: boolean) => {
  if (!isLightTheme) {
    return css({
      filter: color === 'warning' ? 'brightness(120%)' : 'brightness(150%)',
    })
  } else {
    return css({
      filter: 'brightness(105%) saturate(130%)',
    })
  }
}

export const makeActiveFilter = (isLightTheme: boolean) => {
  if (!isLightTheme) {
    return css({
      filter: 'brightness(180%)',
    })
  } else {
    return css({
      filter: 'brightness(140%)',
    })
  }
}
