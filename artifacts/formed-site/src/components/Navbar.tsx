import React from "react";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ 
        backgroundColor: isScrolled ? "rgba(235, 235, 235, 0.95)" : "rgba(0,0,0,0)",
        color: isScrolled ? "#111111" : "#FFFFFF"
      }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between transition-colors duration-300 backdrop-blur-sm"
    >
      <div className="font-bold text-lg md:text-xl tracking-[0.15em]">
        FORMED®
      </div>
      <button className="p-2">
        <Menu className="w-6 h-6" />
      </button>
    </motion.nav>
  );
}
