"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const servicesDropdown = [
  { label: "Cybersecurity", href: "/#services" },
  { label: "Cloud Solutions", href: "/#services" },
  { label: "IT Infrastructure", href: "/#services" },
  { label: "Microsoft Solutions", href: "/#services" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.navWrapper}>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Image src="/iamit-logo.png" alt="I AM IT Technologies" width={140} height={46} style={{ objectFit: "contain", maxHeight: "36px", width: "auto" }} priority />
          </Link>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <Link href="/" className={styles.link} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" className={styles.link} onClick={() => setMenuOpen(false)}>About</Link>
            
            <div 
              className={styles.dropdownWrap}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={styles.link}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services <ChevronDown size={14} className={servicesOpen ? styles.chevronUp : ""} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`${styles.dropdown} ${servicesOpen ? styles.dropdownActive : ""}`}>
                {servicesDropdown.map((s) => (
                  <Link 
                    key={s.label} 
                    href={s.href} 
                    className={styles.dropLink}
                    onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                  >
                    {s.label}
                  </Link>
                ))}
                <div className={styles.dropDivider}></div>
                <Link 
                  href="/#services" 
                  className={styles.dropLinkAll}
                  onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                >
                  View All Services →
                </Link>
              </div>
            </div>

            <Link href="/#why-us" className={styles.link} onClick={() => setMenuOpen(false)}>Why Us</Link>
            
            {/* Mobile Contact Button */}
            <div className={styles.mobileContact}>
              <Link href="/#contact" className="btn-primary" onClick={() => setMenuOpen(false)}>
                Get in Touch
              </Link>
            </div>
          </nav>

          <div className={styles.rightSide}>
            <div className={styles.desktopContact}>
              <Link href="/#contact" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}>
                Get in Touch
              </Link>
            </div>

            <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={24} color="var(--text-primary)" /> : <Menu size={24} color="var(--text-primary)" />}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
