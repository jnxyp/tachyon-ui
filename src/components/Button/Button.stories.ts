import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Regular: Story = {
  args: {
    color: 'regular',
  },
}

export const Success: Story = {
  args: {
    color: 'success',
  },
}

export const Warning: Story = {
  args: {
    color: 'warning',
  },
}

export const Danger: Story = {
  args: {
    color: 'danger',
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
