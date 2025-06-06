import "./styles/MeetChallenger.scss";
import ChallengerImg from "../assets/images/challenger-img.png";
import ChallengerImgClear from "../assets/images/challenger-img-clear.png";
import ImgWithTextEqual from "../reusable-components/ImgWithTextEqual";
import { useEffect, useRef } from "react";

export default function MeetChallenger({ setRef }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref);
  }, []);

  return (
    <ImgWithTextEqual
      placeholderImg={ChallengerImg}
      ref={ref}
      img={ChallengerImgClear}
    >
      <h3>meet the</h3>
      <h5 className="challenger__h5">challenger</h5>

      <h6>SCOTT IGBENE</h6>

      <p>
        I'm Scott Igbene, and I’ve played pool since I was 13. Now, with support
        from DUNKIT, TRUE PATRIOT, and the Cue Sports Association of Nigeria,
        I’m taking on the Guinness World Record for the Longest Individual Pool
        Marathon — 125 hours of non-stop 8-ball pool at the Silverbird Galleria.
        I will also be attempting to break the Guinness World Record for playing
        the most unique individuals. The goal is to play at least 200 different
        people, each match verified and documented according to official
        guidelines. <br />
        This is the toughest challenge of my life — and I’m ready.
      </p>
    </ImgWithTextEqual>
  );
}
