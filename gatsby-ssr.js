import React from "react";
import { ThemeProvider } from "styled-components";
import Layout from "./src/components/Layout";
import theme from "./src/themes/theme";
import GlobalStyles from "./src/styles/GlobalStyles";

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </ThemeProvider>
  );
};
