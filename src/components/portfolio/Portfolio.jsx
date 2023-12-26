"use client";
import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    video:
      "https://ik.imagekit.io/78gsbpomt/bg/1.mp4?tr=orig&updatedAt=1703444006351",
    videoLoop:
      "https://ik.imagekit.io/78gsbpomt/bg/1l.mp4?tr=orig&updatedAt=1703444006351",
  },
  {
    id: 2,
    video:
      "https://ik.imagekit.io/78gsbpomt/bg/2.mp4?tr=orig&updatedAt=1703444006351",
    videoLoop:
      "https://ik.imagekit.io/78gsbpomt/bg/2l.mp4?tr=orig&updatedAt=1703444006351",
  },
  {
    id: 3,
    video:
      "https://ik.imagekit.io/78gsbpomt/bg/3.mp4?tr=orig&updatedAt=1703444006351",
    videoLoop:
      "https://ik.imagekit.io/78gsbpomt/bg/3l.mp4?tr=orig&updatedAt=1703444006351",
  },
  {
    id: 4,
    video:
      "https://ik.imagekit.io/78gsbpomt/bg/4.mp4?tr=orig&updatedAt=1703444006351",
    videoLoop:
      "https://ik.imagekit.io/78gsbpomt/bg/4l.mp4?tr=orig&updatedAt=1703444006351",
  },
  {
    id: 5,
    video:
      "https://ik.imagekit.io/78gsbpomt/bg/5.mp4?tr=orig&updatedAt=1703444006351",
    videoLoop:
      "https://ik.imagekit.io/78gsbpomt/bg/5.mp4?tr=orig&updatedAt=1703444006351",
  },
  {
    id: 6,
    video:
      "https://ik.imagekit.io/78gsbpomt/bg/6.mp4?tr=orig&updatedAt=1703444006351",
    videoLoop:
      "https://ik.imagekit.io/78gsbpomt/bg/6.mp4?tr=orig&updatedAt=1703444006351",
  },
];

const Single = ({ item }) => {
  return (
    <section
      style={{ position: "relative", overflow: "hidden", height: "100vh" }}
      id={`section-${item.id}`} // Updated ID to use a valid CSS selector
    >
      <div className="video-background">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={item.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const handleNavClick = (id) => {
    // Smooth scroll to the section
    const section = document.querySelector(`#section-${id}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation for scrolling */}
      <nav className="portfolio-navigation">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className="nav-item"
          >
            {`Section ${item.id}`}
          </button>
        ))}
      </nav>

      {/* Sections with videos */}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
