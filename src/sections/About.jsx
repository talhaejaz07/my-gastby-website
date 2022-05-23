import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Button from "../components/Button"

export default function About() {
  return (
    <Wrapper id="about">
      <div className="container">
        <StaticImage
          src="../assets/images/about-pic.png"
          alt="about-pic"
          objectFit="contain"
        />
        <div className="description">
          <h2>About Me</h2>
          <p>
            My name is Talha Ejaz, and I am a Professional Engineer working with
            mainly Web Technologies. I develop innovative web apps designed to
            engage people working from right here, the land of five rivers. I
            have been engaged in web technologies for over a decade now and have
            used a large array of tools to do my work. I have made this website
            mainly as my portal to vent out the thoughts I have without any
            restrictions. I invite you to read my blog posts and share what you
            think of them with me in the comments, also you can find me on
            almost every social media that matters.
          </p>
          <div className="signature-wrapper">
            <StaticImage
              className="signature"
              src="../assets/images/signature.png"
              alt="signature"
              width={150}
              objectFit="contain"
              placeholder="none"
            />
          </div>
          <div className="button-wrapper">
            <Button text="Contact Me" href="/#contact" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--bg-clr-l);
  padding-top: 5rem;
  padding-bottom: 5rem;

  .container {
    width: var(--container-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    color: var(--txt-clr);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 2rem;
    text-align: justify;
  }

  .signature {
    margin-bottom: 2rem;
    transform: rotate(-10deg);
  }

  @media only screen and (max-width: 750px) {
    .container {
      grid-template-columns: 1fr;
    }

    h2 {
      text-align: center;
    }

    .signature-wrapper,
    .button-wrapper {
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 380px) {
    p {
      text-align: center;
    }
  }
`
