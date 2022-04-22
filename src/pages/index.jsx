import React from "react"
import { Helmet } from "react-helmet"
import "../global.css"

import Navbar from "../sections/Navbar"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Services from "../sections/Services"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"
import BackToTop from "../components/BackToTop"

export default function index() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Talha Ejaz | A resident of internet</title>
        <meta name="description" content="My corner of internet" />
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}
