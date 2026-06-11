import "./Header.css";
import { headerData } from "./header.data";

function Header() {
  return (
    <header className="header">
      <h1>{headerData.logo}</h1>
      <nav>
        {headerData.links.map((link) => (
          <a key={link.id} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;