import "./styles/MeetChallenger.scss";
import ChallengerImg from "../assets/images/challenger-img.png";
import ImgWithTextEqual from "../reusable-components/ImgWithTextEqual";
import { useEffect, useRef } from "react";

export default function MeetChallenger({ setRef }) {
  const ref = useRef(null);

  useEffect(() => {
    setRef(ref);
  }, []);

  return (
    <ImgWithTextEqual ref={ref} img={ChallengerImg}>
      <h3>meet the</h3>
      <h5>challenger</h5>

      <h6>SCOTT IGEBENE</h6>

      <p>
        The Guinness World Record Pool Event is a groundbreaking celebration
        where Nigeria takes center stage in an extraordinary attempt to break a
        Guinness World Record in the game of pool. Set against the vibrant
        backdrop of Silverbird Galleria, this event showcases one man, one
        table, and one historic feat that will captivate both live and global
        audiences. 
      </p>
    </ImgWithTextEqual>
  );
}
