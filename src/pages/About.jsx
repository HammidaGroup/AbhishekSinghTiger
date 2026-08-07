import React from "react";
import "./About.css";
import aboutImg from "../assets/bhusan.jpg"; // Apni image yaha lagana

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">
          <img src={aboutImg} alt="Abhishek Singh Tiger" />

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

          <div className="about-cards">

            <div className="card">
              <h3>500+</h3>
              <span>जन सम्पर्क</span>
            </div>

            <div className="card">
              <h3>100+</h3>
              <span>सामाजिक कार्यक्रम</span>
            </div>

            <div className="card">
              <h3>50+</h3>
              <span>युवा अभियान</span>
            </div>

            <div className="card">
              <h3>24×7</h3>
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