"use client";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="label">Get in Touch</span>
            <div className="divider"></div>
            <h2 className="section-title">Let&apos;s Talk About<br />Your IT Goals</h2>
            <p className="section-subtitle">
              Whether you&apos;re looking to strengthen your cybersecurity posture, migrate to the cloud, or modernise your infrastructure — our team is ready to help.
            </p>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <Mail size={18} color="var(--accent)" />
                <span>info@iamit.com</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={18} color="var(--accent)" />
                <span>+91 40 0000 0000</span>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={18} color="var(--accent)" />
                <span>Hyderabad · Dubai · Doha · Muscat</span>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-name">Full Name</label>
                <input id="contact-name" type="text" placeholder="John Smith" />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-company">Company</label>
                <input id="contact-company" type="text" placeholder="Acme Corp" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-email">Work Email</label>
              <input id="contact-email" type="email" placeholder="john@company.com" />
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-service">Area of Interest</label>
              <select id="contact-service">
                <option value="">Select a service…</option>
                <option>Cybersecurity</option>
                <option>Cloud Solutions</option>
                <option>IT Infrastructure</option>
                <option>Microsoft Solutions</option>
                <option>Managed Services</option>
                <option>Digital Transformation</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" rows={4} placeholder="Tell us about your project or challenge…"></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
