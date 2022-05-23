import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export default function Button(props) {
  return (
    <Wrapper>
      <Link to={props.href}>
        <button>{props.text}</button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  button {
    color: var(--bg-clr);
    background-color: var(--accent-clr);
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    padding: 1rem 2.5rem;
    border: 0;
    text-transform: uppercase;
    cursor: pointer;
  }
  button:hover {
    background-color: var(--d-accent-clr);
  }
`
