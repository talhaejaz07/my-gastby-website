import React, { useEffect, useState } from "react"
import { BiArrowToTop } from "@react-icons/all-files/Bi/BiArrowToTop"

import styled from "styled-components"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const visibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", visibility)

    return () => {
      window.removeEventListener("scroll", visibility)
    }
  }, [])

  return (
    <Wrapper>
      <BiArrowToTop
        id="icon"
        className={isVisible ? "icon opacity" : "icon"}
        onClick={scrollToTop}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .icon {
    position: fixed;
    bottom: 5%;
    right: 5%;
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    color: var(--bg-clr);
    background-color: var(--accent-clr);
    border: 2px solid var(--accent-clr);
    border-radius: 50%;
    opacity: 0;
    transition-property: all;
    transition-duration: 0.25s;
  }

  .opacity {
    opacity: 1;
    transition-property: opacity;
    transition-duration: 0.25s;
  }

  @media only screen and (min-width: 601px) {
    .icon:hover {
      color: var(--accent-clr);
      background-color: transparent;
      border: 2px solid var(--accent-clr);
    }
  }
`
