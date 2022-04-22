import React from "react"
import { useEffect, useState } from "react"
import { useSpring, animated } from "react-spring"
import { VscCode } from "@react-icons/all-files/Vsc/VscCode"

import styled from "styled-components"

export default function Frontend() {
  const [touched, setTouched] = useState(false)
  useEffect(() => {
    if (!touched) {
      return
    }
    window.setTimeout(() => {
      setTouched(false)
    }, 100)
  }, [touched])
  const iconBop = useSpring({
    transform: touched ? "rotateZ(-30deg)" : "rotateZ(0deg)",
    config: {
      tension: 300,
      friction: 10,
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
        <VscCode className="icon" />
      </animated.div>
      <h3 className="card-title">Frontend Development</h3>
      <p className="card-description">
        I am proficient at basic frontend technologies namely HTML, CSS and
        JavaScript. Now-a-days its not in fashion to use vanilla coding for the
        web projects but if the client wants simple coded website which will
        stand the test of time and open in the browser reliably 20 years in the
        future, I can code their website with vanilla technologies without any
        dependencies to external servers.
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
