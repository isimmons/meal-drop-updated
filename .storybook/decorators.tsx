import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Decorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { lightTheme, darkTheme } from "../src/styles/theme";

const withRouter: Decorator = (StoryFn, context) => {
  return (
    <BrowserRouter>
      <StoryFn />
    </BrowserRouter>
  );
};

const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "dark" ? darkTheme : lightTheme;
  return (
    <>
      <ThemeProvider theme={storyTheme}>
        <GlobalStyle />
        <StoryFn />
      </ThemeProvider>
    </>
  );
};

export const globalDecorators = [withTheme, withRouter];
