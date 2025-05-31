import "./styles/Sponsor.scss";
import Button from "../reusable-components/Button";

export default function Sponsor() {
  return (
    <section className="sponsor">
      <aside className="sponsor__content">
        <div className="sponsor__text">
          <h3>become a</h3>

          <h1>sponsor</h1>

          <p>
            From exclusive activation opportunities to broad media exposure,
            sponsoring this event puts your brand at the heart of Nigeria’s
            biggest sporting celebration yet.
          </p>
        </div>

        <div className="sponsor__buttons">
          <Button>BECOME A SPONSOR</Button>
        </div>
      </aside>

      <aside className="sponsor__bottom">
        <div className="sponsor-container">
          <h6>(01)</h6>

          <h5>Massive Visibility</h5>

          <p>
             You’ll be part of a Guinness World Record, amplified by press,
            social media, and digital creators.
          </p>
        </div>

        <div className="sponsor-container">
          <h6>(01)</h6>

          <h5>Youth Credibility</h5>

          <p>
            Align with joy, fitness, and cultural energy in an unforgettable
            setting.
          </p>
        </div>

        <div className="sponsor-container">
          <h6>(01)</h6>

          <h5>Lead Activation</h5>

          <p>
             Host a branded challenge, wellness corner, or photo-booth. Collect
            signups and give samples.
          </p>
        </div>
      </aside>
    </section>
  );
}
