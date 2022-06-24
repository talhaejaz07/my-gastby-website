import React from "react";
import Footer from "../sections/Footer";
import { Navbar, BackToTop } from "../components";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
