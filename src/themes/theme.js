const theme = {
  color: {
    text400: "hsl(230, 15%, 30%)",
    text100: "hsl(230, 15%, 85%)",
    background400: "hsl(222, 80%, 95%)",
    background100: "hsl(0, 0%, 99%)",
    accent400: "hsl(346, 100%, 50%)",
    accent500: "hsl(346, 100%, 45%)",
  },

  fontFamily: {
    regular: "Roboto, sans-serif",
    code: "Roboto Mono, monospace",
  },

  fontWeight: {
    regular: "400",
    bold: "700",
  },

  fontSize: {
    small: "0.875rem",
    regular: "1rem",
    large: "1.2rem",
    xLarge: "1.5rem",
    xxLarge: "2.125rem",
    xxxLarge: "3rem",
  },

  containerWidth: "min(75rem, 100vw - 2rem)",

  spacing: {
    xxSmall: "0.75rem",
    xSmall: "1rem",
    small: "1.25rem",
    regular: "1.5rem",
    large: "2.5rem",
    xLarge: "3.25rem",
  },

  breakpoint: {
    tablet: "@media screen and (max-width: 60rem)",
    mobile: "@media screen and (max-width: 36rem)",
  },
};

export default theme;
