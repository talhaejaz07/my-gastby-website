import React from "react"
import styled from "styled-components"

export default function Button(props) {
  return (
    <Wrapper href={props.href}>
      <button>{props.text}</button>
    </Wrapper>
  )
}

const Wrapper = styled.a`
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
