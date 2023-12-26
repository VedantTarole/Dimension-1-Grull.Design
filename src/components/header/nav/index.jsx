import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";

const navItems = [
  { title: "Times Two", href: "#1" },
  { title: "Pinecast", href: "#2" },
  { title: "Google Pixel", href: "#3" },
  { title: "Due", href: "#4" },
  { title: "Let's Partner", href: "#5" },
  { title: "What we do", href: "#6" },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const handleNavClick = (e, href) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Check if href starts with a hash and a number, and prefix with 'section-' if it does
    const validHref = href.match(/^#[0-9]/)
      ? `#section-${href.slice(1)}`
      : href;

    const section = document.querySelector(validHref); // Find the section that corresponds to the href
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Use smooth scroll into view
      setSelectedIndicator(href); // Update the selected indicator state
    }
  };

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <h1>Times Two</h1>
          </div>
          {navItems.map((item, index) => {
            return (
              <a
                key={index}
                href={item.href}
                className={selectedIndicator === item.href ? styles.active : ""}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.title}
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
