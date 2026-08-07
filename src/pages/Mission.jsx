import React from "react";
import "./Mission.css";
import {
  FaBullseye,
  FaUsers,
  FaHandshake,
  FaGlobeAsia,
} from "react-icons/fa";

const Mission = () => {
  return (
    <section className="mission" id="mission">

      <div className="mission-title">
        <span>हमारा मिशन</span>
        <h2>जनसेवा के प्रति हमारी प्रतिबद्धता</h2>
        <p>
          समाज की उन्नति, युवाओं का सशक्तिकरण और जनता के विश्वास को
          सर्वोच्च प्राथमिकता देना हमारा उद्देश्य है।
        </p>
      </div>

      <div className="mission-container">

        <div className="mission-card">
          <FaBullseye className="icon" />
          <h3>हमारा लक्ष्य</h3>
          <p>
            समाज के हर वर्ग तक विकास और जनकल्याण की योजनाएँ पहुँचाना।
          </p>
        </div>

        <div className="mission-card">
          <FaUsers className="icon" />
          <h3>हमारी प्रतिबद्धता</h3>
          <p>
            जनता के साथ निरंतर संवाद और उनकी समस्याओं के समाधान हेतु कार्य।
          </p>
        </div>

        <div className="mission-card">
          <FaHandshake className="icon" />
          <h3>हमारा विश्वास</h3>
          <p>
            सेवा, समर्पण और पारदर्शिता ही मजबूत नेतृत्व की पहचान है।
          </p>
        </div>

        <div className="mission-card">
          <FaGlobeAsia className="icon" />
          <h3>हमारा विजन</h3>
          <p>
            एक शिक्षित, सशक्त, सुरक्षित और विकसित समाज का निर्माण।
          </p>
        </div>

      </div>

    </section>
  );
};

export default Mission;