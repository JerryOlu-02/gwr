import Button from "../reusable-components/Button";
import "./styles/ShopBrands.scss";
import { PRODUCTS as products } from "../helpers/object";
import { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ShopBrands({ setRef }) {
  const ref = useRef();

  useEffect(() => {
    setRef(ref);
  }, []);

  const renderProducts = products.map((product, index) => {
    return (
      <SwiperSlide key={index} className="mySwiper products-container">
        <div className="product__img">
          <a href="https://shopdunkit.com/" target="_blank" rel="noreferrer">
            <LazyLoadImage
              placeholderSrc={product.image}
              src={product.clearImage}
              width={`100%`}
              height={`100%`}
              alt="product__image"
            />
          </a>
        </div>

        <div className="products__desc">
          <a href="https://shopdunkit.com/" target="_blank" rel="noreferrer">
            {product.title}
          </a>

          {/* <h6>{product.price}</h6> */}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <section ref={ref} className="shop-brands">
      <aside className="shop-brands__header">
        <h3>
          shop the <span>dunkit</span> &
        </h3>

        <h3>
          <span>true patriot </span>brands
        </h3>
      </aside>

      <aside className="shop-brands__products">
        <Swiper
          className="products-wrapper"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: "27",
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: "27",
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: "16",
            },
            990: {
              slidesPerView: 3,
              spaceBetween: "24",
            },
          }}
        >
          {renderProducts}
        </Swiper>

        <Button link={"https://shopdunkit.com/"}>Shop Now</Button>
      </aside>
    </section>
  );
}
