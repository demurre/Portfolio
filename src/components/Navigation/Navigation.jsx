import styles from "./Navigation.module.css";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const navRef = useRef();
  const [showNavButton, setShowNavButton] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const showNavbar = () => {
    navRef.current.classList.toggle(styles["responsive-nav"]);
  };

  const hideNavbar = () => {
    navRef.current.classList.remove(styles["responsive-nav"]);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth < 1024) {
      hideNavbar();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShowNavButton(true);
      } else {
        setShowNavButton(false);
        hideNavbar();
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["#hero", "#about", "#projects", "#contact"];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && scrollPosition >= section.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav ref={navRef}>
        {showNavButton && (
          <button className={styles["nav-btn"]} onClick={hideNavbar}>
            <CloseOutlined
              style={{ fontSize: "var(--font-size-m)", padding: "8px" }}
            />
          </button>
        )}
        <a
          href="#hero"
          className={activeSection === "#hero" ? styles["active"] : ""}
          onClick={() => handleLinkClick("#hero")}
        >
          Hero
        </a>
        <a
          href="#about"
          className={activeSection === "#about" ? styles["active"] : ""}
          onClick={() => handleLinkClick("#about")}
        >
          About
        </a>
        <a
          href="#projects"
          className={activeSection === "#projects" ? styles["active"] : ""}
          onClick={() => handleLinkClick("#projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeSection === "#contact" ? styles["active"] : ""}
          onClick={() => handleLinkClick("#contact")}
        >
          Contact
        </a>
      </nav>
      {showNavButton && (
        <button className={styles["nav-btn"]} onClick={showNavbar}>
          <MenuOutlined
            style={{ fontSize: "var(--font-size-m)", padding: "8px" }}
          />
        </button>
      )}
    </header>
  );
};

export default Navigation;
