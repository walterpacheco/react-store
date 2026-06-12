import "./Header.css";
import { headerData } from "./Header.data";

function Header() {
  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          {headerData.logo}
        </a>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
           
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav ms-auto">
                {headerData.links.map((link) => (
                  <a
                    key={link.id}
                    className="nav-link nav-spacing"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
