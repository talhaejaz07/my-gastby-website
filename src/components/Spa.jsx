import React from "react"
import { useEffect, useState } from "react"
import { useSpring, animated } from "react-spring"
import { FaReact } from "@react-icons/all-files/fa/FaReact"

import styled from "styled-components"

export default function Frontend() {
  const [touched, setTouched] = useState(false)
  useEffect(() => {
    if (!touched) {
      return
    }
    window.setTimeout(() => {
      setTouched(false)
    }, 250)
  }, [touched])
  const iconBop = useSpring({
    transform: touched ? "rotateZ(-360deg)" : "rotateZ(0deg)",
    config: {
      mass: 5,
      tension: 300,
      friction: 40,
    },
  })

  return (
    <Wrapper
      onMouseEnter={() => setTouched(true)}
      onTouchStart={() => setTouched(true)}
      role="textbox"
      tabIndex={0}
    >
      <animated.div className="icon-wrapper" style={iconBop}>
        <FaReact className="icon" />
      </animated.div>
      <h3 className="card-title">Single Page Application</h3>
      <p className="card-description">
        React JS is my frontend library/framework of choice. React makes high
        speed, light weight single page applications which feel fast and conform
        to modern industrial standards. I usually feel comfortable to code a
        given design but if you have an idea but its not completely flushed out
        on a design board i can help you to make it a reality too. Applications
        I make are clean coded and ready to consume api and talk to the backend.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem;
  background-color: var(--bg-clr-l);
  border: 0.25rem solid var(--txt-clr-l);

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
`
