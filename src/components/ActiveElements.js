import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "@react-icons/all-files/Bi/BiArrowToTop";
import styled from "styled-components";

// Button Element
export const Button = styled.button`
  cursor: pointer;

  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.color.accent400};

  color: ${(props) => {
    switch (props.color) {
      case "text400":
        return props.theme.color.text400;

      case "text100":
        return props.theme.color.text100;

      case "background400":
        return props.theme.color.background400;

      case "background100":
        return props.theme.color.background100;

      case "accent500":
        return props.theme.color.accent500;

      case "accent400":
        return props.theme.color.accent400;

      default:
        return props.theme.color.background100;
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
        return props.theme.fontSize.large;
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

  padding: ${(props) => (props.padding ? props.padding : "1rem 2.5rem")};

  border: ${(props) => (props.border ? props.border : 0)};

  &:hover {
    background-color: ${(props) =>
      props.backgroundColorHover
        ? props.backgroundColorHover
        : props.theme.color.accent500};
  }

  &:active {
    transform: scale(0.99);
  }
`;

// BackToTop Element
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const visibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", visibility);

    return () => {
      window.removeEventListener("scroll", visibility);
    };
  }, []);

  return (
    <BTTWrapper>
      <BiArrowToTop
        className={isVisible ? "icon opacity" : "icon"}
        onClick={scrollToTop}
      />
    </BTTWrapper>
  );
}

const BTTWrapper = styled.div`
  .icon {
    position: fixed;
    bottom: 5%;
    right: 5%;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    color: ${(props) => props.theme.color.background400};
    background-color: ${(props) => props.theme.color.accent400};
    border: 2px solid ${(props) => props.theme.color.accent400};
    border-radius: 50%;
    opacity: 0;
    transition-property: all;
    transition-duration: 0.25s;
  }

  .opacity {
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.25s;
  }

  @media only screen and (min-width: 60rem) {
    .icon:hover {
      color: ${(props) => props.theme.color.accent400};
      background-color: transparent;
      border: 2px solid ${(props) => props.theme.color.accent400};
    }
  }
`;
