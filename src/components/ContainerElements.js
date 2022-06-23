import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: ${(props) => {
    switch (props.backgroundColor) {
      case "background100":
        return props.theme.color.background100;

      case "background400":
        return props.theme.color.background400;

      default:
        return props.theme.color.background400;
    }
  }};
  & > * {
    width: ${(props) => props.theme.containerWidth};
    margin-inline: auto;
  }
`;
