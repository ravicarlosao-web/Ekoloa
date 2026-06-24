import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="w-full bg-[#EBEBEB] text-[#111111] py-24 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5"
        >
          <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-8 opacity-60">
            [01] ABOUT US
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight text-[#0D0D0D]">
            From concept to completion, We deliver small and large scale property developments with a focus on high quality, efficiency, and impact.
          </h2>
        </motion.div>

        {/* Right Column (Stats) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-2/5 flex flex-col"
        >
          {/* Stat 1 */}
          <div className="pb-8 border-b border-[#CCCCCC]">
            <div className="text-5xl md:text-6xl font-bold mb-2 text-[#0D0D0D]">15+</div>
            <p className="text-sm font-medium text-[#111111]/70 leading-relaxed max-w-xs">
              Years of experience delivering complex property developments
            </p>
          </div>
          
          {/* Stat 2 */}
          <div className="py-8 border-b border-[#CCCCCC]">
            <div className="text-5xl md:text-6xl font-bold mb-2 text-[#0D0D0D]">132</div>
            <p className="text-sm font-medium text-[#111111]/70 leading-relaxed max-w-xs">
              Residential and mixed-use projects successfully completed
            </p>
          </div>

          {/* Stat 3 */}
          <div className="pt-8">
            <div className="text-5xl md:text-6xl font-bold mb-2 text-[#0D0D0D]">37K+</div>
            <p className="text-sm font-medium text-[#111111]/70 leading-relaxed max-w-xs">
              Square meters of property developed across all projects
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
