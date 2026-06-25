import { useState } from "react";
import { motion } from "framer-motion";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "block",
        fontSize: 18,
        fontWeight: 400,
        color: hovered ? "#E8401C" : "#ffffff",
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
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ flex: "0 0 30%", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 260 }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
              fontFamily: "'DM Sans','Inter',sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            EKOLOA ®
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
            Luanda, Angola
          </div>
        </motion.div>

        {/* Right block — 3-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            flex: "1 1 70%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            style={{ padding: 32, borderRight: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div style={colLabel}>SOCIAL</div>
            <NavLink href="https://www.instagram.com/ekoloa_mentoria_e_consultoria">Instagram</NavLink>
            <NavLink href="https://x.com/ekoloa_ao">X / Twitter</NavLink>
            <NavLink href="https://www.linkedin.com/in/ekoloa-mentoria-e-consultoria-163443274">LinkedIn</NavLink>
            <NavLink href="http://www.tiktok.com/@ekoloaoficial">TikTok</NavLink>
            <NavLink href="https://www.youtube.com/@ekoloa_mentoria_consultoria">YouTube</NavLink>
            <NavLink href="https://www.facebook.com/ekoloamentoriaconsultoria">Facebook</NavLink>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            style={{ padding: 32, borderRight: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div style={colLabel}>QUICK LINKS</div>
            <NavLink href="#">Sobre Nós</NavLink>
            <NavLink href="#">Metodologia</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavLink href="#">Contacto</NavLink>
            <NavLink href="#">Cooperação</NavLink>
            <NavLink href="#">Impacto Ekoloa</NavLink>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.38 }}
            style={{ padding: 32 }}
          >
            <div style={colLabel}>CONTACT</div>
            <NavLink href="mailto:geral@ekoloa.co.ao">geral@ekoloa.co.ao</NavLink>
            <NavLink href="tel:+244924975472">+244 924 975 472</NavLink>
          </motion.div>
        </motion.div>
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
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            fontFamily: "'DM Sans','Inter',sans-serif",
          }}
        >
          © 2026 Ekoloa. Todos os direitos reservados.
        </span>

        <div style={{ display: "flex", gap: 32 }}>
          <BottomLink href="#">Política de Privacidade</BottomLink>
          <BottomLink href="#">Termos de Utilização</BottomLink>
        </div>
      </div>
    </footer>
  );
}
