import Button from "../Button/Button";
import "./Contact.css";
import { contactData } from "./Contact.data";

function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-5">
            <span className="contact-eyebrow">
              {contactData.eyebrow}
            </span>

            <h2 className="contact-title">
              {contactData.title}
            </h2>

            <p className="contact-description">
              {contactData.description}
            </p>

            <div className="contact-info">
              <p>
                <strong>Email:</strong> {contactData.email}
              </p>

              <p>
                <strong>Teléfono:</strong> {contactData.phone}
              </p>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <form className="contact-form">
              <div className="mb-3">
                <label htmlFor="contact-name" className="form-label">
                  Nombre
                </label>

                <input
                  id="contact-name"
                  type="text"
                  className="form-control"
                  placeholder="Ingresa tu nombre"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contact-email" className="form-label">
                  Correo
                </label>

                <input
                  id="contact-email"
                  type="email"
                  className="form-control"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contact-message" className="form-label">
                  Mensaje
                </label>

                <textarea
                  id="contact-message"
                  className="form-control"
                  rows="4"
                  placeholder="Escribe tu mensaje"
                ></textarea>
              </div>

              <Button
                label={contactData.buttonLabel}
                variant="primary"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;