import Button from "../reusable-components/Button";
import "./styles/DailyActivities.scss";
import { ACTIVITIES as activites } from "../helpers/object";

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

  return (
    <section className="daily-activities">
      <aside className="daily-activities__content">
        <div className="daily-activities__text">
          <h3>the daily</h3>

          <h1>activities</h1>

          <p>Check our activity line-up</p>
        </div>

        <div className="daily-activities__buttons">
          <Button>RESERVE A FREE SPOT</Button>
          <Button className="btn-outline">REGISTER TO PLAY</Button>
        </div>
      </aside>

      <aside className="daily-activities__info">
        <div className="daily-activities__info-wrapper">{renderActivities}</div>
      </aside>
    </section>
  );
}
