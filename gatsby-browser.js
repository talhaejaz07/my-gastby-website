import React from "react";
import { ThemeProvider } from "styled-components";
import { Navbar, Footer, BackToTop } from "./src/components";
import theme from "./src/themes/theme";
import GlobalStyles from "./src/styles/GlobalStyles";

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      {element}
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
};
