import { useEffect, useRef, useState } from "react";
import "./styles/Loader.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReactComponent as PooolfesSvg } from "../assets/svg/poolfest-svg.svg";

gsap.registerPlugin();

export default function Loader({ className }) {
  const container = useRef();
  const textContainer = useRef();

  const myArray = [
    "01",
    "04",
    "07",
    "09",
    13,
    15,
    19,
    10,
    25,
    30,
    35,
    37,
    40,
    43,
    46,
    48,
    50,
    68,
    72,
    75,
    80,
    84,
    87,
    90,
    92,
    98,
    99,
  ];

  useGSAP(
    () => {
      gsap
        .to(".span", {
          yPercent: -2600,
          repeat: 0,
          duration: 6,
          ease: "power1.inOut",
        })
        .totalProgress(0);
    },
    { scope: textContainer }
  );

  useGSAP(() => {
    gsap
      .timeline()
      .to(".loader", {
        width: 0,
        delay: 6,
        repeat: 0,
        duration: 3,
        ease: "power1.inOut",
      })
      .totalProgress(0);

    gsap
      .timeline()
      .to(".loader-svg, .loader-text", {
        opacity: 0,
        delay: 6,
        repeat: 0,
        duration: 2,
        ease: "power1.inOut",
      })
      .totalProgress(0);
  });

  return (
    <section ref={container} className={`loader ${className}`}>
      <div className="loader-svg">
        <PooolfesSvg />
      </div>

      <h2 ref={textContainer} className="loader-text">
        {myArray.map((i, index) => (
          <span className="span" key={index}>
            {i}
          </span>
        ))}
      </h2>
    </section>
  );
}
