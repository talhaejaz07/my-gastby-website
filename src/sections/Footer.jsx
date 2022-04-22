import React from "react"

import styled from "styled-components"

export default function Footer() {
  let year = new Date().getFullYear()

  return (
    <Wrapper>
      <p>Copyright © {year} Talha Ejaz, All rights Reserved</p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  color: var(--txt-clr);
  padding-top: 1rem;
  padding-bottom: 1rem;

  p {
    text-align: center;
  }
`
