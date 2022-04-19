import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Button from "./Button"

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
            I love to code and have a decade plus of experience in web
            development. In frontend space I can do anything you throw at me.
            You can see samples of my work to makeup your mind. No job is too
            difficult or small for me. You will get personal attention and best
            service.
          </p>
          <div className="signature-wrapper">
            <StaticImage
              className="signature"
              src="../assets/images/signature.png"
              alt="signature"
              width={100}
              objectFit="contain"
              placeholder="none"
            />
          </div>
          <div className="button-wrapper">
            <Button text="Hire Me" href="/#contact" />
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
  }

  .signature {
    margin-bottom: 2rem;
    transform: rotate(-10deg);
  }

  @media only screen and (max-width: 750px) {
    .container {
      grid-template-columns: 1fr;
    }

    h2,
    p {
      text-align: center;
    }

    .signature-wrapper,
    .button-wrapper {
      display: flex;
      justify-content: center;
    }
  }
`
