import { GUESTS as guests } from "../helpers/object";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../reusable-components/Button";
import "swiper/css";
import "./styles/Guests.scss";

export default function Guests() {
  const renderGuests = guests.map((guest, index) => {
    return (
      <SwiperSlide key={index}>
        <div className="guests-container">
          <div className="guests-container__img">
            <img src={guest.image} alt="guest__image" />
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
    <section className="guests">
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
        slidesPerView={3.5}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
        }}
        spaceBetween={24}
        className="mySwiper guests-wrapper"
      >
        {renderGuests}
      </Swiper>
    </section>
  );
}
