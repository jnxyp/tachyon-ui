import { css, SerializedStyles, useTheme } from '@emotion/react'
import { SSTheme } from '../../themes/theme'
import { makeTextShadow } from '../../styles/shadow'
import { useMemo } from 'react'
import { lighten, opacify } from 'polished'
import { makeHoverFilter } from '../../styles/filters'

interface CheckboxButtonProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  color?: 'regular' | 'success' | 'warning' | 'danger' | 'default'
}

const getCheckBoxButtonColor = (
  color: string,
  disabled: boolean,
  theme: SSTheme
): { textColor: string; background: string } => {
  if (disabled) {
    return {
      textColor: theme.colors.disabled,
      background: theme.colors.disabledBackground,
    }
  }
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

const useCheckboxButtonStyles = (
  checked: boolean,
  disabled: boolean = false,
  color: string = 'default'
): SerializedStyles => {
  const theme = useTheme() as SSTheme
  const { textColor, background } = getCheckBoxButtonColor(color, disabled, theme)

  return css(
    {
      padding: '0.05rem 1.5rem',
      border: `1px solid ${background}`,

      color: textColor,
      background: checked ? background : theme.colors.checkboxButtonBackground,

      userSelect: 'none',

      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.bold,

      boxShadow: `inset 0 0 0 1px ${theme.colors.checkboxButtonBackground}`,
    },
    !disabled && {
      ':hover': makeHoverFilter(color, theme.isLightTheme),
    },
    makeTextShadow(theme.colors.textShadow)
  )
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
  )
}
