import React from "react"
import Button from "../components/Button"

import styled from "styled-components"

export default function Error() {
  return (
    <Wrapper>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Button text="Let's Go back" href="/" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3.5rem;
    padding-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }
`
