import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Switch to dark when the hero is no longer intersecting (scrolled past it)
        setDark(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const color = dark ? "#111111" : "#ffffff";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between"
      style={{ padding: "24px 80px" }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: "0.15em",
          color,
          transition: "color 0.35s ease",
        }}
      >
        EKOLOA®
      </div>
      <button
        style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
        aria-label="Menu"
      >
        <Menu
          size={22}
          style={{ color, transition: "color 0.35s ease" }}
        />
      </button>
    </motion.nav>
  );
}
