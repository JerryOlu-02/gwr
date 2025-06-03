import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles/ImgWithTextEqual.scss";

export default function ImgWithTextEqual({
  ref,
  className,
  textClassname,
  img,
  children,
}) {
  return (
    <section ref={ref} className={`img-withText ${className}`}>
      <aside className="img-withText__content">
        <div className={`img-withText__text ${textClassname}`}>{children}</div>
      </aside>

      <aside className="img-withText__image">
        <LazyLoadImage src={img} alt="challenger__Image" />
      </aside>
    </section>
  );
}
