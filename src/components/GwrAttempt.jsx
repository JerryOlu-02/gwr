import ImgWithText from "../reusable-components/ImgWithText";
import GwrImage from "../assets/images/gwr-img.png";
import { ReactComponent as GwrLogo } from "../assets/svg/gwr-logo.svg";

export default function GwrAttempt() {
  const btn = "RESERVE A FREE SPOT";
  const btnClass = "btn-gwr";

  const header = (
    <h4>
      the Guinness
      <br />
      <span>WORLD</span>
      <br />
      <span>RECORD</span>
      <br />
      attempts
    </h4>
  );

  return (
    <ImgWithText
      src={GwrImage}
      button={btn}
      logo={<GwrLogo />}
      h4={header}
      btnClass={btnClass}
    />
  );
}
