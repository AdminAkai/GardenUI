import type { Meta, StoryObj } from '@storybook/react'

import ScrambleText from './ScrambleText'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'GardenUI/ScrambleText',
  component: ScrambleText,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component:
          'Re-usable scramble text component, scrambles text once and once only. Change control to see uses. Easily consumed to fit the styling of any application.',
      },
    },
  },
  args: {
    text: 'ScrambleText',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ScrambleText>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ScrambleTextExample: Story = {
  args: {
    text: 'ScrambleText',
  },
}
