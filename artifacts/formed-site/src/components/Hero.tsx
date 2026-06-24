import React from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col bg-[#111] overflow-hidden text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Construction Site"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay — stronger on left, slightly lighter on right to reveal bg */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content wrapper — fills full height */}
      <div className="relative z-10 flex flex-col h-full w-full">

        {/* ── Upper block: label + headline ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col justify-end flex-1 px-10 md:px-16 lg:px-20 pb-12"
        >
          {/* Breadcrumb label */}
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/80 mb-5">
            // CONSTRUCTION &amp; DEVELOPMENT
          </p>

          {/* Main headline */}
          <h1
            className="font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(44px, 5.5vw, 78px)", maxWidth: "78%" }}
          >
            Crafting the next generation of properties and communities
          </h1>
        </motion.div>

        {/* ── Bottom info strip ──────────────────────────────────── */}
        <div className="flex w-full items-stretch">

          {/* Left spacer — empty dark area (~27% wide) */}
          <div className="hidden lg:block" style={{ width: "27%" }} />

          {/* ── Yellow card ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative bg-[#F5A81C] text-black flex-shrink-0"
            style={{ width: "clamp(260px, 28%, 340px)", padding: "32px 36px 36px" }}
          >
            {/* Corner brackets — extend 10px OUTSIDE the card */}
            {/* Top-left */}
            <span className="absolute pointer-events-none"
              style={{ top: -10, left: -10, width: 22, height: 22,
                borderTop: "1.5px solid #F5A81C", borderLeft: "1.5px solid #F5A81C" }} />
            {/* Top-right */}
            <span className="absolute pointer-events-none"
              style={{ top: -10, right: -10, width: 22, height: 22,
                borderTop: "1.5px solid #F5A81C", borderRight: "1.5px solid #F5A81C" }} />
            {/* Bottom-left */}
            <span className="absolute pointer-events-none"
              style={{ bottom: -10, left: -10, width: 22, height: 22,
                borderBottom: "1.5px solid #F5A81C", borderLeft: "1.5px solid #F5A81C" }} />
            {/* Bottom-right */}
            <span className="absolute pointer-events-none"
              style={{ bottom: -10, right: -10, width: 22, height: 22,
                borderBottom: "1.5px solid #F5A81C", borderRight: "1.5px solid #F5A81C" }} />

            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-black/70 mb-6">
              [01] LATEST UPDATE
            </p>
            <h3 className="font-bold leading-snug mb-10" style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}>
              Designing Apartment Developments for Long-Term Value
            </h3>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] uppercase text-black hover:opacity-60 transition-opacity duration-200"
            >
              READ MORE &nbsp;——&rarr;
            </a>
          </motion.div>

          {/* Middle flex spacer */}
          <div className="flex-1 hidden lg:block" />

          {/* ── Work With Us ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-end text-white"
            style={{ width: "clamp(280px, 32%, 400px)", padding: "32px 36px 36px" }}
          >
            <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/60 mb-4">
              [02] WORK WITH US
            </p>
            <p className="font-medium text-white/90 mb-8 leading-snug"
              style={{ fontSize: "clamp(16px, 1.3vw, 20px)" }}>
              Partner with Formed to bring your next development to life
            </p>
            <div>
              <button className="px-6 py-3 border border-white text-white text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-white hover:text-black transition-colors duration-200">
                START YOUR PROJECT
              </button>
            </div>
          </motion.div>

          {/* Right edge pad */}
          <div style={{ width: "clamp(20px, 4%, 60px)" }} />
        </div>
        {/* bottom strip end */}
      </div>
    </section>
  );
}
