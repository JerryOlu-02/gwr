import "./styles/MeetChallenger.scss";
import ChallengerImg from "../assets/images/challenger-img.png";

export default function MeetChallenger() {
  return (
    <section className="meet-challenger">
      <aside className="meet-challenger__content">
        <div className="meet-challenger__text">
          <h3>meet the</h3>
          <h5>challenger</h5>

          <h6>SCOTT IGEBENE</h6>

          <p>
            The Guinness World Record Pool Event is a groundbreaking celebration
            where Nigeria takes center stage in an extraordinary attempt to
            break a Guinness World Record in the game of pool. Set against the
            vibrant backdrop of Silverbird Galleria, this event showcases one
            man, one table, and one historic feat that will captivate both live
            and global audiences. 
          </p>
        </div>
      </aside>

      <aside className="meet-challenger__image">
        <img src={ChallengerImg} alt="challenger__Image" />
      </aside>
    </section>
  );
}
