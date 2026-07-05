"use client";

import { letterSection } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Letter() {
  return (
    <section
      id="letter"
      className="relative overflow-hidden bg-burgundy px-6 py-28 text-cream sm:py-40"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy-deep via-burgundy to-burgundy-deep" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
        <div className="grain-overlay opacity-30 mix-blend-overlay" />
      </div>

      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold-soft">
          {letterSection.eyebrow}
        </p>
        <div className="ornament-divider mt-5 text-gold-soft">
          <span className="font-serif text-lg">❦</span>
        </div>
        <h2 className="mt-5 font-serif text-4xl italic text-cream sm:text-5xl">
          {letterSection.title}
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 flex max-w-xl flex-col gap-7">
        {letterSection.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph.slice(0, 24)} delay={index * 0.12} y={18}>
            <p className="text-balance text-center font-serif text-xl leading-relaxed text-cream/85 sm:text-2xl">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mx-auto mt-14 max-w-xl text-center">
        <p className="font-serif text-2xl italic text-gold-soft">
          {letterSection.signature}
        </p>
      </Reveal>
    </section>
  );
}
