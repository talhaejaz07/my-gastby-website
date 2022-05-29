import React from "react"

// import { GoMailRead } from "@react-icons/all-files/Go/GoMailRead"

import styled from "styled-components"

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="container">
        <h4>Have something in mind?</h4>
        <h3>Let us keep in touch</h3>
        <p>
          You can contact me through the links given below in addition to the
          comments on my blog, I am available on most of the social media
          platforms.
        </p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;

  .container {
    width: var(--container-width);
    margin: 0 auto;
  }

  h3 {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
    text-align: center;
    font-size: 2.5rem;
  }

  h4 {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
    text-align: center;
    font-size: 1rem;
    color: var(--accent-clr);
  }

  p {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 1rem;
    max-width: 75ch;
  }
`
