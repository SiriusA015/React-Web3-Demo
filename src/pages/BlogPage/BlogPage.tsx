import React from "react";
import { Helmet } from "react-helmet";
import SectionLatestPosts from "./SectionLatestPosts";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";

// DEMO DATA

const BlogPage: React.FC = () => {
  return (  
    <div className="nc-BlogPage overflow-hidden relative">
      <Helmet>
        <title>Blog || Mind Chill</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      <div className="container relative">
        {/* === SECTION 8 === */}
        <SectionLatestPosts className="py-16 lg:py-28" />
      </div>
    </div>
  );
};

export default BlogPage;
