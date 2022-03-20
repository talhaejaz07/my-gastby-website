import React from "react"
import styled from "styled-components"
import banner from "../assets/images/Banner.webp"

export default function Navbar() {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="#">My Work</a>
        </li>
        <li>
          <a href="#">My Blog</a>
        </li>
      </ul>
      <img src={banner} alt="banner" />
      <ul>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  align-items: center;

  img {
    height: 150px;
  }

  ul {
    display: flex;
  }

  a {
    text-decoration: none;
    color: var(--txt-clr);
  }

  li {
    list-style-type: none;
  }
`
