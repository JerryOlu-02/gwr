import "./styles/History.scss";
import ShehuStanding from "../assets/images/shehu-standing.jpg";
import ShehuStandingClear from "../assets/images/shehu-standing-clear.jpg";
import ImgWithTextEqual from "../reusable-components/ImgWithTextEqual";
import Button from "../reusable-components/Button";

export default function History() {
  return (
    <ImgWithTextEqual
      className={"history"}
      img={ShehuStandingClear}
      placeholderImg={ShehuStanding}
      textClassname={"history__text"}
    >
      <h5>BECOME A PART OF</h5>

      <h3>History</h3>

      <p>
        Come witness greatness as Shehu attempts to break two Guinness World
        Records amid the largest pool competition ever held in Nigeria. Don’t
        just hear about it; experience the energy, excitement, and the legacy
        making event.
      </p>

      <div className="btn__container">
        <Button link={"https://tix.africa/discover/poolfestng"}>
          RESERVE A FREE SPOT
        </Button>

        <Button
          link={"https://tix.africa/discover/poolfestng"}
          className="btn-outline"
        >
          REGISTER TO PLAY
        </Button>
      </div>
    </ImgWithTextEqual>
  );
}
