import { useEffect, useState } from "react";

import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Button from "../components/Button/Button";
import ProductList from "../components/ProductList/ProductList";
import Cart from "../components/Cart/Cart";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showOnlyOffers, setShowOnlyOffers] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
          throw new Error("No se pudieron cargar los productos.");
        }

        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesOffer = showOnlyOffers
      ? product.discountPercentage > 10
      : true;

    return matchesSearch && matchesOffer;
  });

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
    setShowOnlyOffers(false);
  }

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }
  function scrollToProducts() {
    setShowOnlyOffers(false);
  
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function showOffers() {
  setShowOnlyOffers(true);
  setSearchTerm("");

  document.getElementById("productos")?.scrollIntoView({
    behavior: "smooth",
  });
}

  function scrollToContact() {
    document.getElementById("contacto")?.scrollIntoView({
      behavior: "smooth",
    });
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
            <Button
              label="Ver productos"
              variant="primary"
              onClick={scrollToProducts}
            />

            <Button label="Ofertas" variant="secondary" onClick={showOffers} />

            <Button
              label="Más información"
              variant="outline"
              onClick={scrollToContact}
            />
          </div>
        </div>

        {loading && <Loader />}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
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
        )}
      </main>

      <Contact />
      <Footer />
    </>
  );
}

export default Home;
