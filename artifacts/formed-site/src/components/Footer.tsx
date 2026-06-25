import { useState } from "react";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        fontSize: 18,
        fontWeight: 400,
        color: hovered ? "#F5A623" : "#ffffff",
        lineHeight: 2.2,
        textDecoration: "none",
        transition: "color 0.2s ease",
        fontFamily: "'DM Sans','Inter',sans-serif",
      }}
    >
      {children}
    </a>
  );
}

function BottomLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: 12,
        color: hovered ? "#ffffff" : "rgba(255,255,255,0.45)",
        textDecoration: "none",
        transition: "color 0.2s ease",
        fontFamily: "'DM Sans','Inter',sans-serif",
      }}
    >
      {children}
    </a>
  );
}

const colLabel: React.CSSProperties = {
  fontSize: 10,
  letterSpacing: "0.15em",
  color: "rgba(255,255,255,0.45)",
  textTransform: "uppercase",
  marginBottom: 24,
  fontFamily: "'DM Sans','Inter',sans-serif",
  fontWeight: 400,
};

export function Footer() {
  return (
    <footer style={{ background: "#0A0A0A", width: "100%" }}>
      {/* ── Upper zone ─────────────────────────────────────────── */}
      <div
        style={{
          padding: "80px 80px 60px 80px",
          display: "flex",
          gap: 48,
          alignItems: "flex-start",
        }}
      >
        {/* Left block — logo + address */}
        <div style={{ flex: "0 0 30%", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 260 }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "'DM Sans','Inter',sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            FORMED ®
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              fontWeight: 400,
              fontFamily: "'DM Sans','Inter',sans-serif",
            }}
          >
            128 Piccadilly,<br />
            London W1J 7PY,<br />
            United Kingdom
          </div>
        </div>

        {/* Right block — 3-column grid */}
        <div
          style={{
            flex: "1 1 70%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* SOCIAL */}
          <div
            style={{
              padding: 32,
              borderRight: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={colLabel}>SOCIAL</div>
            <NavLink href="#">Instagram</NavLink>
            <NavLink href="#">Twitter</NavLink>
            <NavLink href="#">LinkedIn</NavLink>
            <NavLink href="#">TikTok</NavLink>
          </div>

          {/* QUICK LINKS */}
          <div
            style={{
              padding: 32,
              borderRight: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div style={colLabel}>QUICK LINKS</div>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Projects</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>

          {/* CONTACT */}
          <div style={{ padding: 32 }}>
            <div style={colLabel}>CONTACT</div>
            <NavLink href="mailto:hello@formed.com">hello@formed.com</NavLink>
            <NavLink href="tel:+13055550145">(305) 555-0145</NavLink>
          </div>
        </div>
      </div>

      {/* ── Lower zone ─────────────────────────────────────────── */}
      <div style={{ height: 1, background: "rgba(255,255,255,0.12)", marginLeft: 80, marginRight: 80 }} />
      <div
        style={{
          padding: "24px 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        {/* Centre — copyright */}
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            fontFamily: "'DM Sans','Inter',sans-serif",
          }}
        >
          © 2026 Formed. All rights reserved.
        </span>

        {/* Right — legal links */}
        <div style={{ display: "flex", gap: 32 }}>
          <BottomLink href="#">Privacy &amp; cookies</BottomLink>
          <BottomLink href="#">Terms &amp; conditions</BottomLink>
        </div>
      </div>
    </footer>
  );
}
