import ImgWithText from "../reusable-components/ImgWithText";
import GwrImage from "../assets/images/gwr-img.png";
import GwrImageClear from "../assets/images/gwr-img-clear.png";
import { ReactComponent as GwrLogo } from "../assets/svg/gwr-logo.svg";
import { useEffect, useRef } from "react";

export default function GwrAttempt({ setRef }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref);
  }, []);

  const btn = "RESERVE A FREE SPOT";
  const btnClass = "btn-gwr";

  const header = (
    <>
      <h4>the Guinness</h4>
      <h1 className="wine">WORLD</h1>
      <h1 className="wine">RECORD</h1>
      <h4>attempts</h4>
    </>
  );

  return (
    <ImgWithText
      ref={ref}
      src={GwrImageClear}
      srcPlaceholder={GwrImage}
      button={btn}
      logo={<GwrLogo />}
      h4={header}
      btnClass={btnClass}
    />
  );
}
