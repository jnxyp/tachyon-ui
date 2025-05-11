import { css, SerializedStyles, useTheme } from '@emotion/react'
import { getRoleColor, RoleColorName, SSTheme } from '../../themes/theme'
import { makeTextShadow } from '../../styles/shadow'

interface ComponentProps extends React.ComponentProps<'h1'> {
  title: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: RoleColorName
}

const fontSizeMapping = {
  1: '3rem',
  2: '2.5rem',
  3: '2rem',
  4: '1.75rem',
  5: '1.5rem',
  6: '1.25rem',
}

const useTitleStyles = (props: ComponentProps): SerializedStyles => {
  const theme = useTheme() as SSTheme
  const { level = 1, color = 'regular' } = props

  return css(
    {
      marginTop: '0',
      marginBottom: '0.5rem',

      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.bold,
      fontSize: fontSizeMapping[level],

      color: getRoleColor(theme, color).foreground,
    },
    makeTextShadow(theme.colors.textShadow, theme.isLightTheme)
  )
}

export function Title(props: ComponentProps) {
  const { title, level = 1 } = props

  const HeadingTag = `h${level}` as React.ElementType

  return (
    <HeadingTag
      css={useTitleStyles(props)}
      {...props}
    >
      {title}
    </HeadingTag>
  )
}
