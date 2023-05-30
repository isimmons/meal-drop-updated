import { Meta, StoryObj } from "@storybook/react";

import { Review } from "./Review";

const meta = {
  title: "Components/Review",
  component: Review,
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: {
        type: "range",
        min: 0,
        max: 5,
        step: 1,
      },
    },
  },
} satisfies Meta<typeof Review>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Excellent: Story = {};
Excellent.args = {
  rating: 5,
};

export const VeryGood: Story = {};
VeryGood.args = {
  rating: 4.3,
};

export const Adequate: Story = {};
Adequate.args = {
  rating: 2.5,
};

export const VeryPoor: Story = {};
VeryPoor.args = {
  rating: 1,
};
