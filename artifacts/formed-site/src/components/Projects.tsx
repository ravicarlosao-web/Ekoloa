import React from "react";
import { motion } from "framer-motion";
import projectImg from "@/assets/images/project-1.jpg";

export function Projects() {
  return (
    <section className="w-full bg-[#1C1C1C] text-white py-24 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col"
        >
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 opacity-60">
            [PROJECT [001]
          </div>
          <h2 className="text-5xl md:text-[68px] font-bold leading-[1.05] tracking-tight mb-16">
            Apartment construction
          </h2>

          <div className="flex flex-col gap-8 mb-16">
            <div className="flex flex-col border-t border-white/10 pt-4">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 mb-1">TIMELINE</span>
              <span className="text-lg font-medium">Oct 2024 - Sep 2025</span>
            </div>
            <div className="flex flex-col border-t border-white/10 pt-4">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 mb-1">COST</span>
              <span className="text-lg font-medium">$1,270,000</span>
            </div>
            <div className="flex flex-col border-t border-white/10 pt-4 border-b pb-4">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 mb-1">SCOPE</span>
              <span className="text-lg font-medium">345 apartments</span>
            </div>
          </div>

          <a href="#" className="inline-flex items-center text-[11px] font-bold tracking-[0.1em] uppercase text-[#F5A81C] hover:opacity-70 transition-opacity">
            CLICK TO VIEW FULL PROJECT ——&rarr;
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 w-full h-[600px] md:h-[800px] relative group overflow-hidden"
        >
          <img 
            src={projectImg} 
            alt="Modern apartment building" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700" />
        </motion.div>

      </div>
    </section>
  );
}
