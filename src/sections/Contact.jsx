import React from "react"
import { AiOutlineWhatsApp } from "@react-icons/all-files/Ai/AiOutlineWhatsApp"
import { GoMailRead } from "@react-icons/all-files/Go/GoMailRead"

import styled from "styled-components"

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="container">
        <p className="tagline">
          Let's make something new, different and more meaningful or make
          something more visual or conceptual?
        </p>

        <div className="contact-wrapper">
          <div className="contact">
            <AiOutlineWhatsApp className="icon" />
            <p className="information">0092 300 6033194</p>
          </div>
        </div>

        <div className="contact-wrapper">
          <div className="contact">
            <GoMailRead className="icon" />
            <p className="information">talhaejaz@outlook.com</p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--bg-clr-l);
  padding: 5rem 0;

  .container {
    width: var(--container-width);
    margin: 0 auto;
  }

  .tagline {
    margin: 0 auto;
    max-width: 35ch;
    text-align: center;
    color: var(--txt-clr);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .contact-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .contact {
    display: flex;
    align-items: center;
    color: var(--txt-clr);
  }

  .icon {
    width: 5rem;
    height: 5rem;
  }

  .information {
    font-size: 2rem;
    padding-left: 1.5rem;
  }

  @media only screen and (max-width: 600px) {
    .tagline {
      font-size: 1.5rem;
    }

    .icon {
      width: 3rem;
      height: 3rem;
    }

    .information {
      font-size: 1.5rem;
      padding-left: 1rem;
    }
  }

  @media only screen and (max-width: 375px) {
    .tagline {
      font-size: 1.1rem;
    }

    .icon {
      width: 2.5rem;
      height: 2.5rem;
    }

    .information {
      font-size: 1.1rem;
      padding-left: 1rem;
    }
  }
`
