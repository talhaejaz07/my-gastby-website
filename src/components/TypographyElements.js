import styled from "styled-components";

export const P = styled.p`
  margin: ${(props) => (props.margin ? props.margin : 0)};

  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "65ch")};

  line-height: 1.5rem;

  font-family: ${(props) => {
    switch (props.fontFamily) {
      case "regular":
        return props.theme.fontFamily.regular;

      case "code":
        return props.theme.fontFamily.code;

      default:
        return props.theme.fontFamily.regular;
    }
  }};

  font-size: ${(props) => {
    switch (props.fontSize) {
      case "small":
        return props.theme.fontSize.small;

      case "regular":
        return props.theme.fontSize.regular;

      case "large":
        return props.theme.fontSize.large;

      case "xLarge":
        return props.theme.fontSize.xLarge;

      case "xxLarge":
        return props.theme.fontSize.xxLarge;

      case "xxxLarge":
        return props.theme.fontSize.xxxLarge;

      default:
        return props.theme.fontSize.regular;
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case "text400":
        return props.theme.color.text400;

      case "text100":
        return props.theme.color.text100;

      case "accent500":
        return props.theme.color.accent500;

      case "accent400":
        return props.theme.color.accent400;

      default:
        return props.theme.color.text400;
    }
  }};

  font-weight: ${(props) => {
    switch (props.fontWeight) {
      case "regular":
        return props.theme.fontWeight.regular;

      case "bold":
        return props.theme.fontWeight.bold;

      default:
        return props.theme.fontWeight.regular;
    }
  }};

  text-align: ${(props) =>
    props.textAlignDesktop ? props.textAlignDesktop : "left"};

  ${(props) => props.theme.breakpoint.tablet} {
    text-align: ${(props) =>
      props.textAlignTablet ? props.textAlignTablet : "left"};
  }

  ${(props) => props.theme.breakpoint.mobile} {
    text-align: ${(props) =>
      props.textAlignMobile ? props.textAlignMobile : "center"};
  }
`;

export const Span = styled.span`
  color: ${(props) =>
    props.color ? props.color : props.theme.color.accent400};
`;

export const H1 = styled.h1`
  font-family: ${(props) => {
    switch (props.fontFamily) {
      case "regular":
        return props.theme.fontFamily.regular;

      case "code":
        return props.theme.fontFamily.code;

      default:
        return props.theme.fontFamily.regular;
    }
  }};

  font-size: ${(props) => {
    switch (props.fontSize) {
      case "small":
        return props.theme.fontSize.small;

      case "regular":
        return props.theme.fontSize.regular;

      case "large":
        return props.theme.fontSize.large;

      case "xLarge":
        return props.theme.fontSize.xLarge;

      case "xxLarge":
        return props.theme.fontSize.xxLarge;

      case "xxxLarge":
        return props.theme.fontSize.xxxLarge;

      default:
        return props.theme.fontSize.xxxLarge;
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case "text400":
        return props.theme.color.text400;

      case "text100":
        return props.theme.color.text100;

      case "accent500":
        return props.theme.color.accent500;

      case "accent400":
        return props.theme.color.accent400;

      default:
        return props.theme.color.text400;
    }
  }};

  font-weight: ${(props) => {
    switch (props.fontWeight) {
      case "regular":
        return props.theme.fontWeight.regular;

      case "bold":
        return props.theme.fontWeight.bold;

      default:
        return props.theme.fontWeight.bold;
    }
  }};

  text-align: ${(props) =>
    props.textAlignDesktop ? props.textAlignDesktop : "left"};

  ${(props) => props.theme.breakpoint.tablet} {
    text-align: ${(props) =>
      props.textAlignTablet ? props.textAlignTablet : "left"};
  }

  ${(props) => props.theme.breakpoint.mobile} {
    text-align: ${(props) =>
      props.textAlignMobile ? props.textAlignMobile : "center"};
  }

  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "zero":
        return "0";

      case "xxSmall":
        return props.theme.spacing.xxSmall;

      case "xSmall":
        return props.theme.spacing.xSmall;

      case "small":
        return props.theme.spacing.small;

      case "regular":
        return props.theme.spacing.regular;

      case "large":
        return props.theme.spacing.large;

      case "xLarge":
        return props.theme.spacing.xLarge;

      default:
        return props.theme.spacing.regular;
    }
  }};
`;

