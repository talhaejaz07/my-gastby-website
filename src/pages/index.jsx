import React from "react"
import "../global.css"

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"

export default function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}
