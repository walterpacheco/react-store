import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Button from "../components/Button/Button";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductList from "../components/ProductList/ProductList";
import { products } from "../data/products";

function Home() {
  return (
    <>
      <Header />

      <main className="container mt-4">
        <SearchBar />

        <div className="mt-4 d-flex gap-3">
          <Button label="Ver productos" variant="primary" />

          <Button label="Ofertas" variant="secondary" />

          <Button label="Más información" variant="outline" />
        </div>
        <div className="mt-5">
          <ProductCard
            name="Notebook Gamer"
            price={799990}
            category="Computación"
            image="https://picsum.photos/id/180/600/400"
          />
        </div>
        <ProductList products={products} />
      </main>
    </>
  );
}

export default Home;
