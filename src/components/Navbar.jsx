import "./styles/Navbar.scss";
import { ReactComponent as Logo } from "../assets/svg/pool-logo.svg";
import { useState, useEffect } from "react";

export default function Navbar({
  eventRef,
  challengerRef,
  activitiesRef,
  guestsRef,
  shopMerchRef,
  faqRef,
}) {
  //  Intersection Observer to handle sticky navbar
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stickyClass = isSticky ? "sticky" : "";

  //  Custom hook to observe the navbar's visibility
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = isOpen ? "open" : "";

  const handleToggleMenu = function () {
    setIsOpen((isMenuOpen) => {
      return isMenuOpen ? !isMenuOpen : true;
    });
  };

  const handleScrollToSection = function (ref) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${activeClass} ${stickyClass}`}>
      <aside className="nav-left">
        <div className="nav-logo">
          <a>
            <Logo />
            <p>POOLFEST</p>
          </a>
        </div>
      </aside>

      <div className={`nav-right ${activeClass}`}>
        <ul className="nav-links">
          <li onClick={() => handleScrollToSection(eventRef)}>
            <a>THE EVENT</a>
          </li>

          <li onClick={() => handleScrollToSection(challengerRef)}>
            <a>THE CHALLENGER</a>
          </li>

          <li onClick={() => handleScrollToSection(activitiesRef)}>
            <a>ACTIVITIES</a>
          </li>

          <li onClick={() => handleScrollToSection(guestsRef)}>
            <a>GUESTS</a>
          </li>

          <li onClick={() => handleScrollToSection(shopMerchRef)}>
            <a>SHOP MERCH</a>
          </li>

          <li onClick={() => handleScrollToSection(faqRef)}>
            <a>FAQs</a>
          </li>
        </ul>

        <div className="nav-buttons">
          <a
            href="https://tix.africa/discover/poolfestng"
            target="_blank"
            rel="noreferrer"
            className="nav-btn"
          >
            REGISTER TO PLAY
          </a>

          <a
            href="https://tix.africa/discover/poolfestng"
            target="_blank"
            rel="noreferrer"
            className="nav-btn"
          >
            RESERVE A FREE SPOT
          </a>
        </div>
      </div>

      <div
        onClick={() => handleToggleMenu()}
        className={`menu-bar ${activeClass}`}
      >
        <span className="menu-line"></span>
        <span className="menu-line"></span>
        <span className="menu-line"></span>
      </div>
    </nav>
  );
}
