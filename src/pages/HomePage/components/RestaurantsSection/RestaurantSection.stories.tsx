import type { Meta, StoryObj } from "@storybook/react";

import { RestaurantsSectionComponent as RestaurantsSection } from "./RestaurantsSection.container";
import { restaurants } from "~/stub/restaurants";

const meta: Meta<typeof RestaurantsSection> = {
  title: "Pages/HomePage/Components/RestaurantsSection",
  component: RestaurantsSection,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=135-311&t=QGU1YHR0aYc88VDn-4",
    },
  },
  args: {
    title: "Our Favorite Picks",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    restaurants,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  // exclude unnecessary controls. This is important especially for the isLoading
  // control because if we toggle the control in storybook, it will cause a fatal error
  // due to the way we are using the RestaurantSectionComponent wrapper in this
  // story. See some o dem der docs n such
  // https://storybook.js.org/docs/react/essentials/controls#disable-controls-for-specific-properties
  parameters: {
    controls: {
      // exclude: ["isLoading", "restaurants", "onRestaurantClick"],
      include: "title",
    },
  },
};
