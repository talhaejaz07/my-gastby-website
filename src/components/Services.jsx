import React from "react"
import { VscCode } from "@react-icons/all-files/Vsc/VscCode"
import { FaWordpress } from "@react-icons/all-files/fa/FaWordpress"
import { FaReact } from "@react-icons/all-files/fa/FaReact"
import styled from "styled-components"

export default function Services() {
  return (
    <Wrapper id="services">
      <h2>Services</h2>
      <p className="main-description">
        Normally my services are highly flexible, I discuss with my clients
        about the requirements and we decide the best technology that suits for
        their particular need. Most of the times the requirements are
        accomplished by one of the following services that I can facilitate.
      </p>
      <div className="services">
        <div className="card card01">
          <div className="icon-wrapper">
            <VscCode className="icon" />
          </div>
          <h3 className="card-title">Frontend Development</h3>
          <p className="card-description">
            I am proficient at basic frontend technologies namely HTML, CSS and
            JavaScript. Now-a-days its not in fashion to use vanilla coding for
            the web projects but if the client wants simple coded website which
            will stand the test of time and open in the browser reliably 20
            years in the future, I can code their website with vanilla
            technologies without any dependencies to external servers.
          </p>
        </div>

        <div className="card card02">
          <div className="icon-wrapper">
            <FaWordpress className="icon" />
          </div>
          <h3 className="card-title">Wordpress Development</h3>
          <p className="card-description">
            I have made a lot of wordpress websites for my clients over the
            years. Wordpress is ideal for a simple portfolio website, a blog or
            a small scale e-commerce business. I build fast responsive wordpress
            websites with care of on page SEO. You can see some of the websites
            I made in my showcase to make up your mind.
          </p>
        </div>

        <div className="card card03">
          <div className="icon-wrapper">
            <FaReact className="icon" />
          </div>
          <h3 className="card-title">Single Page Application</h3>
          <p className="card-description">
            React JS is my frontend library/framework of choice. React makes
            high speed, light weight single page applications which feel fast
            and conform to modern industrial standards. I usually feel
            comfortable to code a given design but if you have an idea but its
            not completely flushed out on a design board i can help you to make
            it a reality too. Applications I make are clean coded and ready to
            consume api and talk to the backend.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: var(--container-width);
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;

  h2 {
    font-size: 2.5rem;
    color: var(--txt-clr);
    text-align: center;
    margin-bottom: 2rem;
  }

  .main-description {
    color: var(--txt-clr);
    text-align: center;
    max-width: 75ch;
    margin: 0 auto;
  }

  .services {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
  }

  .card {
    padding: 1rem;
    border: 0.25rem solid var(--txt-clr-l);
  }

  .card01 {
    grid-column: 1/5;
  }

  .card02 {
    grid-column: 5/9;
  }

  .card03 {
    grid-column: 9/13;
  }

  .icon-wrapper {
    display: grid;
    align-items: center;
    justify-items: center;
    margin-bottom: 0.75rem;
  }

  .icon {
    height: 5rem;
    width: 5rem;
    color: var(--txt-clr);
  }

  .card-title {
    color: var(--txt-clr);
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  .card-description {
    color: var(--txt-clr);
    text-align: center;
  }

  @media only screen and (max-width: 1000px) {
    .card01 {
      grid-column: 1/7;
    }

    .card02 {
      grid-column: 7/13;
    }

    .card03 {
      grid-column: 4/10;
    }
  }

  @media only screen and (max-width: 600px) {
    .card01 {
      grid-column: 1/-1;
    }

    .card02 {
      grid-column: 1/-1;
    }

    .card03 {
      grid-column: 1/-1;
    }
  }
`
