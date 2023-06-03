import type { Meta, StoryObj } from "@storybook/react";

import { RestaurantsSection } from "./RestaurantsSection";

const meta: Meta<typeof RestaurantsSection> = {
  title: "Pages/HomePage/Components/RestaurantsSection",
  component: RestaurantsSection,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=135-311&t=QGU1YHR0aYc88VDn-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Our Favorite Picks",
  },
};
