import { GUESTS as guests } from "../helpers/object";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../reusable-components/Button";
import "swiper/css";
import "./styles/Guests.scss";
import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin();

export default function Guests({ setRef }) {
  const ref = useRef();
  const swipeRef = useRef();

  useGSAP(() => {
    let sections = gsap.utils.toArray(".guests__box");

    gsap
      .to(".guests__box", {
        xPercent: -100 * (sections.length - 1.5),
        repeat: -1,
        duration: 40,
        ease: "linear",
      })
      .totalProgress(0);
  });

  useEffect(() => {
    setRef(ref);
  }, []);

  const renderGuests = guests.map((guest, index) => {
    return (
      <SwiperSlide className="guests__box" key={index}>
        <div className="guests-container">
          <div className="guests-container__img">
            <LazyLoadImage
              width={`100%`}
              height={`100%`}
              placeholderSrc={guest.imagePlaceholder}
              src={guest.image}
              alt="guest__image"
            />
          </div>

          <div className="guests-container__text">
            <h6>{guest.title}</h6>

            <p>{guest.description}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section ref={ref} className="guests">
      <aside className="guests-content">
        <div className="guests-content__text">
          <h1>guests</h1>

          <h3>IN ATTENDANCE</h3>

          <p>
            From celebrity appearances to renowned athletes and influential
            figures, this event brings together an exciting lineup of special
            guests 
          </p>
        </div>

        <div className="guests-content__btn">
          <Button link={"https://tix.africa/discover/poolfestng"}>
            RESERVE A FREE SPOT
          </Button>
        </div>
      </aside>

      <Swiper
        ref={swipeRef}
        breakpoints={{
          320: {
            slidesPerView: 2.5,
            spaceBetween: "12",
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: "12",
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: "24",
          },
          990: {
            slidesPerView: 3.5,
            spaceBetween: "24",
          },
        }}
        className="mySwiper guests-wrapper"
      >
        {renderGuests}
      </Swiper>
    </section>
  );
}
