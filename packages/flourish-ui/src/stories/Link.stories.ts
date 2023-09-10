import type { Meta, StoryObj } from '@storybook/react'

import { Link } from '../components/Link/index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Link',
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
    href: { control: 'text' },
    label: { control: 'text' },
    external: { control: 'boolean' }
  }
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const basic: Story = {
  args: {
    children: 'Go to Amazon',
    href: 'https://amazon.com'
  }
}

export const external: Story = {
  args: {
    children: 'Go to Amazon',
    href: 'https://amazon.com',
    label: 'Opens amazon.com in a new tab',
    external: true
  }
}
