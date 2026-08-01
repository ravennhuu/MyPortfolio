import React from "react";
import Card from "../ui/Card";

export const AboutCell = () => {
  return (
    <Card colSpan="w-full" className="flex flex-col justify-between">
      <div>
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          About
        </span>
      </div>

      {/* ── BIO TEXT ─────────────────────────────────────────
          Replace the paragraph below with your biography.
          You can add multiple <p> elements for separate
          paragraphs.
      ─────────────────────────────────────────────────── */}
      <div className="mt-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {/* TODO: write your biography here */}
          I'm a Full-Stack Web Developer. I build clean, responsive web applications and leverage AI to bring ideas to life.
          <br /><br />
          Right now, I’m driven by continuous growth, constantly exploring modern tools, refining my design process, and building practical applications that solve real-world problems.
        </p>
      </div>
    </Card>
  );
};

export default AboutCell;
