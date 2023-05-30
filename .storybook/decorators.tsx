import React from "react";
import { ThemeProvider } from "styled-components";
import { Decorator } from "@storybook/react";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { lightTheme } from "../src/styles/theme";

const withTheme: Decorator = (StoryFn) => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <StoryFn />
      </ThemeProvider>
    </>
  );
};

export const globalDecorators = [withTheme];
