import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Button from "../components/Button/Button";

function Home() {
  return (
    <>
      <Header />

      <main className="container mt-4">
        <SearchBar />

        <div className="mt-4 d-flex gap-3">
          <Button
            label="Ver productos"
            variant="primary"
          />

          <Button
            label="Ofertas"
            variant="secondary"
          />

          <Button
            label="Más información"
            variant="outline"
          />
        </div>
      </main>
    </>
  );
}

export default Home;