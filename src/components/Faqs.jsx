import "./styles/Faqs.scss";
import { ReactComponent as Plus } from "../assets/svg/Plus.svg";
import LinkComp from "../reusable-components/Link";
import { FAQS as faqs } from "../helpers/object";
import { useEffect, useRef, useState } from "react";
import StickySection from "../reusable-components/StickySection";

export default function Faqs({ setRef }) {
  const faqRef = useRef();

  useEffect(() => {
    setRef(faqRef);
  }, []);

  const renderFaqs = faqs.map((faq, index) => {
    const [isOpen, setIsOpen] = useState(false);

    if (index === 0 && !isOpen) setIsOpen(true);

    const handleFaQVisibility = function () {
      setIsOpen((open) => (open ? false : !open));
    };

    return (
      <div key={index} className="faq-container">
        <div className="faq-container__content">
          <h5>{faq.question}</h5>

          {faq.link ? (
            <LinkComp
              className={`faq-answer ${isOpen && "open"}`}
              textBefore={faq.textBefore}
              textAfter={faq.textAfter}
              url={faq.url}
            />
          ) : (
            <p className={`faq-answer ${isOpen && "open"}`}>{faq.answer}</p>
          )}
        </div>

        <div onClick={() => handleFaQVisibility()} className="faq-btn">
          <Plus />
        </div>
      </div>
    );
  });

  const h3 = "frequently asked";
  const h1 = "questions";
  const p = `Everything you need to know about attending, participating, or
        partnering with Nigeria’s boldest Guinness World Record Pool Event.`;

  return (
    <StickySection
      ref={faqRef}
      sectionClassName={"faqs"}
      rightJsx={renderFaqs}
      h1={h1}
      h3={h3}
      p={p}
    />
  );
}
