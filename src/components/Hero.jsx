import React from "react"

import styled from "styled-components"

export default function Hero() {
  return <Wrapper>Hero</Wrapper>
}

const Wrapper = styled.section`
  width: min(75rem, 100vw - 2rem);
  margin: 0 auto;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
`
