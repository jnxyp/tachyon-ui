import { css } from '@emotion/react'

export const makeBevelShape = ({
  topLeft = '8px',
  topRight = '8px',
  bottomRight = '8px',
  bottomLeft = '8px',
}: {
  topLeft?: string
  topRight?: string
  bottomRight?: string
  bottomLeft?: string
}) => {
  return css({
    clipPath: `polygon(
        ${topLeft} 0,
        calc(100% - ${topRight}) 0%,
        100% ${topRight},
        100% calc(100% - ${bottomRight}),
        calc(100% - ${bottomRight}) 100%,
        ${bottomLeft} 100%,
        0% calc(100% - ${bottomLeft}),
        0% ${topLeft}
      )`,
  })
}

export const makeBevelShapeNormal = (radius: string) => {
  return makeBevelShape({
    topLeft: radius,
    topRight: radius,
    bottomRight: radius,
    bottomLeft: radius,
  })
}
export const makeBevelShapeDiagonal = (radius: string) => {
  return makeBevelShape({
    topLeft: radius,
    topRight: '0px',
    bottomRight: radius,
    bottomLeft: '0px',
  })
}
export const makeBevelShapeTab = (radius: string) => {
  return makeBevelShape({
    topLeft: radius,
    topRight: radius,
    bottomRight: '0px',
    bottomLeft: '0px',
  })
}
