import "./Navigation.css";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Navigation = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <h3>🇺🇦</h3>
      <nav ref={navRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
          <CloseIcon />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <DehazeIcon />
      </button>
    </header>
  );
};

export default Navigation;
