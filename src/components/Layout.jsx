import React from "react"
import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"
import BackToTop from "./BackToTop"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </>
  )
}
