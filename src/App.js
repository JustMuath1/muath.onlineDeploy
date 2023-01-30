import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Scrollup from "./components/scrollup/Scrollup";
// import Qualification from "./components/qualifications/Qualification";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        {/* <Qualification /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <Scrollup />
    </>
  );
}

export default App;
