import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-content">
          <span className="contact-tag">संपर्क करें</span>

          <h2>
            हमसे <span>जुड़ें</span>
          </h2>

          <p>
            किसी सुझाव, सहयोग या अन्य जानकारी के लिए हमसे
            सीधे संपर्क करें। आपकी बात हमारे लिए महत्वपूर्ण है।
          </p>

          <div className="contact-info">

            {/* Phone */}
            <a href="tel:+919005969606" className="contact-item">
              <div className="contact-icon">☎</div>
              <div>
                <small>मोबाइल नंबर</small>
                <h3>+91 90059 69606</h3>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:abhisekh01072000@gmail.com"
              className="contact-item"
            >
              <div className="contact-icon">✉</div>
              <div>
                <small>ईमेल</small>
                <h3>abhisekh01072000@gmail.com</h3>
              </div>
            </a>

          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919005969606"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp पर संपर्क करें →
          </a>
        </div>


        {/* Right Side */}
        <div className="contact-card">

          <div className="contact-card-top">
            <span>GET IN TOUCH</span>
            <div className="contact-dot"></div>
          </div>

          <h3>
            आपकी बात,<br />
            <span>हमारी प्राथमिकता।</span>
          </h3>

          <p>
            संपर्क करने के लिए ऊपर दिए गए मोबाइल नंबर या
            ईमेल का उपयोग करें।
          </p>

          <div className="contact-card-line"></div>

          <div className="contact-card-footer">
            <span>उपलब्धता</span>
            <strong>24 × 7</strong>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;