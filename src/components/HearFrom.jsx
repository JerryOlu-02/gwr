import Button from "../reusable-components/Button";
import Video from "../reusable-components/Video";
import "./styles/HearFrom.scss";

export default function HearFrom() {
  return (
    <section className="hear-from">
      <aside className="hear-from__content">
        <div className="hear-from__text">
          <h3>hear from</h3>

          <h1>Scott</h1>

          <p>
            Get to know the man behind the mission! In this exclusive video,
            Scott Igbene shares his passion, journey, and what this Guinness
            World Record attempt means to him and the nation.
          </p>
        </div>

        <div className="hear-from__buttons">
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
      </aside>

      <aside className="hear-from__video">
        {/* <img alt="scott__talking" /> */}
        <Video />
      </aside>
    </section>
  );
}
