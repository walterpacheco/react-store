import "./Loader.css";
import { loaderData } from "./Loader.data";

function Loader() {
  return (
    <section className="loader-section">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">{loaderData.message}</span>
      </div>

      <p>{loaderData.message}</p>
    </section>
  );
}

export default Loader;