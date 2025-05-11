import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { CheckboxButton } from './CheckboxButton'

const meta: Meta<typeof CheckboxButton> = {
  title: 'Components/CheckboxButton',
  component: CheckboxButton,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CheckboxButton>

// ✅ Controlled usage
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
    color: 'regular',
    checked: true,
    disabled: false,
  },
}

// ✅ Uncontrolled usage
export const Uncontrolled: Story = {
  render: (args) => (
    <CheckboxButton
      {...args}
      defaultChecked={true}
    />
  ),
  args: {
    label: 'Uncontrolled Checkbox',
    color: 'success',
    disabled: false,
  },
}

// ✅ All combinations preview
export const AllVariants: Story = {
  render: () => {
    const colors = ['regular', 'success', 'warning', 'danger'] as const
    const states = [
      { label: 'Enabled', disabled: false, defaultChecked: false },
      { label: 'Enabled', disabled: false, defaultChecked: true },
      { label: 'Disabled', disabled: true, defaultChecked: false },
      { label: 'Disabled', disabled: true, defaultChecked: true },
    ]

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {states.map((state) => (
          <div key={state.label}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {colors.map((color) => (
                <CheckboxButton
                  key={`${color}-${state.label}`}
                  label={`${color}`}
                  color={color}
                  defaultChecked={state.defaultChecked}
                  disabled={state.disabled}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
