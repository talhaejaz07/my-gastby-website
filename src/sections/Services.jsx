import React from "react"
import Frontend from "../components/Frontend"
import Wordpress from "../components/Wordpress"
import Spa from "../components/Spa"

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
        <div className="card01">
          <Frontend />
        </div>

        <div className="card02">
          <Wordpress />
        </div>

        <div className="card03">
          <Spa />
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

  .card01 {
    grid-column: 1/5;
  }

  .card02 {
    grid-column: 5/9;
  }

  .card03 {
    grid-column: 9/13;
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
    .services {
      gap: 0;
    }

    .card01 {
      grid-column: 1/-1;
    }

    .card02 {
      grid-column: 1/-1;
      margin-top: 1.5rem;
    }

    .card03 {
      margin-top: 1.5rem;
      grid-column: 1/-1;
    }
  }
`
