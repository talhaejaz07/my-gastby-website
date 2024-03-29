import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  background-color: ${(props) => props.theme.color.background400};
  font-family: ${(props) => props.theme.fontFamily.regular};
  color: ${(props) => props.theme.color.text400};
  scroll-behavior: smooth;
  position: relative;
  overflow-x: hidden;
}
`;

export default GlobalStyles;
