import "./styles/Faqs.scss";
import { ReactComponent as Plus } from "../assets/svg/Plus.svg";
import { FAQS as faqs } from "../helpers/object";
import { useState } from "react";
import StickySection from "../reusable-components/StickySection";

export default function Faqs() {
  const renderFaqs = faqs.map((faq, index) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleFaQVisibility = function () {
      setIsOpen((open) => (open ? false : !open));
    };

    return (
      <div key={index} className="faq-container">
        <div className="faq-container__content">
          <h5>{faq.question}</h5>

          <p className={`faq-answer ${isOpen && "open"}`}>{faq.answer}</p>
        </div>

        <div onClick={handleFaQVisibility} className="faq-btn">
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
      sectionClassName={"faqs"}
      rightJsx={renderFaqs}
      h1={h1}
      h3={h3}
      p={p}
    />
  );
}
