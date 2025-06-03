import "./styles/StickySection.scss";

export default function StickySection({
  ref,
  sectionClassName,
  wrapperClassName,
  rightJsx,
  h3,
  h1,
  p,
  btnJsx,
}) {
  return (
    <section ref={ref} className={`sticky-section ${sectionClassName}`}>
      <aside className="sticky-section__content">
        <div className="sticky-section__text">
          {h3 && <h3>{h3}</h3>}

          {h1 && <h1>{h1}</h1>}

          {p && <p>{p}</p>}
        </div>

        {btnJsx && <div className="sticky-section__buttons">{btnJsx}</div>}
      </aside>

      <aside className="sticky-section__info">
        <div className={`sticky-section__info-wrapper ${wrapperClassName}`}>
          {rightJsx}
        </div>
      </aside>
    </section>
  );
}
