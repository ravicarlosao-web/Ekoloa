import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white py-12 px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-bold tracking-[0.15em] text-lg">
          FORMED®
        </div>
        <div className="text-[11px] text-white/50 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} FORMED CONSTRUCTION & DEVELOPMENT. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
