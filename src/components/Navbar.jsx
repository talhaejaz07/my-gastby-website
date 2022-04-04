import React, { useState } from "react"
import { RiMenuFoldFill } from "@react-icons/all-files/ri/RiMenuFoldFill"
import { RiMenuUnfoldFill } from "@react-icons/all-files/ri/RiMenuUnfoldFill"

import styled from "styled-components"

export default function Navbar() {
  const [menuClick, setMenuClick] = useState(true)
  return (
    <Wrapper>
      <div>
        <a href="/">
          <h2>
            <span>t</span>alha <span>e</span>jaz
          </h2>
        </a>
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
            <a href="/" onClick={() => setMenuClick(!menuClick)}>
              home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuClick(!menuClick)}>
              about
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuClick(!menuClick)}>
              skills
            </a>
          </li>
          <li>
            <a href="#service" onClick={() => setMenuClick(!menuClick)}>
              service
            </a>
          </li>
          <li>
            <a href="#works" onClick={() => setMenuClick(!menuClick)}>
              works
            </a>
          </li>
          <li>
            <a href="#blog" onClick={() => setMenuClick(!menuClick)}>
              blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuClick(!menuClick)}>
              contact
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  width: min(75rem, 100vw - 2rem);
  margin-top: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;

  h2 {
    text-transform: uppercase;
    color: var(--txt-clr);
    font-size: 2rem;
  }

  span {
    color: var(--accent-clr);
    font-size: 2.5rem;
  }

  nav {
    width: 100%;
  }

  ul {
    display: flex;
    margin-left: 3.5rem;
    align-items: center;
  }

  li {
    list-style: none;
    margin-left: 3.5rem;
  }

  a {
    text-transform: uppercase;
    font-size: 0.9rem;
    text-decoration: none;
    color: var(--txt-clr);
    white-space: nowrap;
  }

  a:hover {
    color: var(--accent-clr);
  }

  .open,
  .close {
    display: none;
    font-size: 2rem;
    color: var(--bg-clr);
    background-color: var(--accent-clr);
    border-radius: 0.2rem;
    padding: 0.2rem;
  }

  @media only screen and (max-width: 1020px) {
    flex-direction: column;
    align-items: center;

    ul {
      width: 100%;
      margin: 0;
      justify-content: space-around;
    }

    li {
      margin: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    position: relative;

    .open,
    .close {
      display: block;
      position: absolute;
      top: 1.5rem;
      right: 0%;
      transform: translateY(-50%);
      z-index: 99;
      opacity: 1;
      transition-duration: 0.5s;
    }

    .visible {
      opacity: 0;
      transition-duration: 0.5s;
    }

    nav {
      display: flex;
      justify-content: flex-end;
      position: absolute;
      top: 100%;
      height: 60vh;
      overflow-x: hidden;
    }

    ul {
      display: flex;
      flex-direction: column;
      transform: translateX(100vw);
      transition-property: transform;
      transition-duration: 500ms;
      background-color: var(--bg-clr);
    }

    .slide-in {
      transform: translateX(0vw);
      transition-property: transform;
      transition-duration: 500ms;
    }

    a {
      font-size: 1.5rem;
    }
  }
`
