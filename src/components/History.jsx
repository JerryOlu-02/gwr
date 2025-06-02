import "./styles/History.scss";
import ScottStanding from "../assets/images/scott-standing.jpg";
import ImgWithTextEqual from "../reusable-components/ImgWithTextEqual";
import Button from "../reusable-components/Button";

export default function History() {
  return (
    <ImgWithTextEqual
      className={"history"}
      img={ScottStanding}
      textClassname={"history__text"}
    >
      <h5>BECOME A PART OF</h5>

      <h3>History</h3>

      <p>
        Come witness greatness as Scott attempts to break two Guinness World
        Records amid the largest pool competition ever held in Nigeria. Don’t
        just hear about it; experience the energy, excitement, and the legacy
        making event.
      </p>

      <div className="btn__container">
        <Button>BOOK TICKET</Button>

        <Button className="btn-outline">REGISTER TO PLAY</Button>
      </div>
    </ImgWithTextEqual>
  );
}
