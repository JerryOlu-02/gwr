import Button from "../reusable-components/Button";
import "./styles/Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <aside className="hero-content">
        <div className="hero-text">
          <h1>POOL FEST NAIJA</h1>
          <h2>WHERE GREATNESS MEETS THE TABLE</h2>
        </div>

        <div className="hero-buttons">
          <Button
            link={"https://www.eventporte.com/event-details/poolfest9ja/"}
          >
            RESERVE A FREE SPOT
          </Button>

          <Button
            link={"https://www.eventporte.com/event-details/poolfest9ja/"}
            className="btn-outline"
          >
            REGISTER TO PLAY
          </Button>
        </div>
      </aside>

      <aside className="hero-bottom">
        <div className="hero-bottom__text">
          <p>DATE OF THE EVENT</p>
          <h5>tuesday, September 02, 2025 </h5>
        </div>

        <div className="hero-bottom__text">
          <p>THE VENUE</p>
          <h5>Silverbird Galleria, Victoria Island, Lagos</h5>
        </div>

        <div className="hero-bottom__text">
          <p>FINALE</p>
          <h5>September 07, 2025</h5>
        </div>
      </aside>
    </section>
  );
}
