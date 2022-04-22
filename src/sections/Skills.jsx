import React from "react"

import styled from "styled-components"

export default function Skills() {
  return (
    <Wrapper id="skills">
      <div className="container">
        <h2 className="title">My Skills</h2>
        <div className="skill">
          <h3>HTML / CSS</h3>
          <p>90%</p>
          <div className="line-wrapper">
            <div className="darker" style={{ width: "90%" }} />
            <div className="dim" />
          </div>
        </div>

        <div className="skill">
          <h3>JavaScript / React.js</h3>
          <p>80%</p>
          <div className="line-wrapper">
            <div className="darker" style={{ width: "80%" }} />
            <div className="dim" />
          </div>
        </div>

        <div className="skill">
          <h3>Wordpress</h3>
          <p>85%</p>
          <div className="line-wrapper">
            <div className="darker" style={{ width: "85%" }} />
            <div className="dim" />
          </div>
        </div>

        <div className="skill">
          <h3>Node.js</h3>
          <p>75%</p>
          <div className="line-wrapper">
            <div className="darker" style={{ width: "75%" }} />
            <div className="dim" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--bg-clr-l);
  padding-bottom: 5rem;

  .container {
    width: var(--container-width);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 5% 1fr 1fr;
    align-items: center;
    gap: 2rem;
    color: var(--txt-clr);
  }

  .title {
    grid-column: 1/2;
    grid-row: 1/3;
    font-size: 2.5rem;
    width: fit-content;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }

  .skill {
    display: grid;
    grid-template-columns: auto auto;
  }

  h3 {
    font-size: 1.1rem;
  }

  p {
    text-align: end;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .line-wrapper {
    padding-top: 1rem;
    position: relative;
    grid-column: 1/-1;
  }

  .darker,
  .dim {
    height: 0.4rem;
    border-radius: 0.3rem;
    position: absolute;
    left: 0;
  }

  .darker {
    background: var(--txt-clr);
    z-index: 1;
  }

  .dim {
    background: var(--txt-clr-l);
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    .container {
      grid-template-columns: 10% 1fr;
      gap: 2rem;
    }

    .title {
      grid-row: 1/5;
    }
  }
`
