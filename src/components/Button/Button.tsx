import { css, SerializedStyles, useTheme } from '@emotion/react'
import { SSTheme } from '../../themes/theme'
import {
  makeBevelShapeDiagonal,
  makeBevelShapeNormal,
  makeBevelShapeTab,
} from '../../styles/corner_shape'
import { makeTextShadow } from '../../styles/shadow'
import { makeActiveFilter, makeHoverFilter } from '../../styles/filters'

interface ComponentProps extends React.ComponentProps<'button'> {
  color?: 'regular' | 'success' | 'warning' | 'danger'
  size?: 'small' | 'medium' | 'large'
  shape?: 'regular' | 'menu' | 'tab'
  label: string
}

const fontSizeMapping = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem',
}

const shapeFuncMapping = {
  regular: makeBevelShapeNormal,
  menu: makeBevelShapeDiagonal,
  tab: makeBevelShapeTab,
}

const getButtonColor = (
  color: string,
  theme: SSTheme
): { textColor: string; background: string } => {
  switch (color) {
    case 'regular':
      return {
        textColor: theme.colors.regular,
        background: theme.colors.regularBackground,
      }
    case 'success':
      return {
        textColor: theme.colors.success,
        background: theme.colors.successBackground,
      }
    case 'warning':
      return {
        textColor: theme.colors.warning,
        background: theme.colors.warningBackground,
      }
    case 'danger':
      return {
        textColor: theme.colors.danger,
        background: theme.colors.dangerBackground,
      }
    default:
      return {
        textColor: theme.colors.regular,
        background: theme.colors.regularBackground,
      }
  }
}

const useButtonStyles = ({
  color = 'regular',
  size = 'medium',
  shape = 'regular',
}: ComponentProps): SerializedStyles => {
  const theme = useTheme() as SSTheme

  const { textColor, background } = getButtonColor(color, theme)
  const bevelSize =
    size === 'small' ? Math.floor(theme.misc.cornerBevelSize / 2) : theme.misc.cornerBevelSize

  return css(
    {
      marginRight: '0.1rem',
      marginLeft: '0.1rem',
      paddingLeft: '0.7em',
      paddingRight: '0.7em',

      outline: 'none',
      border: 'none',

      transitionDuration: theme.animation.hoverTransationDuriation,

      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.bold,
      fontSize: fontSizeMapping[size],

      color: textColor,
      background,

      userSelect: 'none',

      ':hover': makeHoverFilter(color, theme.isLightTheme),
      ':active': makeActiveFilter(theme.isLightTheme),
    },
    shapeFuncMapping[shape](`${bevelSize}px`),
    makeTextShadow(theme.colors.textShadow)
  )
}

export function Button(props: ComponentProps) {
  const { label } = props
  return (
    <button
      type='button'
      css={useButtonStyles(props)}
      {...props}
    >
      {label}
    </button>
  )
}
