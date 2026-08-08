import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "./About";
import Mission from "./Mission";
import Gallery from "./Gallery";
import Footer from "../components/Footer";

import "./Home.css";
import Contact from "./Contact";

const Home = () => {
  const location = useLocation();

  const topRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    if (path === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const sectionMap = {
      "/about": aboutRef,
      "/mission": missionRef,
      "/gallery": galleryRef,
      "/contact": contactRef,
    };

    const targetRef = sectionMap[path];

    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <div className="homeDiv" ref={topRef}>

      <Header />

      <main>
        <section>
          <Hero />
        </section>

        <section ref={aboutRef} id="about">
          <About />
        </section>

        <section ref={missionRef} id="mission">
          <Mission />
        </section>

        <section ref={galleryRef} id="gallery">
          <Gallery />
        </section>

        <section ref={contactRef} id="contact">
          <Contact/>
        </section>
      </main>

      <Footer />

    </div>
  );
};

export default Home;