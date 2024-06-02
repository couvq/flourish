import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'secondary', 'icon'] },
    label: { control: 'text' },
    disabled: { control: 'boolean'},
    onClick: { control: 'text' },
    icon: { control: 'select', options: ['close'] },
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary'
  }
}

export const secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary'
  }
}

export const icon: Story = {
  args: {
    children: 'Button',
    variant: 'icon',
    icon: 'close'
  }
}
