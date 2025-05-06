import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { MyButton } from '.'

const meta = {
  title: 'Components/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof MyButton>

export default meta
type Story = StoryObj<typeof meta>

export const Regular: Story = {
  args: {
    role: 'regular',
  },
}

export const Success: Story = {
  args: {
    role: 'success',
  },
}

export const Warning: Story = {
  args: {
    role: 'warning',
  },
}

export const Danger: Story = {
  args: {
    role: 'danger',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
  },
}

export const TabShape: Story = {
  args: {
    shape: 'tab',
  },
}

export const MenuShape: Story = {
  args: {
    shape: 'menu',
  },
}
