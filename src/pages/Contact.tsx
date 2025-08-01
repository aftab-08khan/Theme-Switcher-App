import React, { useState } from "react";
import { useThemeStyles } from "../themes/useThemeStyles";
import type { ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const styles = useThemeStyles() ?? {};

  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    console.log(formData);

    setTimeout(() => {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.paragraph}>
        We'd love to hear from you! Fill out the form below and we'll get back
        to you as soon as possible.
      </p>

      <form className={styles.contactForm} onSubmit={handleForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleInput}
            className={styles.input}
            placeholder="Your name"
            name="name"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            name="email"
            required
            onChange={handleInput}
            className={styles.input}
            placeholder="you@example.com"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            required
            name="message"
            value={formData.message}
            onChange={handleInput}
            className={styles.textarea}
            placeholder="Your message..."
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
