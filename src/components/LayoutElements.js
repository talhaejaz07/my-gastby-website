import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { SectionWrapper, P, Span, H2 } from "../components";

import { RiMenuFoldFill } from "@react-icons/all-files/ri/RiMenuFoldFill";
import { RiMenuUnfoldFill } from "@react-icons/all-files/ri/RiMenuUnfoldFill";

// Navbar
export function Navbar() {
  const [menuClick, setMenuClick] = useState(true);
  return (
    <SectionWrapper>
      <NavbarGrid>
        <div>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              position: "relative",
              zIndex: "11",
            }}
          >
            <H2 marginBottom="zero">
              <Span>T</Span>ALHA <Span>E</Span>JAZ
            </H2>
          </Link>
          <RiMenuFoldFill
            onClick={() => setMenuClick(!menuClick)}
            className={`open${menuClick ? "" : " visible"}`}
          />
          <RiMenuUnfoldFill
            onClick={() => setMenuClick(!menuClick)}
            className={`close${menuClick ? " visible" : ""}`}
          />
        </div>
        <nav>
          <ul className={menuClick ? "" : "slide-in"}>
            <li>
              <Link
                className="link"
                to="/"
                onClick={() => setMenuClick(!menuClick)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/#about"
                onClick={() => setMenuClick(!menuClick)}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/blog"
                onClick={() => setMenuClick(!menuClick)}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to="/#contact"
                onClick={() => setMenuClick(!menuClick)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </NavbarGrid>
    </SectionWrapper>
  );
}

const NavbarGrid = styled.header`
  margin-top: ${(props) => props.theme.spacing.xxSmall};
  display: flex;
  align-items: center;
  white-space: nowrap;

  nav {
    width: 100%;
    display: grid;
    place-items: center;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  li {
    list-style: none;
  }

  .link {
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.color.text400};
  }

  .link:hover {
    color: ${(props) => props.theme.color.accent400};
  }

  .open,
  .close {
    display: none;
    font-size: ${(props) => props.theme.fontSize.xxLarge};
    color: ${(props) => props.theme.color.background400};
    background-color: ${(props) => props.theme.color.accent400};
    border-radius: 0.2rem;
    padding: 0.2rem;
  }

  ${(props) => props.theme.breakpoint.tablet} {
    flex-direction: column;
    align-items: center;
  }

  ${(props) => props.theme.breakpoint.mobile} {
    .open,
    .close {
      display: block;
      position: absolute;
      right: ${(props) => props.theme.spacing.xSmall};
      top: ${(props) => props.theme.spacing.large};
      transform: translateY(-50%);
      z-index: 99;
      opacity: 1;
      transition-duration: 0.5s;
    }

    .visible {
      opacity: 0;
      transition-duration: 0.5s;
    }

    ul {
      position: absolute;
      padding-top: ${(props) => props.theme.spacing.large};
      top: 0;
      z-index: 10;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      transform: translateX(100vw);
      transition-property: transform;
      transition-duration: 500ms;
      background-color: ${(props) => props.theme.color.background400};
    }

    .link {
      font-size: ${(props) => props.theme.fontSize.xLarge};
    }

    .slide-in {
      transform: translateX(0vw);
      transition-property: transform;
      transition-duration: 500ms;
    }
  }
`;

// Footer
export function Footer() {
  let year = new Date().getFullYear();

  return (
    <SectionWrapper backgroundColor="background100">
      <FooterGrid>
        <P textAlignDesktop="center" textAlignTablet="center">
          Copyright © {year} Talha Ejaz, All rights Reserved
        </P>
      </FooterGrid>
    </SectionWrapper>
  );
}

const FooterGrid = styled.footer`
  display: grid;
  place-items: center;
  padding-top: ${(props) => props.theme.spacing.xSmall};
  padding-bottom: ${(props) => props.theme.spacing.xSmall};
`;
