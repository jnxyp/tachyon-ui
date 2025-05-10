import { css, SerializedStyles, useTheme } from '@emotion/react'
import { getRoleColor, RoleColorName, SSTheme } from '../../themes/theme'
import { makeTextShadow } from '../../styles/shadow'
import { useMemo } from 'react'
import { lighten, opacify, transparentize } from 'polished'

interface CheckboxButtonProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  color?: RoleColorName
}

const useCheckboxButtonStyles = (
  checked: boolean,
  disabled: boolean = false,
  color: RoleColorName = 'regular'
): SerializedStyles => {
  const theme = useTheme() as SSTheme
  const roleColor = getRoleColor(theme, color)

  return css(
    {
      padding: '0.05rem 1.5rem',

      color: roleColor.foreground,
      background: checked ? roleColor.background : 'transparent',

      userSelect: 'none',

      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.bold,
    },
    !disabled && {
      ':hover': css(
        {
          color: roleColor.foregroundHover,
          background: checked
            ? roleColor.backgroundHover
            : transparentize(0.3, roleColor.backgroundHover),
        },
        makeTextShadow(theme.colors.textShadow)
      ),
    },
    (checked || !theme.isLightTheme) && makeTextShadow(theme.colors.textShadow)
  )
}

const useOuterBorderStyles = (color: RoleColorName = 'regular'): SerializedStyles => {
  const theme = useTheme() as SSTheme
  const roleColor = getRoleColor(theme, color)

  return css({
    border: `1px solid ${roleColor.background}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1px',
    margin: '0.1rem',
  })
}

const useInputStyles = (): SerializedStyles => {
  return css({
    appearance: 'none',
    position: 'absolute',
  })
}

export function CheckboxButton(props: CheckboxButtonProps) {
  const { label, checked, onChange, disabled = false, color } = props
  const theme = useTheme() as SSTheme

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(e.target.checked)
    }
  }

  return (
    <span css={useOuterBorderStyles(color)}>
      <label
        css={useMemo(
          () => useCheckboxButtonStyles(checked, disabled, color),
          [checked, disabled, color, theme]
        )}
      >
        <input
          type='checkbox'
          css={useInputStyles()}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
        />
        {label}
      </label>
    </span>
  )
}
