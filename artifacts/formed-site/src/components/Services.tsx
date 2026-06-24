import React from "react";
import { motion } from "framer-motion";
import projectImg from "@/assets/images/project-1.jpg";
import processImg from "@/assets/images/process-card.jpg";
import heroBg from "@/assets/images/hero-bg.jpg";

const DIVIDER = "1px solid rgba(255,255,255,0.12)";

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.12em",
        color: "#F5A623",
        textTransform: "uppercase",
        whiteSpace: "nowrap",
      }}
    >
      [{label}]
    </span>
  );
}

function ServiceLabel({ index }: { index: string }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "0.12em",
        color: "#F5A623",
        marginBottom: 16,
        textTransform: "uppercase",
      }}
    >
      [{index}]
    </div>
  );
}

export function Services() {
  return (
    <section style={{ background: "#0A0A0A", paddingTop: 100, paddingBottom: 100 }}>

      {/* ── Header ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: 80, paddingLeft: 80, paddingRight: 80 }}
      >
        <div style={{ fontSize: 11, fontWeight: 400, letterSpacing: "0.15em", color: "#F5A623", textTransform: "uppercase", marginBottom: 20 }}>
          [04] OUR SERVICES
        </div>
        <h2 style={{ fontSize: "clamp(32px, 3.8vw, 52px)", fontWeight: 300, lineHeight: 1.2, color: "#ffffff", letterSpacing: "-0.01em", fontFamily: "'DM Sans','Inter',sans-serif", margin: 0 }}>
          The areas we specialise in
        </h2>
      </motion.div>

      {/* ── Service 001 — text left, image center-right ───── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ display: "flex", alignItems: "center", padding: "72px 80px", gap: 0, position: "relative", borderTop: DIVIDER }}
      >
        {/* Text — left half */}
        <div style={{ flex: 1, paddingRight: 80 }}>
          <ServiceLabel index="001" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#ffffff", lineHeight: 1.2, marginBottom: 20 }}>
            Property Development
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.70)", lineHeight: 1.6, marginBottom: 28, maxWidth: 420 }}>
            End-to-end delivery of large-scale residential and mixed-use developments, from land acquisition through to final handover.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["LAND ACQUISITION","FEASIBILITY STUDIES","MASTERPLANNING","RESIDENTIAL BUILDS"].map(t => <Tag key={t} label={t} />)}
          </div>
        </div>

        {/* Image — right half, slightly inset */}
        <div style={{ flexShrink: 0, width: 280, height: 340 }}>
          <img src={projectImg} alt="Property development" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
        </div>
      </motion.div>

      {/* ── Service 002 — white card right ───────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ display: "flex", alignItems: "stretch", padding: "72px 80px", gap: 0, borderTop: DIVIDER }}
      >
        {/* Left spacer */}
        <div style={{ flex: 1 }} />

        {/* White card — right half */}
        <div style={{ width: 480, background: "#ffffff", padding: "40px 40px 36px" }}>
          <ServiceLabel index="002" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#111111", lineHeight: 1.2, marginBottom: 20 }}>
            Design & Planning
          </h3>
          <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.6, marginBottom: 24 }}>
            Collaborative design and planning services that balance creativity, compliance, and buildability at scale.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            {["ARCHITECTURAL DESIGN","PLANNING APPROVALS","TECHNICAL DRAWINGS","DESIGN COORDINATION","COMPLIANCE"].map(t => <Tag key={t} label={t} />)}
          </div>
          <img src={processImg} alt="Design & planning" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
        </div>
      </motion.div>

      {/* ── Service 003 — white card left ────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ display: "flex", alignItems: "stretch", padding: "72px 80px", gap: 0, borderTop: DIVIDER }}
      >
        {/* White card — left half */}
        <div style={{ width: 480, background: "#ffffff", padding: "40px 40px 36px" }}>
          <ServiceLabel index="003" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#111111", lineHeight: 1.2, marginBottom: 20 }}>
            Construction Management
          </h3>
          <p style={{ fontSize: 15, color: "#555555", lineHeight: 1.6, marginBottom: 24 }}>
            Full oversight of construction phases to ensure projects are delivered on time, on budget, and to the highest standards.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
            {["SITE MANAGEMENT","PROGRAMME CONTROL","QUALITY ASSURANCE","COST CONTROL"].map(t => <Tag key={t} label={t} />)}
          </div>
          <img src={heroBg} alt="Construction management" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
        </div>

        {/* Right spacer */}
        <div style={{ flex: 1 }} />
      </motion.div>

      {/* ── Service 004 — text left, image right ─────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ display: "flex", alignItems: "center", padding: "72px 80px", gap: 0, borderTop: DIVIDER }}
      >
        {/* Text — left half */}
        <div style={{ flex: 1, paddingRight: 80 }}>
          <ServiceLabel index="004" />
          <h3 style={{ fontSize: 32, fontWeight: 500, color: "#ffffff", lineHeight: 1.2, marginBottom: 20 }}>
            Infrastructure & Logistics
          </h3>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.70)", lineHeight: 1.6, marginBottom: 28, maxWidth: 420 }}>
            Delivery of essential infrastructure and logistics planning to support large residential and urban developments.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {["ROADS & UTILITIES","SITE LOGISTICS","PHASING STRATEGY","ACCESS PLANNING","UTILITIES COORDINATION"].map(t => <Tag key={t} label={t} />)}
          </div>
        </div>

        {/* Image — right */}
        <div style={{ flexShrink: 0, width: 350, height: 320 }}>
          <img src={processImg} alt="Infrastructure" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)" }} />
        </div>
      </motion.div>

    </section>
  );
}
