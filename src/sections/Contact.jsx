import React from "react"

import { GoMailRead } from "@react-icons/all-files/Go/GoMailRead"
import { FaFacebookF } from "@react-icons/all-files/Fa/FaFacebookF"
import { FaTwitter } from "@react-icons/all-files/Fa/FaTwitter"

import styled from "styled-components"

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="container">
        <h4 className="tag-sub-line">Have something in mind?</h4>
        <h3 className="tag-line">Let us keep in touch</h3>
        <p className="description">
          You can contact me through the links given below in addition to the
          comments on my blog, I am available on most of the social media
          platforms.
        </p>

        <div className="contact-information-container">
          <div className="contact-information">
            <div className="info">
              <a className="icon" href="mailto:talhaejaz@outlook.com">
                <GoMailRead />
              </a>
              <h4 className="info-heading">Email</h4>
              <p className="info-text">talhaejaz@outlook.com</p>
            </div>

            <div className="info">
              <a
                className="icon"
                href="https://www.facebook.com/TalhaEjaz07"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <h4 className="info-heading">Facebook</h4>
              <p className="info-text">@TalhaEjaz07</p>
            </div>

            <div className="info">
              <a
                className="icon"
                href="https://twitter.com/TalhaEjaz07ee"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
              <h4 className="info-heading">Twitter</h4>
              <p className="info-text">@TalhaEjaz07ee</p>
            </div>
          </div>

          <form action="#" method="post" className="contact-form">
            <input type="text" name="Name" id="name" placeholder="Full Name" />

            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              name="Subject"
              id="subject"
              placeholder="Subject"
            />

            <textarea name="Message" id="message" placeholder="Message" />

            <input type="submit" value="Submit" id="send"></input>
          </form>
        </div>
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

  .tag-line {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
    text-align: center;
    font-size: 2.5rem;
  }

  .tag-sub-line {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1.25rem;
    text-align: center;
    font-size: 1rem;
    color: var(--accent-clr);
  }

  .description {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.5rem;
    text-align: center;
    font-size: 1rem;
    max-width: 70ch;
  }

  .contact-information-container {
    display: grid;
    grid-template-columns: 35% 1fr;
  }

  .contact-information {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .icon {
    font-size: 1.5rem;
    color: var(--bg-clr-l);
    background-color: var(--accent-clr);
    padding: 1.25rem;
    border-radius: 50%;
  }

  .info-heading {
    color: var(--accent-clr);
    margin-top: 1.25rem;
  }

  .info-text {
    margin-top: 0.25rem;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  input {
    width: 100%;
    height: 2.5rem;
    padding: 0.25rem;
    border: transparent;
    border-radius: 0.25rem;
    background-color: var(--bg-clr-l);
  }

  input#send {
    background-color: var(--accent-clr);
    color: var(--bg-clr-l);
  }

  input#send:hover {
    background-color: var(--d-accent-clr);
  }

  input::placeholder {
    color: var(--txt-clr);
  }

  textarea {
    width: 100%;
    padding: 0.25rem;
    height: 10rem;
    font-family: "Roboto", sans-serif;
    border: transparent;
    border-radius: 0.25rem;
    background-color: var(--bg-clr-l);
  }

  textarea::placeholder {
    color: var(--txt-clr);
  }

  @media only screen and (max-width: 1020px) {
    .contact-information-container {
      grid-template-columns: 1fr;
    }

    .contact-information {
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 1.25rem;
    }
  }

  @media only screen and (max-width: 480px) {
    .contact-information {
      flex-direction: column;
    }
  }
`
