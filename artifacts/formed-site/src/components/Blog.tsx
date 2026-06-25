import { useState } from "react";
import { motion } from "framer-motion";
import blog1 from "@/assets/images/blog-1.png";
import blog2 from "@/assets/images/blog-2.png";

const articles = [
  {
    id: 1,
    image: blog1,
    objectPosition: "20% center",
    title: "Designing Apartment Developments for Long-Term Value",
    date: "OCT 29, 2025",
    featured: true,
  },
  {
    id: 2,
    image: blog1,
    objectPosition: "72% 40%",
    title: "Managing Large-Scale Construction Projects Effectively",
    date: "18 OCT 2025",
    featured: false,
  },
  {
    id: 3,
    image: blog2,
    objectPosition: "82% 20%",
    title: "The Rise of Mixed-Use Developments in Urban Areas",
    date: "18 OCT 2025",
    featured: false,
  },
];

function ArticleCard({ article }: { article: typeof articles[0] }) {
  const [hovered, setHovered] = useState(false);
  const imgHeight = article.featured ? 420 : 220;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
    >
      <div style={{ overflow: "hidden", width: "100%", height: imgHeight, flexShrink: 0 }}>
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: article.objectPosition,
            display: "block",
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      {article.featured && (
        <div style={{ height: 1, background: "#DDDDDD", marginTop: 20 }} />
      )}

      <div
        style={{
          fontSize: article.featured ? 22 : 18,
          fontWeight: 400,
          color: hovered ? "#F5A623" : "#111111",
          marginTop: article.featured ? 20 : 16,
          lineHeight: 1.4,
          fontFamily: "'DM Sans','Inter',sans-serif",
          transition: "color 0.2s ease",
        }}
      >
        {article.title}
      </div>

      <div
        style={{
          fontSize: 10,
          letterSpacing: "0.12em",
          color: "#F5A623",
          fontWeight: 400,
          marginTop: 10,
          textTransform: "uppercase",
        }}
      >
        [{article.date}]
      </div>
    </div>
  );
}

export function Blog() {
  return (
    <section style={{ background: "#EFEFEF", padding: "80px 80px" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.15em",
              color: "#F5A623",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            [07] BLOG
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300,
              color: "#111111",
              margin: 0,
              lineHeight: 1.15,
              fontFamily: "'DM Sans','Inter',sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Latest News & Updates
          </h2>
        </div>

        <a
          href="#"
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            fontWeight: 500,
            color: "#111111",
            textDecoration: "none",
            textTransform: "uppercase",
            paddingBottom: 4,
            whiteSpace: "nowrap",
          }}
        >
          VIEW ALL NEWS →
        </a>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 32,
          marginTop: 48,
        }}
      >
        {/* Featured article */}
        <ArticleCard article={articles[0]} />

        {/* Right column — 2 stacked articles */}
        <div style={{ display: "contents" }}>
          <ArticleCard article={articles[1]} />
          <ArticleCard article={articles[2]} />
        </div>
      </motion.div>
    </section>
  );
}
