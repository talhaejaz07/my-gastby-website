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
        <div className="button-wrapper">
          <Button text="Download CV" href="https://www.google.com" />
        </div>
      </div>
      <StaticImage
        className="portrait"
        imgClassName="portrait-image"
        src="../assets/images/Portrait.jpg"
        alt="Portrait"
        objectFit="contain"
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: min(75rem, 100vw - 2rem);
  margin: 0 auto;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: end;

  .description {
    margin-top: auto;
    margin-bottom: auto;
  }

  .portrait {
    position: relative;
  }
  .portrait-image {
    position: absolute;
    max-height: 98vh;
    top: 100%;
    transform: translateY(-100%);
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

  @media only screen and (max-width: 1020px) {
    .portrait {
      max-height: 95vh;
    }
  }

  @media only screen and (max-width: 975px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 820px) {
    position: relative;
    grid-template-columns: 1fr;
    height: auto;

    .portrait {
      margin-top: 2rem;
      grid-row: 1/2;
      height: auto;
      max-height: none;
    }

    .portrait-image {
      height: auto;
      max-height: none;
    }

    .description {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    h3 {
      text-align: center;
    }

    h2 {
      text-align: center;
    }

    p {
      width: 100%;
      text-align: center;
    }

    .button-wrapper {
      display: flex;
      justify-content: center;
    }
  }
`
