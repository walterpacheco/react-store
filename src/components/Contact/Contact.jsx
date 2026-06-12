import { useState } from "react";

import Button from "../Button/Button";
import "./Contact.css";
import { contactData } from "./Contact.data";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "El nombre es obligatorio.";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "El nombre solo debe contener letras.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "El correo es obligatorio.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Ingresa un correo válido.";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "El mensaje es obligatorio.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Mensaje enviado correctamente.");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  return (
    <section className="contact-section" id="contacto">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-5">
            <span className="contact-eyebrow">{contactData.eyebrow}</span>

            <h2 className="contact-title">{contactData.title}</h2>

            <p className="contact-description">{contactData.description}</p>

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
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="contact-name" className="form-label">
                  Nombre
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className={`form-control ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Ingresa tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <p className="invalid-feedback">{errors.name}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="contact-email" className="form-label">
                  Correo
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <p className="invalid-feedback">{errors.email}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="contact-message" className="form-label">
                  Mensaje
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  className={`form-control ${
                    errors.message ? "is-invalid" : ""
                  }`}
                  rows="4"
                  placeholder="Escribe tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

                {errors.message && (
                  <p className="invalid-feedback">{errors.message}</p>
                )}
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