"use client";

import { footerSection } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Footer() {
  function replay() {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className="relative px-6 py-24 text-center sm:py-32">
      <Reveal className="mx-auto flex max-w-lg flex-col items-center">
        <div className="ornament-divider text-gold">
          <span className="font-serif text-lg">❦</span>
        </div>

        <p className="mt-6 text-balance font-serif text-2xl italic text-burgundy sm:text-3xl">
          {footerSection.message}
        </p>

        <button
          type="button"
          onClick={replay}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 font-sans text-xs uppercase tracking-[0.3em] text-burgundy transition-colors duration-300 hover:bg-burgundy hover:text-cream"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
            <path
              d="M4 4v5h5M20 20v-5h-5M4.5 9A8 8 0 0119.8 8.5M19.5 15a8 8 0 01-15.3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {footerSection.replayLabel}
        </button>

        <p className="mt-14 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft/60">
          {footerSection.credit}
        </p>
      </Reveal>
    </footer>
  );
}
