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
          Your biography goes here.
        </p>
      </div>
    </Card>
  );
};

export default AboutCell;
