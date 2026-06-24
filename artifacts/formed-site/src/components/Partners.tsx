import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";

const SECTION_BG = "#EFEFEF";
const LINE = "0.5px solid rgba(160,160,160,0.45)";

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

function GridCell({
  logo,
  isLastCol,
  isLastRow,
}: {
  logo?: (typeof PARTNERS)[number];
  isLastCol?: boolean;
  isLastRow?: boolean;
}) {
  const cellRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cellRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(245,166,35,0.22) 0%, ${SECTION_BG} 70%)`;
      el.style.boxShadow = "inset 0 0 0 1px #F5A623";
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    const el = cellRef.current;
    if (!el) return;
    el.style.background = SECTION_BG;
    el.style.boxShadow = "none";
  }, []);

  return (
    <div
      ref={cellRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        height: 160,
        background: SECTION_BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        /* Right border on every cell; bottom border on every cell.
           Container supplies the top and left outer edges.
           Last column gets no extra right (container right covers it via border).
           Last row gets no extra bottom (container bottom covers it). */
        borderRight: isLastCol ? "none" : LINE,
        borderBottom: isLastRow ? "none" : LINE,
        transition: "background 0.25s ease",
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

const COLS = 7;          // 5 logo cols + 1 empty col each side
const LOGO_COLS = [1, 2, 3, 4, 5]; // inner 5 columns get logos
const ROWS = 3;
const LOGO_ROW = 1; // 0-indexed — middle row

export function Partners() {
  return (
    <section style={{ background: SECTION_BG, paddingTop: 96 }}>
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

      {/* ── Grid: outer border closes all 4 edges;
              inner lines are border-right / border-bottom on each cell ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {Array.from({ length: ROWS }).flatMap((_, row) =>
          Array.from({ length: COLS }).map((_, col) => {
            const logoIndex = LOGO_COLS.indexOf(col);
            const logo =
              row === LOGO_ROW && logoIndex !== -1
                ? PARTNERS[logoIndex % PARTNERS.length]
                : undefined;
            return (
              <GridCell
                key={`${row}-${col}`}
                logo={logo}
                isLastCol={col === COLS - 1}
                isLastRow={row === ROWS - 1}
              />
            );
          })
        )}
      </motion.div>
    </section>
  );
}
