import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Button from "./Button"

export default function Hero() {
  return (
    <Wrapper>
      <div className="description">
        <h3>Hello!</h3>
        <h2>
          I am <span>Talha</span> Ejaz
        </h2>
        <p>
          An engineer who loves to create and have over a decade of experience.
        </p>
        <Button text="Download CV" href="https://www.google.com" />
      </div>
      <StaticImage src="../assets/images/Portrait.jpg" alt="Portrait" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: min(75rem, 100vw - 2rem);
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  align-items: end;

  .description {
    margin-top: auto;
    margin-bottom: auto;
  }

  h3 {
    color: var(--txt-clr);
    font-size: 1rem;
    text-transform: uppercase;
    font-style: italic;
  }

  h2 {
    font-size: 3.5rem;
    color: var(--txt-clr);
    margin: 1rem 0;
  }

  span {
    color: var(--accent-clr);
  }

  p {
    width: 80%;
    color: var(--txt-clr);
    margin-bottom: 3rem;
  }
`
