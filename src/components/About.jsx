import React from "react"

import styled from "styled-components"

export default function About() {
  return (
    <Wrapper>
      <div className="container">About</div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--bg-clr-l);

  .container {
    width: min(75rem, 100vw - 2rem);
    margin: 0 auto;
  }
`
