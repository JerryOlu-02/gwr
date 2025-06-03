import "swiper/css";
import "./styles/Partners.scss";
import { ReactComponent as CueSportsLogo } from "../assets/svg/cue-sports-logo.svg";
import { ReactComponent as DunkitLogo } from "../assets/svg/dunkit-logo.svg";
import { ReactComponent as RhythmLogo } from "../assets/svg/rhythm-logo.svg";
import { ReactComponent as PatriotLogo } from "../assets/svg/patriot-logo.svg";
import { ReactComponent as ArrowLeft } from "../assets/svg/arrow-back.svg";
import { ReactComponent as ArrowRight } from "../assets/svg/arrow-front.svg";
import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Partners() {
  const swiperRef = useRef(null);
  const swiper = useSwiper();

  return (
    <section className="partners">
      <aside className="partners-header">
        <p>OUR PARTNERS</p>
      </aside>

      <aside className="partners-bottom">
        <div className="partners-bottom__text">
          <h5>
            WE WORK WITH ONLY THE
            <br /> BEST
          </h5>

          <div className="partners-navigation">
            <div onClick={() => swiperRef.current.slidePrev()}>
              <ArrowLeft />
            </div>

            <div onClick={() => swiperRef.current.slideNext()}>
              <ArrowRight />
            </div>
          </div>
        </div>

        <Swiper
          grabCursor={true}
          // slidesPerView={4.5}
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          className="mySwiper partners-content"
        >
          <SwiperSlide className="partners-container">
            <CueSportsLogo />
          </SwiperSlide>

          <SwiperSlide className="partners-container">
            <DunkitLogo />
          </SwiperSlide>

          <SwiperSlide className="partners-container">
            <RhythmLogo />
          </SwiperSlide>

          <SwiperSlide className="partners-container">
            <PatriotLogo />
          </SwiperSlide>
        </Swiper>
      </aside>
    </section>
  );
}
