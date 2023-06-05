import { initialize as mswInit, mswLoader } from "msw-storybook-addon";

mswInit();

export const globalLoaders = [mswLoader];
