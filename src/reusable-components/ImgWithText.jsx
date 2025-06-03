import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "./Button";
import "./styles/ImgWithText.scss";

export default function ImgWithText({
  ref,
  sectionClass,
  h3,
  h4,
  button,
  src,
  logo,
  btnClass,
}) {
  return (
    <section ref={ref} className={`imgText ${sectionClass}`}>
      <aside className="imgText-content">
        <div className="imgText-content__text">
          {logo && logo}

          {h4 && h4}

          {h3 && h3}

          <p className="content-text">
            Scott will be attempting not one, but two official Guinness World
            Records: playing pool for the longest continuous time as an
            individual, and playing against the most number of people in a
            single stretch of consecutive pool games. Each shot, each match,
            brings Nigeria one step closer to global recognition.
          </p>
        </div>

        <Button className={btnClass}>{button}</Button>
      </aside>

      <aside className="imgText-image">
        <LazyLoadImage src={src} alt="8-Ball__Image" />
      </aside>
    </section>
  );
}
