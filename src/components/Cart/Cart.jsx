import "./Cart.css";
import { cartData } from "./Cart.data";

function Cart({ items, onRemoveFromCart }) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="cart-section">
      <div className="container">
        <h2>{cartData.title}</h2>

        {items.length === 0 ? (
          <p className="cart-empty">{cartData.emptyMessage}</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <span>{item.name}</span>
                  <span>${item.price.toLocaleString("es-CL")}</span>

                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-total">
              <strong>Total:</strong>
              <span>${total.toLocaleString("es-CL")}</span>
            </div>

            <button type="button" className="btn btn-success mt-3">
              {cartData.payButton}
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Cart;