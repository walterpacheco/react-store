import "./ErrorMessage.css";
import { errorMessageData } from "./ErrorMessage.data";

function ErrorMessage({ message }) {
  return (
    <section className="error-message-section">
      <div className="alert alert-danger" role="alert">
        <strong>{errorMessageData.title}:</strong> {message}
      </div>
    </section>
  );
}

export default ErrorMessage;