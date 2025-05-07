import { css, SerializedStyles, useTheme } from '@emotion/react'
import { SSTheme } from '../../themes/theme'
import {
  makeBevelShapeDiagonal,
  makeBevelShapeNormal,
  makeBevelShapeTab,
} from '../../styles/corner_shape'
import { makeTextShadow } from '../../styles/shadow'

interface ComponentProps extends React.ComponentProps<'button'> {
  role?: 'regular' | 'success' | 'warning' | 'danger'
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

const getButtonColor = (role: string, theme: SSTheme): { color: string; background: string } => {
  switch (role) {
    case 'regular':
      return {
        color: theme.colors.regular,
        background: theme.colors.regularBackground,
      }
    case 'success':
      return {
        color: theme.colors.success,
        background: theme.colors.successBackground,
      }
    case 'warning':
      return {
        color: theme.colors.warning,
        background: theme.colors.warningBackground,
      }
    case 'danger':
      return {
        color: theme.colors.danger,
        background: theme.colors.dangerBackground,
      }
    default:
      return {
        color: theme.colors.regular,
        background: theme.colors.regularBackground,
      }
  }
}

const useButtonStyles = ({
  role = 'regular',
  size = 'medium',
  shape = 'regular',
}: ComponentProps): SerializedStyles => {
  const theme = useTheme() as SSTheme

  const { color, background } = getButtonColor(role, theme)
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

      color,
      background,

      userSelect: 'none',

      ':hover': {
        filter: role === 'warning' ? 'brightness(120%)' : 'brightness(150%)',
      },
      ':active': {
        filter: 'brightness(180%)',
      },
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
