import "./styles/Navbar.scss";
import { ReactComponent as Logo } from "../assets/svg/pool.svg";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = isOpen ? "open" : "";

  const handleToggleMenu = function () {
    setIsOpen((isMenuOpen) => {
      return isMenuOpen ? !isMenuOpen : true;
    });
  };

  return (
    <nav className={`navbar ${activeClass}`}>
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
          <li>
            <a>THE EVENT</a>
          </li>

          <li>
            <a>THE CHALLENGER</a>
          </li>

          <li>
            <a>ACTIVITIES</a>
          </li>

          <li>
            <a>GUESTS</a>
          </li>

          <li>
            <a>SHOP MERCH</a>
          </li>
        </ul>

        <div className="nav-buttons">
          <a className="nav-btn">REGISTER TO PLAY</a>

          <a className="nav-btn">RESERVE A FREE SPOT</a>
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
