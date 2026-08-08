import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Top Footer */}
      <div className="footerTop">

        {/* Brand */}
        <div className="footerBrand">
          <h2>अभिषेक सिंह टाइगर</h2>

          <p>
            जनसेवा, सामाजिक सहभागिता और युवाओं के सशक्तिकरण के लिए
            निरंतर प्रयासरत।
          </p>

          <div className="footerSocial">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>


        {/* Quick Pages */}
        <div className="fooCenter">

          <div className="f-c-l">
            <h3>Quick Pages</h3>

            <ul>
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/mission">Mission</a>
              </li>

              <li>
                <a href="/gallery">Gallery</a>
              </li>

              <li>
                <a href="/news">News</a>
              </li>
            </ul>
          </div>


          {/* Contact */}
          <div className="f-c-r">

            <h3>Contact Us</h3>

            <p>
              📞 +919005969606
            </p>

            <p>
              📧 abhisekh01072000@gmail.com
            </p>

            <p>
              📍 उत्तर प्रदेश, भारत
            </p>

            <a
              className="footerContactBtn"
              href="https://wa.me/919005969606"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp पर संपर्क करें
            </a>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="fooBottom">

        <p>
          © {new Date().getFullYear()} Abhishek Singh Tiger. All Rights Reserved.
        </p>

        <p className="createdBy">
          Designed & Developed by{" "}
          <a
            href="https://hammidatech.in"
            target="_blank"
            rel="noreferrer"
          >
            Hammida Tech
          </a>
        </p>

      </div>

    </footer>
  );
};

export default Footer;