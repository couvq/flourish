import type { Meta, StoryObj } from '@storybook/react'
import React, { MouseEvent } from 'react'

import { Select } from '../components/Select'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Select',
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    labelVisible: { control: 'boolean' }
  }
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const WithLabel: Story = {
  args: {
    label: 'Choose a pet',
    labelVisible: true,
    options: [
      {
        label: 'Dog',
        value: 'Dog'
      },
      {
        label: 'Cat',
        value: 'Cat'
      },
      {
        label: 'Horse',
        value: 'Horse'
      },
      {
        label: 'Lizard',
        value: 'Lizard'
      }
    ]
  }
}
