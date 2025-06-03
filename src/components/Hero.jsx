import Button from "../reusable-components/Button";
import "./styles/Hero.scss";

export default function Hero({ children }) {
  return (
    <section className="hero">
      {children}

      <aside className="hero-content">
        <div className="hero-text">
          <h1>POOL FEST NAIJA</h1>
          <h2>WHERE GREATNESS MEETS THE TABLE</h2>
        </div>

        <div className="hero-buttons">
          <Button>RESERVE A FREE SPOT</Button>

          <Button className="btn-outline">REGISTER TO PLAY</Button>
        </div>
      </aside>

      <aside className="hero-bottom">
        <div className="hero-bottom__text">
          <p>DATE OF THE EVENT</p>
          <h5>July 15–20 2025</h5>
        </div>

        <div className="hero-bottom__text">
          <p>THE VENUE</p>
          <h5>Silverbird Galleria, Victoria Island, Lagos</h5>
        </div>

        <div className="hero-bottom__text">
          <p>FINALE</p>
          <h5>JULY 20, 2025</h5>
        </div>
      </aside>
    </section>
  );
}
