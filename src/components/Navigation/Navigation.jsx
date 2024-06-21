import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import "./Navigation.css";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const navRef = useRef();
  const [showNavButton, setShowNavButton] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
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
          <button className="nav-btn" onClick={hideNavbar}>
            <CloseOutlined style={{ fontSize: "22px", padding: "8px" }} />
          </button>
        )}
        <a
          href="#hero"
          className={activeSection === "#hero" ? "active" : ""}
          onClick={() => handleLinkClick("#hero")}
        >
          Hero
        </a>
        <a
          href="#about"
          className={activeSection === "#about" ? "active" : ""}
          onClick={() => handleLinkClick("#about")}
        >
          About
        </a>
        <a
          href="#projects"
          className={activeSection === "#projects" ? "active" : ""}
          onClick={() => handleLinkClick("#projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeSection === "#contact" ? "active" : ""}
          onClick={() => handleLinkClick("#contact")}
        >
          Contact
        </a>
      </nav>
      {showNavButton && (
        <button className="nav-btn" onClick={showNavbar}>
          <MenuOutlined style={{ fontSize: "22px", padding: "8px" }} />
        </button>
      )}
    </header>
  );
};

export default Navigation;
