import "./styles/ImgWithTextEqual.scss";

export default function ImgWithTextEqual({
  className,
  textClassname,
  img,
  children,
}) {
  return (
    <section className={`img-withText ${className}`}>
      <aside className="img-withText__content">
        <div className={`img-withText__text ${textClassname}`}>{children}</div>
      </aside>

      <aside className="img-withText__image">
        <img src={img} alt="challenger__Image" />
      </aside>
    </section>
  );
}
