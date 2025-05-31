import "./styles/Navbar.scss";
import Button from "../reusable-components/Button";
import { ReactComponent as Logo } from "../assets/svg/pool.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <aside className="nav-left">
        <div className="nav-logo">
          <a>
            <Logo />
            <p>POOLFEST</p>
          </a>
        </div>

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
      </aside>

      <div className="nav-buttons">
        <a>REGISTER TO PLAY</a>

        <a>RESERVE A FREE SPOT</a>
      </div>
    </nav>
  );
}
