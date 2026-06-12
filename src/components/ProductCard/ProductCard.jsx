import Button from "../Button/Button";
import "./ProductCard.css";
import { productCardData } from "./ProductCard.data";

function ProductCard({
  id,
  name,
  price,
  category,
  image,
  onAddToCart,
}) {
  function handleAddToCart() {
    onAddToCart({
      id,
      name,
      price,
      category,
      image,
    });
  }

  return (
    <article className="product-card card h-100">
      <img
        src={image}
        alt={name}
        className="card-img-top product-card__image"
      />

      <div className="card-body product-card__body">
        <span className="product-card__category">{category}</span>

        <h3 className="product-card__title">{name}</h3>

        <p className="product-card__price">
          ${price.toLocaleString("es-CL")}
        </p>

        <Button
          label={productCardData.buttonLabel}
          variant="primary"
          onClick={handleAddToCart}
        />
      </div>
    </article>
  );
}

export default ProductCard;