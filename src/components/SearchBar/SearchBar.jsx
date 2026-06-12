import "./SearchBar.css";
import { searchBarData } from "./SearchBar.data";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <section className="search-bar-section">
      <div className="container">
        <label htmlFor="product-search" className="form-label search-label">
          {searchBarData.label}
        </label>

        <input
          id="product-search"
          type="text"
          className="form-control search-input"
          placeholder={searchBarData.placeholder}
          value={searchTerm}
          onChange={onSearchChange}
        />

        {searchTerm && (
          <p className="search-result-text">
            Buscando: <strong>{searchTerm}</strong>
          </p>
        )}
      </div>
    </section>
  );
}

export default SearchBar;