export const H2 = styled.h2`
  font-family: ${(props) => {
    switch (props.fontFamily) {
      case "regular":
        return props.theme.fontFamily.regular;

      case "code":
        return props.theme.fontFamily.code;

      default:
        return props.theme.fontFamily.regular;
    }
  }};

  font-size: ${(props) => {
    switch (props.fontSize) {
      case "small":
        return props.theme.fontSize.small;

      case "regular":
        return props.theme.fontSize.regular;

      case "large":
        return props.theme.fontSize.large;

      case "xLarge":
        return props.theme.fontSize.xLarge;

      case "xxLarge":
        return props.theme.fontSize.xxLarge;

      case "xxxLarge":
        return props.theme.fontSize.xxxLarge;

      default:
        return props.theme.fontSize.xxLarge;
    }
  }};

  color: ${(props) => {
    switch (props.color) {
      case "text400":
        return props.theme.color.text400;

      case "text100":
        return props.theme.color.text100;

      case "accent500":
        return props.theme.color.accent500;

      case "accent400":
        return props.theme.color.accent400;

      default:
        return props.theme.color.text400;
    }
  }};

  font-weight: ${(props) => {
    switch (props.fontWeight) {
      case "regular":
        return props.theme.fontWeight.regular;

      case "bold":
        return props.theme.fontWeight.bold;

      default:
        return props.theme.fontWeight.bold;
    }
  }};

  text-align: ${(props) =>
    props.textAlignDesktop ? props.textAlignDesktop : "left"};

  ${(props) => props.theme.breakpoint.tablet} {
    text-align: ${(props) =>
      props.textAlignTablet ? props.textAlignTablet : "left"};
  }

  ${(props) => props.theme.breakpoint.mobile} {
    text-align: ${(props) =>
      props.textAlignMobile ? props.textAlignMobile : "center"};
  }

  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "zero":
        return "0";

      case "xxSmall":
        return props.theme.spacing.xxSmall;

      case "xSmall":
        return props.theme.spacing.xSmall;

      case "small":
        return props.theme.spacing.small;

      case "regular":
        return props.theme.spacing.regular;

      case "large":
        return props.theme.spacing.large;

      case "xLarge":
        return props.theme.spacing.xLarge;

      default:
        return props.theme.spacing.small;
    }
  }};
`;

export const H3 = styled.h3`
  font-family: ${(props) => {
    switch (props.fontFamily) {
      case "regular":
        return props.theme.fontFamily.regular;

      case "code":
        return props.theme.fontFamily.code;

      default:
        return props.theme.fontFamily.regular;
    }
  }};

  font-size: ${(props) => {
    switch (props.fontSize) {
      case "small":
        return props.theme.fontSize.small;

      case "regular":
        return props.theme.fontSize.regular;

      case "large":
        return props.theme.fontSize.large;

      case "xLarge":
        return props.theme.fontSize.xLarge;

      case "xxLarge":
        return props.theme.fontSize.xxLarge;

      case "xxxLarge":
        return props.theme.fontSize.xxxLarge;

      default:
        return props.theme.fontSize.xLarge;
    }
  }};

  font-style: italic;

  color: ${(props) => {
    switch (props.color) {
      case "text400":
        return props.theme.color.text400;

      case "text100":
        return props.theme.color.text100;

      case "accent500":
        return props.theme.color.accent500;

      case "accent400":
        return props.theme.color.accent400;

      default:
        return props.theme.color.text400;
    }
  }};

  font-weight: ${(props) => {
    switch (props.fontWeight) {
      case "regular":
        return props.theme.fontWeight.regular;

      case "bold":
        return props.theme.fontWeight.bold;

      default:
        return props.theme.fontWeight.regular;
    }
  }};

  text-align: ${(props) =>
    props.textAlignDesktop ? props.textAlignDesktop : "left"};

  ${(props) => props.theme.breakpoint.tablet} {
    text-align: ${(props) =>
      props.textAlignTablet ? props.textAlignTablet : "left"};
  }

  ${(props) => props.theme.breakpoint.mobile} {
    text-align: ${(props) =>
      props.textAlignMobile ? props.textAlignMobile : "center"};
  }

  margin-bottom: ${(props) => {
    switch (props.marginBottom) {
      case "zero":
        return "0";

      case "xxSmall":
        return props.theme.spacing.xxSmall;

      case "xSmall":
        return props.theme.spacing.xSmall;

      case "small":
        return props.theme.spacing.small;

      case "regular":
        return props.theme.spacing.regular;

      case "large":
        return props.theme.spacing.large;

      case "xLarge":
        return props.theme.spacing.xLarge;

      default:
        return props.theme.spacing.xSmall;
    }
  }};
`;
