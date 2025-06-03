import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles/ImgWithTextEqual.scss";

export default function ImgWithTextEqual({
  ref,
  className,
  textClassname,
  img,
  placeholderImg,
  children,
}) {
  return (
    <section ref={ref} className={`img-withText ${className}`}>
      <aside className="img-withText__content">
        <div className={`img-withText__text ${textClassname}`}>{children}</div>
      </aside>

      <aside className="img-withText__image">
        <LazyLoadImage
          placeholderSrc={placeholderImg}
          src={img}
          width={`100%`}
          height={`100%`}
          alt="challenger__Image"
        />
      </aside>
    </section>
  );
}
