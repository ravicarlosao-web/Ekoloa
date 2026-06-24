import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";

// Partner logos — icon + name, repeated to fill 5×3 grid (15 cells)
// Only row 2 (index 5–9) shows logos; rows 1 and 3 are empty.
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
        <path d="M10 10 m-2.5 0 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0" fill="#111111" />
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

function GridCell({
  children,
}: {
  children?: React.ReactNode;
}) {
  const cellRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cellRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(245,166,35,0.25) 0%, transparent 70%)`;
    el.style.outline = "1px solid #F5A623";
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cellRef.current;
    if (!el) return;
    el.style.background = "transparent";
    el.style.outline = "none";
  }, []);

  return (
    <div
      ref={cellRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        height: 160,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "1px solid #DDDDDD",
        borderBottom: "1px solid #DDDDDD",
        transition: "background 0.3s ease, outline 0.3s ease",
        cursor: "default",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
}

export function Partners() {
  return (
    <section style={{ background: "#EFEFEF", paddingTop: 96 }}>
      {/* ── Header ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", paddingLeft: 80, paddingRight: 80, marginBottom: 60 }}
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

      {/* ── 5×3 grid ────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          borderTop: "1px solid #DDDDDD",
          borderLeft: "1px solid #DDDDDD",
          width: "100%",
        }}
      >
        {/* Row 1 — empty */}
        {Array.from({ length: 5 }).map((_, i) => (
          <GridCell key={`r1-${i}`} />
        ))}

        {/* Row 2 — logos */}
        {PARTNERS.map((p, i) => (
          <GridCell key={`r2-${i}`}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {p.icon}
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#111111",
                  letterSpacing: "-0.01em",
                  fontFamily: "'DM Sans', 'Inter', sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                {p.name}
              </span>
            </div>
          </GridCell>
        ))}

        {/* Row 3 — empty */}
        {Array.from({ length: 5 }).map((_, i) => (
          <GridCell key={`r3-${i}`} />
        ))}
      </motion.div>
    </section>
  );
}
