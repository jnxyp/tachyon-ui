import { css, SerializedStyles, useTheme } from '@emotion/react'
import { getRoleColor, RoleColorName, SSTheme } from '../../themes/theme'
import { makeTextShadow } from '../../styles/shadow'
import { useId, useMemo, useState } from 'react'
import { transparentize } from 'polished'

const createCheckboxButtonStyles = (
  theme: SSTheme,
  checked: boolean,
  disabled: boolean = false,
  color: RoleColorName = 'regular'
): SerializedStyles => {
  const roleColor = getRoleColor(theme, color)

  return css(
    {
      padding: '0.05rem 1.5rem',

      color: disabled ? roleColor.disabledForeground : roleColor.foreground,
      background: checked
        ? disabled
          ? roleColor.disabledBackground
          : roleColor.background
        : 'transparent',

      userSelect: 'none',

      fontFamily: theme.fonts.heading,
      fontWeight: theme.fontWeights.bold,
      fontSize: '1.5rem',
    },
    !disabled && {
      ':hover': css(
        {
          color: roleColor.foregroundHover,
          background: checked
            ? roleColor.backgroundHover
            : transparentize(0.3, roleColor.backgroundHover),
        },
        makeTextShadow(theme.colors.textShadow, theme.isLightTheme)
      ),
    },
    (checked || !theme.isLightTheme) && makeTextShadow(theme.colors.textShadow, theme.isLightTheme)
  )
}

const createOuterBorderStyles = (
  theme: SSTheme,
  color: RoleColorName = 'regular',
  disabled: boolean = false
): SerializedStyles => {
  const roleColor = getRoleColor(theme, color)

  return css({
    border: `2px solid ${disabled ? roleColor.disabledBackground : roleColor.background}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5px',
    margin: '0.1rem',
  })
}

const inputStyles = css({
  appearance: 'none',
  position: 'absolute',
})

interface CheckboxButtonProps {
  label: string
  checked?: boolean // 受控模式
  defaultChecked?: boolean // 非受控模式
  onChange?: (checked: boolean) => void
  disabled?: boolean
  color?: 'regular' | 'success' | 'warning' | 'danger'
}

export function CheckboxButton(props: CheckboxButtonProps) {
  const { label, checked, defaultChecked = false, onChange, disabled = false, color } = props
  const inputId = useId()
  const theme = useTheme() as SSTheme

  const isControlled = checked !== undefined
  const [internalChecked, setInternalChecked] = useState(defaultChecked)

  const actualChecked = isControlled ? checked : internalChecked

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked
    if (!disabled) {
      if (!isControlled) {
        setInternalChecked(newValue)
      }
      onChange?.(newValue)
    }
  }

  const outerBorderStyles = useMemo(
    () => createOuterBorderStyles(theme, color, disabled),
    [theme, color, disabled]
  )

  const checkboxButtonStyles = useMemo(
    () => createCheckboxButtonStyles(theme, actualChecked, disabled, color),
    [theme, actualChecked, disabled, color]
  )

  return (
    <span css={outerBorderStyles}>
      <label
        css={checkboxButtonStyles}
        htmlFor={inputId}
      >
        <input
          type='checkbox'
          id={inputId}
          css={inputStyles}
          checked={actualChecked}
          onChange={handleChange}
          disabled={disabled}
        />
        {label}
      </label>
    </span>
  )
}
