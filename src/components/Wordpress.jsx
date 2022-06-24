import React from "react"
import { useEffect, useState } from "react"
import { useSpring, animated } from "react-spring"
import { FaWordpress } from "@react-icons/all-files/fa/FaWordpress"

import styled from "styled-components"

export default function Frontend() {
  const [touched, setTouched] = useState(false)
  useEffect(() => {
    if (!touched) {
      return
    }
    window.setTimeout(() => {
      setTouched(false)
    }, 750)
  }, [touched])
  const iconBop = useSpring({
    transform: touched ? "rotateY(-180deg)" : "rotateY(0deg)",
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
        <FaWordpress className="icon" />
      </animated.div>
      <h3 className="card-title">Wordpress Development</h3>
      <p className="card-description">
        I have made a lot of wordpress websites for my clients over the years.
        Wordpress is ideal for a simple portfolio website, a blog or a small
        scale e-commerce business. I build fast responsive wordpress websites
        with care of on page SEO. You can see some of the websites I made in my
        showcase to make up your mind.
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
