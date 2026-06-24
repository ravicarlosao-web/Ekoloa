import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEOS = ["/hero1.mp4", "/hero2.mp4", "/hero3.mp4"];
const SWITCH_INTERVAL = 5000; // switch every 5s (video is 4s, brief overlap)

function CornerCross({ style }: { style: React.CSSProperties }) {
  return (
    <span
      className="absolute pointer-events-none"
      style={style}
      aria-hidden
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <line x1="7" y1="0" x2="7" y2="14" stroke="#F5A623" strokeWidth="1.2" />
        <line x1="0" y1="7" x2="14" y2="7" stroke="#F5A623" strokeWidth="1.2" />
      </svg>
    </span>
  );
}

export function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % VIDEOS.length);
    }, SWITCH_INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white" style={{ height: "100dvh" }}>

      {/* ── Video slideshow background ────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.video
            key={current}
            src={VIDEOS[current]}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />
      </div>

      {/* ── Architectural grid lines ──────────────────────────── */}
      <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
        {/* Vertical lines */}
        {[27, 55, 73].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 bottom-0"
            style={{ left: `${pct}%`, width: 1, background: "rgba(255,255,255,0.12)" }}
          />
        ))}
        {/* Horizontal line — divides title area from card area */}
        <div
          className="absolute left-0 right-0"
          style={{ top: "58%", height: 1, background: "rgba(255,255,255,0.15)" }}
        />
      </div>

      {/* ── Content wrapper ───────────────────────────────────── */}
      <div className="relative z-10 flex flex-col h-full w-full">

        {/* Upper block: label + headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ paddingTop: 120, paddingLeft: 80, paddingRight: 80 }}
        >
          {/* "// CONSTRUCTION & DEVELOPMENT" */}
          <p
            className="uppercase text-white"
            style={{
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.18em",
              marginBottom: 14,
              opacity: 0.85,
            }}
          >
            // CONSTRUCTION &amp; DEVELOPMENT
          </p>

          {/* Main headline — weight 300 (light) */}
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(48px, 5.6vw, 80px)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              maxWidth: "75%",
            }}
          >
            Crafting the next generation of properties and communities
          </h1>
        </motion.div>

        {/* Flex spacer pushes cards to bottom */}
        <div className="flex-1" />

        {/* ── Bottom info strip ─────────────────────────────────── */}
        <div className="flex w-full items-stretch">

          {/* Left spacer (~27%) */}
          <div className="hidden lg:block" style={{ flexShrink: 0, width: "27%" }} />

          {/* ── Yellow card ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative text-black flex-shrink-0"
            style={{
              background: "#F5A623",
              width: "clamp(280px, 29%, 390px)",
              padding: "32px 36px 36px",
            }}
          >
            {/* Corner cross marks (+) — 4 corners */}
            <CornerCross style={{ top: -7, left: -7 }} />
            <CornerCross style={{ top: -7, right: -7 }} />
            <CornerCross style={{ bottom: -7, left: -7 }} />
            <CornerCross style={{ bottom: -7, right: -7 }} />

            <p
              className="uppercase"
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.15em",
                color: "rgba(0,0,0,0.65)",
                marginBottom: 20,
              }}
            >
              [01] LATEST UPDATE
            </p>
            <h3
              style={{
                fontSize: 22,
                fontWeight: 600,
                lineHeight: 1.3,
                color: "#000",
                marginBottom: 36,
              }}
            >
              Designing Apartment Developments for Long-Term Value
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 uppercase hover:opacity-60 transition-opacity duration-200"
              style={{
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "#000",
                textDecoration: "none",
              }}
            >
              READ MORE &nbsp;&rarr;
            </a>
          </motion.div>

          {/* Middle flex spacer */}
          <div className="flex-1 hidden lg:block" />

          {/* ── Work With Us ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-end text-white"
            style={{
              width: "clamp(280px, 30%, 420px)",
              padding: "32px 40px 36px",
            }}
          >
            <p
              className="uppercase"
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.6)",
                marginBottom: 14,
              }}
            >
              [02] WORK WITH US
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.45,
                color: "rgba(255,255,255,0.9)",
                marginBottom: 28,
              }}
            >
              Partner with Formed to bring your next development to life
            </p>
            <div>
              <button
                style={{
                  background: "#FFFFFF",
                  color: "#000000",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  padding: "14px 28px",
                  border: "none",
                  borderRadius: 0,
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                START YOUR PROJECT
              </button>
            </div>
          </motion.div>

          {/* Right edge */}
          <div style={{ flexShrink: 0, width: "clamp(20px, 3%, 60px)" }} />
        </div>

      </div>
    </section>
  );
}
