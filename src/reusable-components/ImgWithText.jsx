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
  srcPlaceholder,
  logo,
  btnClass,
  btnLink,
  text,
}) {
  return (
    <section ref={ref} className={`imgText ${sectionClass}`}>
      <aside className="imgText-content">
        <div className="imgText-content__text">
          {logo && logo}

          {h4 && h4}

          {h3 && h3}

          <p className="content-text">{text}</p>
        </div>

        <Button className={btnClass} link={btnLink}>
          {button}
        </Button>
      </aside>

      <aside className="imgText-image">
        <LazyLoadImage
          placeholderSrc={srcPlaceholder}
          src={src}
          width={`100%`}
          height={`100%`}
          alt="8-Ball__Image"
        />
      </aside>
    </section>
  );
}
