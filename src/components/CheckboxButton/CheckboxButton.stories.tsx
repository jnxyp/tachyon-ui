import type { Meta, StoryObj } from '@storybook/react'
import { CheckboxButton } from './CheckboxButton'
import React, { useState } from 'react'

const meta: Meta<typeof CheckboxButton> = {
  title: 'Components/CheckboxButton',
  component: CheckboxButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['regular', 'success', 'warning', 'danger', 'default'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: '一个带颜色样式的复选框按钮组件，支持受控、禁用、颜色状态等。',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CheckboxButton>

// Controlled 示例
export const Controlled: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked ?? false)
    return (
      <CheckboxButton
        {...args}
        checked={checked}
        onChange={setChecked}
      />
    )
  },
  args: {
    label: 'Controlled Checkbox',
    checked: true,
    color: 'regular',
  },
}

// Disabled 示例
export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    checked: true,
    disabled: true,
    color: 'danger',
    onChange: () => {},
  },
}

// 多色示例
export const Colors: Story = {
  render: () => {
    const [r, setR] = useState(false)
    const [s, setS] = useState(true)
    const [w, setW] = useState(false)
    const [d, setD] = useState(true)

    return (
      <>
        <CheckboxButton
          label='Regular'
          color='regular'
          checked={r}
          onChange={setR}
        />
        <CheckboxButton
          label='Success'
          color='success'
          checked={s}
          onChange={setS}
        />
        <CheckboxButton
          label='Warning'
          color='warning'
          checked={w}
          onChange={setW}
        />
        <CheckboxButton
          label='Danger'
          color='danger'
          checked={d}
          onChange={setD}
        />
      </>
    )
  },
}
