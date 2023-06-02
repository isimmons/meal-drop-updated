import { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    text: "Comfort food",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1906-3469&t=xzhd644zrRNFAbUu-4",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DarkTheme: Story = {
  parameters: {
    theme: "dark",
  },
};
