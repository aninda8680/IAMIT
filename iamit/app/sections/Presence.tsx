import styles from "./Presence.module.css";

const offices = [
  { city: "Hyderabad", country: "India", role: "Global Headquarters", info: "Since 2019 — founding base of operations." },
  { city: "Dubai", country: "UAE", role: "Regional Headquarters", info: "Middle East hub opened in 2022." },
  { city: "Doha", country: "Qatar", role: "Branch Office", info: "Serving enterprise clients across Qatar." },
  { city: "Muscat", country: "Oman", role: "Branch Office", info: "Supporting Oman market operations." },
];

const frameworks = ["ISO 27001", "NIST CSF", "GDPR", "PCI-DSS", "SOC 2", "CIS Controls"];

export default function Presence() {
  return (
    <section className={`section ${styles.section}`} id="presence">
      <div className="container">
        <div className={styles.header}>
          <span className="label">We&apos;re Present Globally</span>
          <div className="divider"></div>
          <h2 className="section-title">Four Countries. One Standard.</h2>
          <p className="section-subtitle">
            Global reach with on-the-ground presence — we deliver consistent, high-quality IT solutions wherever you operate.
          </p>
        </div>

        <div className={styles.offices}>
          {offices.map((o) => (
            <div key={o.city} className={styles.officeCard}>
              <div className={styles.dot}></div>
              <div className={styles.officeCity}>{o.city}</div>
              <div className={styles.officeCountry}>{o.country}</div>
              <div className={styles.officeRole}>{o.role}</div>
              <p className={styles.officeInfo}>{o.info}</p>
            </div>
          ))}
        </div>

        <div className={styles.frameworks}>
          <p className={styles.fwLabel}>Security & Compliance Frameworks We Support</p>
          <div className={styles.fwGrid}>
            {frameworks.map((f) => (
              <div key={f} className={styles.fwTag}>{f}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
