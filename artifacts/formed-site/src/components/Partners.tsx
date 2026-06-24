import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";

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

const CELL_BORDER = "0.5px solid rgba(180,180,180,0.4)";

function GridCell({
  logo,
}: {
  logo?: (typeof PARTNERS)[number];
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
        borderRight: CELL_BORDER,
        borderBottom: CELL_BORDER,
        transition: "background 0.3s ease, outline 0.3s ease",
        cursor: "default",
        boxSizing: "border-box",
      }}
    >
      {logo && (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {logo.icon}
          <span
            style={{
              fontSize: 17,
              fontWeight: 500,
              color: "#111111",
              fontFamily: "'DM Sans', 'Inter', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {logo.name}
          </span>
        </div>
      )}
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
          gridTemplateRows: "repeat(3, 1fr)",
          borderTop: CELL_BORDER,
          borderLeft: CELL_BORDER,
          width: "100%",
        }}
      >
        {/* Rows 1 & 2 — empty (10 cells) */}
        {Array.from({ length: 10 }).map((_, i) => (
          <GridCell key={`empty-${i}`} />
        ))}

        {/* Row 3 — logos (5 cells) */}
        {PARTNERS.map((p, i) => (
          <GridCell key={`logo-${i}`} logo={p} />
        ))}
      </motion.div>
    </section>
  );
}
