import React from "react";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between"
      style={{ padding: "24px 80px" }}>
      <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "0.15em", color: "#fff" }}>
        FORMED®
      </div>
      <button style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
        <Menu color="#fff" size={22} />
      </button>
    </nav>
  );
}
