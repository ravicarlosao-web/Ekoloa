import React from "react";
import { motion } from "framer-motion";
import processBg from "@/assets/images/process-card.jpg";

export function Process() {
  return (
    <section className="w-full bg-[#EBEBEB] text-[#111111] pb-24 md:pb-32 px-4 md:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-6 opacity-60">
          [02] OUR PROCESS
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0D0D0D]">
          How you'll work with us
        </h2>
      </motion.div>

      {/* Process Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
        
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white h-[420px] md:h-[480px] p-8 md:p-12 flex flex-col justify-end border-r border-b md:border-b-0 border-[#CCCCCC]/50"
        >
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 opacity-50">
            STEP [01]
          </div>
          <h3 className="text-2xl font-bold mb-4">Discovery & Planning</h3>
          <p className="text-sm text-[#111111]/70 leading-relaxed">
            We work closely with you to understand your vision, assess feasibility, and create a comprehensive roadmap that ensures clarity from day one.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#2A2A2A] text-white h-[420px] md:h-[480px] relative overflow-hidden flex flex-col border-r border-b md:border-b-0 border-[#111111]/50"
        >
          <div className="absolute top-0 left-0 w-full h-[55%]">
            <img src={processBg} alt="Architecture Design" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2A2A2A]" />
          </div>
          <div className="relative z-10 mt-auto p-8 md:p-12 flex flex-col justify-end h-full">
            <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 opacity-60">
              STEP [02]
            </div>
            <h3 className="text-2xl font-bold mb-4">Design & Delivery</h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Our expert team executes the plan with precision, managing every detail of the construction process to ensure quality and compliance.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#F5A81C] text-black h-[420px] md:h-[480px] p-8 md:p-12 flex flex-col justify-end"
        >
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 opacity-70">
            STEP [03]
          </div>
          <h3 className="text-2xl font-bold mb-4">Launch & Support</h3>
          <p className="text-sm text-black/80 leading-relaxed mb-8">
            We deliver the finished property ready for market, providing ongoing support to ensure your long-term success.
          </p>
          <button className="self-start px-6 py-3 border border-black text-black text-xs font-bold tracking-[0.1em] uppercase hover:bg-black hover:text-[#F5A81C] transition-colors">
            START YOUR PROJECT
          </button>
        </motion.div>

      </div>
    </section>
  );
}
