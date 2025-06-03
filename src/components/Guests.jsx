import { GUESTS as guests } from "../helpers/object";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Button from "../reusable-components/Button";
import "swiper/css";
import "./styles/Guests.scss";
import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Guests({ setRef }) {
  const ref = useRef();

  useEffect(() => {
    setRef(ref);
  }, []);

  const renderGuests = guests.map((guest, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="guests-container">
          <div className="guests-container__img">
            <LazyLoadImage
              width={400}
              height={500}
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
          <Button>RESERVE A FREE SPOT</Button>
        </div>
      </aside>

      <Swiper
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper guests-wrapper"
      >
        {renderGuests}
      </Swiper>
    </section>
  );
}
