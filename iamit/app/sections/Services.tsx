import styles from "./Services.module.css";
import { Shield, Cloud, Server, LayoutDashboard, Globe, Rocket, Search, Wrench } from "lucide-react";

const services = [
  {
    icon: <Shield size={28} color="var(--accent)" />,
    title: "Cybersecurity",
    desc: "Comprehensive security services including endpoint protection, firewalls, email security, and compliance to defend against evolving cyber threats.",
  },
  {
    icon: <Cloud size={28} color="var(--accent)" />,
    title: "Cloud Solutions",
    desc: "Cloud migration, management, and security services designed to optimize performance and support digital transformation across Azure and M365.",
  },
  {
    icon: <Server size={28} color="var(--accent)" />,
    title: "IT Infrastructure",
    desc: "Robust deployment, monitoring, and infrastructure management services ensuring uptime, scalability, and operational efficiency.",
  },
  {
    icon: <LayoutDashboard size={28} color="var(--accent)" />,
    title: "Microsoft Solutions",
    desc: "Expert implementation of Active Directory, Exchange, Microsoft 365, and hybrid environments for secure enterprise collaboration.",
  },
  {
    icon: <Globe size={28} color="var(--accent)" />,
    title: "Networking & NGN",
    desc: "Advanced networking solutions including SD-WAN, SASE, and routing to enable fast, secure, and reliable connectivity.",
  },
  {
    icon: <Rocket size={28} color="var(--accent)" />,
    title: "Digital Transformation",
    desc: "Accelerate innovation with data analytics, automation, and customer experience solutions tailored to modern business models.",
  },
  {
    icon: <Search size={28} color="var(--accent)" />,
    title: "Security Intelligence",
    desc: "SIEM, SOAR, and identity threat detection tools integrated for real-time visibility, response, and risk management.",
  },
  {
    icon: <Wrench size={28} color="var(--accent)" />,
    title: "Managed Services",
    desc: "End-to-end managed IT services including GNOC, SOC, RIMM, AMC, and facility management to reduce downtime and boost performance.",
  },
];

export default function Services() {
  return (
    <section className={`section ${styles.services}`} id="services">
      <div className="container">
        <div className={styles.header}>
          <span className="label">Our Services & Solutions</span>
          <div className="divider"></div>
          <h2 className="section-title">End-to-End IT Capabilities</h2>
          <p className="section-subtitle">
            From foundational infrastructure to advanced cybersecurity — every service aligned to your business outcomes.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
