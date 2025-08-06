import type { Meta, StoryObj } from '@storybook/react'
import { Typeahead } from '../components/Typeahead'


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Typeahead',
  component: Typeahead,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: { control: 'text' },
    options: {
        control: {
            type: 'array',
            of: { type: 'text'}
        }
    }
  }
} satisfies Meta<typeof Typeahead>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const primary: Story = {
  args: {
    label: 'Select an animal',
    options: ['Aardvark', 'Cat', 'Dog', 'Kangaroo', 'Panda', 'Snake']
  }
}
