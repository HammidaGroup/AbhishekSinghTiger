import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import aboutImg from "../assets/bhusan.jpg";

const About = () => {

  const cardsRef = useRef(null);

  const [started, setStarted] = useState(false);

  const [counts, setCounts] = useState({
    contact: 0,
    programs: 0,
    youth: 0,
    service: 0,
  });

  // Cards screen par aane par counter start
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {

        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }

      },
      {
        threshold: 0.3,
      }
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => observer.disconnect();

  }, []);


  // Counter animation
  useEffect(() => {

    if (!started) return;

    const targets = {
      contact: 500,
      programs: 100,
      youth: 50,
      service: 24,
    };

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        contact: Math.floor(targets.contact * easeOut),
        programs: Math.floor(targets.programs * easeOut),
        youth: Math.floor(targets.youth * easeOut),
        service: Math.floor(targets.service * easeOut),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }

    };

    requestAnimationFrame(animate);

  }, [started]);


  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">

          <img
            src={aboutImg}
            alt="Abhishek Singh Tiger"
          />

          <div className="experience-card">
            <h2>5+</h2>
            <p>वर्षों का अनुभव</p>
          </div>

        </div>


        <div className="about-content">

          <span className="section-tag">
            हमारे बारे में
          </span>

          <h2>
            मैं <span>अभिषेक सिंह टाइगर</span> <br />
            आपकी सेवा में समर्पित
          </h2>

          <p>
            समाज की सेवा, युवाओं के सशक्तिकरण और जनहित के कार्यों
            के प्रति समर्पित रहना मेरा उद्देश्य है।
            मेरा विश्वास है कि जनता का विश्वास ही सबसे बड़ी ताकत है
            और विकास का मार्ग सेवा एवं समर्पण से होकर गुजरता है।
          </p>


          <div className="about-cards" ref={cardsRef}>

            <div className="card">
              <h3>{counts.contact}+</h3>
              <span>जन सम्पर्क</span>
            </div>

            <div className="card">
              <h3>{counts.programs}+</h3>
              <span>सामाजिक कार्यक्रम</span>
            </div>

            <div className="card">
              <h3>{counts.youth}+</h3>
              <span>युवा अभियान</span>
            </div>

            <div className="card">
              <h3>{counts.service}×7</h3>
              <span>जन सेवा</span>
            </div>

          </div>


          <button className="about-btn">
            और जानें →
          </button>

        </div>

      </div>

    </section>
  );
};

export default About;