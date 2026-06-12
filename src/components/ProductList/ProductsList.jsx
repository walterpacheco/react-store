import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

function ProductList({ products }) {
  return (
    <section className="product-list-section" id="productos">
      <div className="container">
        <div className="product-list-header">
          <span className="product-list-eyebrow">Catálogo</span>
          <h2 className="product-list-title">Productos destacados</h2>
          <p className="product-list-description">
            Explora una selección de productos tecnológicos para tu setup.
          </p>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-md-6 col-lg-3" key={product.id}>
              <ProductCard
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductList;