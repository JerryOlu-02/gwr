import Button from "../reusable-components/Button";
import "./styles/DailyActivities.scss";
import { ACTIVITIES as activites } from "../helpers/object";
import StickySection from "../reusable-components/StickySection";

export default function DailyActivities() {
  const renderActivities = activites.map((activity, index) => {
    return (
      <div key={index} className="daily-activities__info-container">
        <div className="activities-image">
          <img src={activity.image} alt="activities__image" />
        </div>

        <div className="activities-text">
          <h5>{activity.title}</h5>

          <p>{activity.description}</p>
        </div>
      </div>
    );
  });

  const h3 = "the daily";

  const h1 = "activities";

  const p = "Check our activity line-up";

  const btn = (
    <>
      <Button>RESERVE A FREE SPOT</Button>
      <Button className="btn-outline">REGISTER TO PLAY</Button>
    </>
  );

  return (
    <StickySection
      wrapperClassName={"daily-activities__info-wrapper "}
      rightJsx={renderActivities}
      h1={h1}
      h3={h3}
      p={p}
      btnJsx={btn}
    />
  );
}
