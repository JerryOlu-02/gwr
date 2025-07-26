import "./styles/MeetChallenger.scss";
import ChallengerImg from "../assets/images/challenger-img.jpg";
import ChallengerImgClear from "../assets/images/challenger-img-clear.jpg";
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

      <h6>SHEHU BAMIDELE</h6>

      <p>
        <strong>I’m Shehu Bamidele</strong>, and I’ve been passionate about pool
        since I was 13. Now, with the incredible support of{" "}
        <strong>DUNKIT</strong> and <strong>TRUE PATRIOT</strong> clothing
        lines;{" "}
        <strong>
          Radisson BLU Hotel, Lagos Ikeja; Johnnie Walker; SNOOKER Z; Oxford
          Blue Limited
        </strong>
        ; and the <strong>CHRONE Influitive Company</strong>, I’m preparing to
        make history.
        <br />
        <br />
        This September, at the <strong>Silverbird Galleria</strong>, I will take
        on <strong>two Guinness World Record attempts</strong>:
        <br />
        <strong>• The Longest Individual Pool Marathon</strong> — playing
        non-stop for five full days
        <br />
        <strong>• The Most Opponents Played in 8-Ball Pool</strong> — facing
        hundreds of unique challengers from across the country
        <br />
        <br />
        Both attempts will be conducted under strict adherence to{" "}
        <strong>Guinness World Record guidelines</strong>, with official
        verification and documentation at every stage.
        <br />
        <br />
        This is the most demanding test of skill, endurance, and mental focus
        I’ve ever faced — but I’m ready. I’ve trained hard. I’m locked in. And
        I’m doing this not just for myself, but to inspire a new generation of
        Nigerian athletes and dreamers.
        <br />
        <strong>Let’s make history — together.</strong>
      </p>
    </ImgWithTextEqual>
  );
}
