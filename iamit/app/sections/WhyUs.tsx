import styles from "./WhyUs.module.css";
import { Activity, Handshake, Trophy, BarChart3, Users, Earth } from "lucide-react";

const reasons = [
  { icon: <Activity size={26} color="var(--accent)" />, title: "24/7 In-house GNOC & Hybrid SOC", desc: "Continuous network and security operations with real-time monitoring, detection, and incident response." },
  { icon: <Handshake size={26} color="var(--accent)" />, title: "Strategic OEM Alliances", desc: "Partnerships with industry-leading technology vendors ensuring access to best-in-class solutions." },
  { icon: <Trophy size={26} color="var(--accent)" />, title: "CrowdStrike Advocate Partner – META", desc: "Recognized expertise in advanced endpoint security across the Middle East, Turkey, and Africa region." },
  { icon: <BarChart3 size={26} color="var(--accent)" />, title: "Double-digit YoY Growth", desc: "Consistent growth driven by client trust, delivery excellence, and expanding enterprise relationships." },
  { icon: <Users size={26} color="var(--accent)" />, title: "Domain-Specific SMEs", desc: "Our team of subject-matter experts brings deep specialization across every technology domain we serve." },
  { icon: <Earth size={26} color="var(--accent)" />, title: "Multi-Country Presence", desc: "On-the-ground support across India, UAE, Qatar, and Oman ensuring local responsiveness at global standards." },
];

export default function WhyUs() {
  return (
    <section className={`section ${styles.section}`} id="why-us">
      <div className="container">
        <div className={styles.header}>
          <span className="label">Why Choose Us?</span>
          <div className="divider"></div>
          <h2 className="section-title">Built for Long-Term Value</h2>
          <p className="section-subtitle">
            We don&apos;t just deliver services — we build long-term value. Our expertise, strategic alliances, and customer-first approach ensure technology always works for your business.
          </p>
        </div>
        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <div className={styles.icon}>{r.icon}</div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
