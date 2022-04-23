import React from "react"
import { Helmet } from "react-helmet"
import "../global.css"

import Layout from "../components/Layout"
import Hero from "../sections/Hero"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Services from "../sections/Services"
import Contact from "../sections/Contact"

export default function index() {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>Talha Ejaz | A resident of internet</title>
        <meta name="description" content="My corner of internet" />
      </Helmet>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
    </Layout>
  )
}
