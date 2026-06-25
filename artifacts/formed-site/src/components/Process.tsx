import React from "react";
import { motion } from "framer-motion";
import processBgUrl from "@/assets/images/process-card.jpg";

export function Process() {
  return (
    <section
      className="w-full"
      style={{
        background: "#F0F0F0",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: 48,
        paddingBottom: 32,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* ── Section header ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          marginBottom: 28,
          paddingLeft: 80,
          paddingRight: 80,
          flexShrink: 0,
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "#111111",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          [02] A NOSSA METODOLOGIA
        </div>
        <h2
          style={{
            fontSize: "clamp(28px, 3vw, 48px)",
            fontWeight: 300,
            lineHeight: 1.2,
            color: "#111111",
            letterSpacing: "-0.01em",
            fontFamily: "'DM Sans', 'Inter', sans-serif",
            margin: 0,
          }}
        >
          Como trabalhamos consigo
        </h2>
      </motion.div>

      {/* ── Cards row — fills remaining height ──────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          width: "100%",
          flex: 1,
          minHeight: 0,
        }}
      >
        {/* ══ Card 1 — White ══════════════════════════════════ */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: 40 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 1, height: 24, background: "#F5A623" }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0 }}
            style={{
              flex: 1,
              background: "#FFFFFF",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 40px 40px",
              minHeight: 0,
            }}
          >
            <svg
              aria-hidden
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07, pointerEvents: "none" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="arch-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111111" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#arch-grid)" />
            </svg>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", color: "#111111", textTransform: "uppercase", marginBottom: 12 }}>
                STEP [01]
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 500, color: "#111111", lineHeight: 1.2, marginBottom: 12 }}>
                Diagnóstico Institucional
              </h3>
              <p style={{ fontSize: 13, fontWeight: 400, color: "#555555", lineHeight: 1.6, margin: 0 }}>
                Começamos por compreender a realidade da sua organização, identificar desafios estruturais e definir prioridades estratégicas com clareza e rigor técnico.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══ Card 2 — Dark / image ═══════════════════════════ */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: 0 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 1, height: 24, background: "#F5A623" }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              flex: 1,
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 40px 40px",
              backgroundImage: `url(${processBgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: 0,
            }}
          >
            <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.60)" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", color: "#ffffff", textTransform: "uppercase", marginBottom: 12 }}>
                STEP [02]
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 500, color: "#ffffff", lineHeight: 1.2, marginBottom: 12 }}>
                Cooperação & Implementação
              </h3>
              <p style={{ fontSize: 13, fontWeight: 400, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, margin: 0 }}>
                As nossas equipas acompanham cada fase do programa com transparência, responsabilidade e foco em resultados institucionais mensuráveis.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ══ Card 3 — Yellow ═════════════════════════════════ */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: 20 }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: 1, height: 24, background: "#F5A623" }} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              flex: 1,
              background: "#F5A623",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 40px 40px",
              minHeight: 0,
            }}
          >
            <div style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", color: "#111111", textTransform: "uppercase", marginBottom: 12 }}>
              STEP [03]
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 500, color: "#111111", lineHeight: 1.2, marginBottom: 12 }}>
              Impacto & Certificação
            </h3>
            <p style={{ fontSize: 13, fontWeight: 400, color: "#333333", lineHeight: 1.6, marginBottom: 28 }}>
              Entregamos resultados estruturados e permanecemos parceiros de confiança, apoiando a sua organização na certificação SIGIS e no crescimento sustentável.
            </p>
            <div>
              <button
                style={{
                  background: "#FFFFFF",
                  color: "#111111",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  padding: "12px 24px",
                  border: "none",
                  borderRadius: 0,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  outline: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                INICIAR DIÁLOGO
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
