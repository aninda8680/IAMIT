import Link from "next/link";
import styles from "./About.module.css";
import { Building2, ShieldCheck, TrendingUp, Settings } from "lucide-react";

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="label">IT & Cybersecurity Solutions Provider</span>
            <div className="divider"></div>
            <h2 className="section-title">
              Powering Businesses<br />with Intelligent IT
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Founded in 2019 and headquartered in Hyderabad, India, I AM IT Technologies is a global IT solutions provider delivering end-to-end services across cybersecurity, cloud, infrastructure, digital transformation, and consulting.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
              With a strong international presence — including our regional HQ in Dubai and branches in Qatar and Oman — we empower businesses to innovate securely in an ever-evolving digital landscape.
            </p>
            <Link href="/about" className="btn-outline">Learn More About Us →</Link>
          </div>

          <div className={styles.right}>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Building2 size={26} color="var(--accent)" /></div>
              <div>
                <strong>Founded 2019</strong>
                <p>Hyderabad, India — with global reach across UAE, Qatar & Oman</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><ShieldCheck size={26} color="var(--accent)" /></div>
              <div>
                <strong>CrowdStrike Advocate Partner</strong>
                <p>Recognized as Technology Advocate Partner across the META region</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><TrendingUp size={26} color="var(--accent)" /></div>
              <div>
                <strong>Double-digit YoY Growth</strong>
                <p>25+ enterprise, government & semi-government clients worldwide</p>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Settings size={26} color="var(--accent)" /></div>
              <div>
                <strong>24/7 GNOC & Hybrid SOC</strong>
                <p>In-house operations ensuring continuous monitoring and response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
