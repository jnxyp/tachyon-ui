import { css, SerializedStyles } from '@emotion/react'

interface ComponentProps extends React.ComponentProps<'button'> {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
}

const fontSizeMapping = {
  small: `1rem`,
  medium: '1.2rem',
  large: '1.4rem',
}

const paddingMapping = {
  small: '0.4rem 0.6rem',
  medium: '0.6rem 0.8rem',
  large: '0.8rem 1rem',
}

let getButtonStyles = ({ primary, size = 'medium' }: ComponentProps): SerializedStyles => {
  return css({
    backgroundColor: primary ? 'rgb(136, 255, 0)' : 'none',
    borderRadius: '6px',
    fontSize: fontSizeMapping[size],
    padding: paddingMapping[size],
  })
}

export function MyButton(props: ComponentProps) {
  const { label } = props
  return (
    <button
      type='button'
      css={getButtonStyles(props)}
      {...props}
    >
      {label}
    </button>
  )
}
