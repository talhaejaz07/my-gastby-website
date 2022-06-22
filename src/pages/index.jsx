import React from "react";
import { Helmet } from "react-helmet";
import "../styles/global.css";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Contact from "../sections/Contact";

export default function index() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Talha Ejaz | A resident of internet</title>
        <meta name="description" content="My corner of internet" />
      </Helmet>
      <Hero />
      <About />
      <Contact />
    </>
  );
}
