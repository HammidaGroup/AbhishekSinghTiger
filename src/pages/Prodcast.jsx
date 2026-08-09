import React from "react";
import "./Podcast.css";

const Podcast = () => {
  return (
    <section className="podcast-section">

      <div className="podcast-container">

        {/* Heading */}
        <div className="podcast-heading">

          <span className="section-tag">
            मीडिया & पॉडकास्ट
          </span>

          <h2>
            अभिषेक सिंह टाइगर
            <br />
            <span>पॉडकास्ट में</span>
          </h2>

          <p>
            राजनीति, समाज और युवाओं से जुड़े महत्वपूर्ण विषयों पर
            अभिषेक सिंह टाइगर की बातचीत और विचार सुनें।
          </p>

        </div>


        {/* Video */}
        <div className="podcast-video">

          <div className="video-wrapper">

            <iframe
              src="https://www.youtube.com/embed/dXiXWjq20ME"
              title="Abhishek Singh Tiger Podcast"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

          </div>

        </div>


        {/* Bottom Info */}
        <div className="podcast-bottom">

          <div className="podcast-info">
            <span>WATCH PODCAST</span>
            <h3>
              राजनीति और जनसरोकारों पर विशेष बातचीत
            </h3>
          </div>

          <a
            href="https://www.youtube.com/watch?v=dXiXWjq20ME"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-btn"
          >
            YouTube पर देखें →
          </a>

        </div>

      </div>

    </section>
  );
};

export default Podcast;