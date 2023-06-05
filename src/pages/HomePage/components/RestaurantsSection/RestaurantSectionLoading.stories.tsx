import type { Meta, StoryObj } from "@storybook/react";
// import { rest } from "msw";
// import { BASE_URL } from "~/api";

import { RestaurantsSection } from "./RestaurantsSection";

const meta: Meta<typeof RestaurantsSection> = {
  title: "Pages/HomePage/Components/RestaurantsSectionLoading",
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

export const Loading: Story = {
  name: "Loading Story",
  args: {
    isLoading: true,
  },
  // currently this shit is foobar due to the global maw loader so using the above arg
  // temporarily. It's only purpose is to make the component and storybook play
  // parameters: {
  //   msw: {
  //     handlers: [
  //       rest.get(BASE_URL, (_req, res, ctx) => res(ctx.delay("infinite"))),
  //     ],
  //   },
  // },
};
