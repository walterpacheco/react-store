import "./Footer.css";
import { footerData } from "./Footer.data";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>{footerData.copyright}</p>
        <p>{footerData.description}</p>
      </div>
    </footer>
  );
}

export default Footer;