import React, { useRef } from "react";
import Social from "./Social";
import "./home.css";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import { useInView } from "framer-motion";

const Home = () => {
  // Framer motion variables
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      className="home section"
      id="home"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
