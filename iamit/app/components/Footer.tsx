import Link from "next/link";
import styles from "./Footer.module.css";

const services = [
  "Cybersecurity", "Cloud Solutions", "IT Infrastructure",
  "Microsoft Solutions", "Networking & NGN", "Managed Services",
];

const offices = [
  { city: "Hyderabad", label: "HQ – India" },
  { city: "Dubai", label: "Regional HQ – UAE" },
  { city: "Doha", label: "Qatar" },
  { city: "Muscat", label: "Oman" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <div className={styles.logoText}>I AM IT</div>
          <p className={styles.tagline}>
            Delivering end-to-end IT solutions with global expertise and local commitment.
          </p>
          <div className={styles.offices}>
            {offices.map((o) => (
              <span key={o.city} className={styles.office}>
                <span className={styles.dot}></span>
                {o.city} <em>{o.label}</em>
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className={styles.colTitle}>Services</p>
          <ul className={styles.list}>
            {services.map((s) => (
              <li key={s}><Link href="/#services" className={styles.footLink}>{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Company</p>
          <ul className={styles.list}>
            <li><Link href="/" className={styles.footLink}>Home</Link></li>
            <li><Link href="/about" className={styles.footLink}>About Us</Link></li>
            <li><Link href="/#why-us" className={styles.footLink}>Why Choose Us</Link></li>
            <li><Link href="/#contact" className={styles.footLink}>Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Contact</p>
          <p className={styles.contactLine}>info@iamit.com</p>
          <p className={styles.contactLine}>+91 40 0000 0000</p>
          <Link href="/#contact" className="btn-primary" style={{ marginTop: "1.25rem", fontSize: "0.85rem" }}>
            Get in Touch
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>© {new Date().getFullYear()} I AM IT Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
