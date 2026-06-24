import React from "react";
import { motion } from "framer-motion";

const SECTION_BG = "#EFEFEF";

const PARTNERS = [
  {
    name: "Eightball",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="9" stroke="#111111" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" fill="#111111" />
      </svg>
    ),
  },
  {
    name: "Codecraft_",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2" y="5" width="7" height="7" fill="#111111" />
        <rect x="11" y="8" width="7" height="7" fill="#111111" />
      </svg>
    ),
  },
  {
    name: "CoreOS",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="9" stroke="#111111" strokeWidth="1.5" />
        <path d="M10 4 A6 6 0 0 1 16 10" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="10" r="2.5" fill="#111111" />
      </svg>
    ),
  },
  {
    name: "Eightball",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="9" stroke="#111111" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" fill="#111111" />
      </svg>
    ),
  },
  {
    name: "Codecraft_",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="2" y="5" width="7" height="7" fill="#111111" />
        <rect x="11" y="8" width="7" height="7" fill="#111111" />
      </svg>
    ),
  },
];

export function Partners() {
  return (
    <section style={{ background: SECTION_BG, paddingTop: 96, paddingBottom: 96 }}>
      {/* ── Header ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          paddingLeft: 80,
          paddingRight: 80,
          marginBottom: 60,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#111111",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          [03] OUR PARTNERS
        </div>
        <h2
          style={{
            fontSize: "clamp(32px, 3.8vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#111111",
            letterSpacing: "-0.01em",
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
          We collaborate with trusted partners to develop high-quality projects
          that are built to last.
        </h2>
      </motion.div>

      {/* ── Logos row ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 64,
          flexWrap: "wrap",
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        {PARTNERS.map((p, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              opacity: 0.85,
              transition: "opacity 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
          >
            {p.icon}
            <span
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: "#111111",
                fontFamily: "'DM Sans', 'Inter', sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {p.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
