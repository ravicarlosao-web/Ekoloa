import React from "react";
import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-end bg-[#1a1a1a] overflow-hidden text-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Construction Site" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex flex-col pt-[40dvh] px-8 md:px-16 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 opacity-90">
            // CONSTRUCTION & DEVELOPMENT
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Crafting the next generation of properties and communities
          </h1>
        </motion.div>
      </div>

      {/* Bottom Cards */}
      <div className="relative z-20 flex flex-col md:flex-row w-full mt-auto md:absolute md:bottom-0 md:left-0 md:right-0">
        {/* Left Yellow Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#F5A81C] text-black p-8 md:w-[400px] relative shrink-0"
        >
          {/* Corner Brackets */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-black/30" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-black/30" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-black/30" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-black/30" />

          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 opacity-80">
            [01] LATEST UPDATE
          </div>
          <h3 className="text-xl md:text-2xl font-bold leading-snug mb-12">
            Designing Apartment Developments for Long-Term Value
          </h3>
          <a href="#" className="inline-flex items-center text-[11px] font-bold tracking-[0.1em] uppercase hover:opacity-70 transition-opacity">
            READ MORE ——&rarr;
          </a>
        </motion.div>

        {/* Right Transparent Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-8 md:px-12 flex-grow bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end"
        >
          <div className="max-w-md">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 opacity-80 text-white">
              [02] WORK WITH US
            </div>
            <p className="text-lg md:text-xl font-medium mb-8 text-white/90">
              Partner with Formed to bring your next development to life
            </p>
            <button className="px-6 py-3 border border-white text-white text-xs font-bold tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-colors">
              START YOUR PROJECT
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
