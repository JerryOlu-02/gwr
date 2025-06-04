import "./styles/Footer.scss";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const container = useRef();
  const section = useRef();

  useGSAP(
    () => {
      gsap
        .to(".text", {
          xPercent: -100,
          repeat: -1,
          duration: 7,
          ease: "linear",
        })
        .totalProgress(0);
    },
    { scope: container }
  );

  // useGSAP(
  //   () => {
  //     gsap.to(".scrolling-text", {
  //       scrollTrigger: {
  //         trigger: ".scrolling-text",
  //         scrub: true,
  //         toggleActions: "restart pause resume pause",
  //       },
  //       y: -100,
  //       duration: 5,
  //     });
  //   },
  //   { scope: section }
  // );

  return (
    <section ref={section} className="footer">
      <h6>
        Don’t Miss Out on the <br />
        Experience
      </h6>

      <div className="footer-overlay"></div>

      <div ref={container} className="scrolling-text">
        <h2 className="text">
          POOL FEST NAIJA
          <span className="circle"></span>
        </h2>

        <h2 className="text">
          POOL FEST NAIJA
          <span className="circle"></span>
        </h2>

        <h2 className="text">
          POOL FEST NAIJA
          <span className="circle"></span>
        </h2>

        <h2 className="text">
          POOL FEST NAIJA
          <span className="circle"></span>
        </h2>

        <h2 className="text">
          POOL FEST NAIJA
          <span className="circle"></span>
        </h2>

        <h2 className="text">
          POOL FEST NAIJA
          <span className="circle"></span>
        </h2>
      </div>
    </section>
  );
}
