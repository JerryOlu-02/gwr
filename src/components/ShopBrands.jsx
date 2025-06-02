import Button from "../reusable-components/Button";
import "./styles/ShopBrands.scss";
import { PRODUCTS as products } from "../helpers/object";

export default function ShopBrands() {
  const renderProducts = products.map((product, index) => {
    return (
      <div key={index} className="products-container">
        <div className="product__img">
          <img src={product.image} alt="product__image" />
        </div>

        <div className="products__desc">
          <p>{product.title}</p>

          <h6>{product.price}</h6>
        </div>
      </div>
    );
  });

  return (
    <section className="shop-brands">
      <aside className="shop-brands__header">
        <h3>
          shop the <span>dunkit</span> &
        </h3>

        <h3>
          <span>true patriot </span>brands
        </h3>
      </aside>

      <aside className="shop-brands__products">
        <div className="products-wrapper">{renderProducts}</div>

        <Button>VIEW WEBSITE</Button>
      </aside>
    </section>
  );
}
