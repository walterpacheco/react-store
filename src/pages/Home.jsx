import { useState } from "react";

import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Button from "../components/Button/Button";
import ProductList from "../components/ProductList/ProductList";
import Cart from "../components/Cart/Cart";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

import { products } from "../data/products";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  return (
    <>
      <Header />

      <main>
        <div className="container mt-4">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
          />

          <div className="mt-4 d-flex gap-3 flex-wrap">
            <Button label="Ver productos" variant="primary" />
            <Button label="Ofertas" variant="secondary" />
            <Button label="Más información" variant="outline" />
          </div>
        </div>

        <div className="container-fluid px-4 mt-5">
          <div className="row">
            <div className="col-lg-9">
              <ProductList
                products={filteredProducts}
                onAddToCart={addToCart}
              />
            </div>

            <div className="col-lg-3">
              <Cart items={cartItems} onRemoveFromCart={removeFromCart} />
            </div>
          </div>
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
