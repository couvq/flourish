import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../components/Typography/index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: "text" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const h1: Story = {
  args: {
    variant: "h1",
    children: "Heading level 1",
  },
};

export const h2: Story = {
  args: {
    variant: "h2",
    children: "Heading level 2",
  },
};

export const h3: Story = {
  args: {
    variant: "h3",
    children: "Heading level 3",
  },
};

export const h4: Story = {
  args: {
    variant: "h4",
    children: "Heading level 4",
  },
};

export const h5: Story = {
  args: {
    variant: "h5",
    children: "Heading level 5",
  },
};

export const h6: Story = {
  args: {
    variant: "h6",
    children: "Heading level 6",
  },
};

export const p: Story = {
  args: {
    variant: "p",
    children: "paragraph",
  },
};

export const caption: Story = {
  args: {
    variant: "caption",
    children: "caption",
  },
};
