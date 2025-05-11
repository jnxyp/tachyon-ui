import { css, SerializedStyles, useTheme } from '@emotion/react'
import { getRoleColor, RoleColorName, SSTheme } from '../../themes/theme'
import {
  makeBevelShapeDiagonal,
  makeBevelShapeNormal,
  makeBevelShapeTab,
} from '../../styles/corner_shape'
import { makeTextShadow } from '../../styles/shadow'
import { makeActiveFilter, makeHoverFilter } from '../../styles/filters'

interface ComponentProps extends React.ComponentProps<'button'> {
  color?: RoleColorName
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

const createButtonStyles = ({
  color = 'regular',
  size = 'medium',
  shape = 'regular',
}: ComponentProps): SerializedStyles => {
  const theme = useTheme() as SSTheme

  const roleColor = getRoleColor(theme, color)
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

      color: roleColor.foreground,
      backgroundColor: roleColor.background,

      userSelect: 'none',

      ':hover': {
        color: roleColor.foregroundHover,
        backgroundColor: roleColor.backgroundHover,
      },
      ':active': {
        color: roleColor.foregroundActive,
        backgroundColor: roleColor.backgroundActive,
      },
    },
    shapeFuncMapping[shape](`${bevelSize}px`),
    makeTextShadow(theme.colors.textShadow, theme.isLightTheme)
  )
}

export function Button(props: ComponentProps) {
  const { label } = props
  return (
    <button
      type='button'
      css={createButtonStyles(props)}
      {...props}
    >
      {label}
    </button>
  )
}
