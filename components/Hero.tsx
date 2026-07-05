"use client";

import { motion } from "framer-motion";
import { hero, relationshipStart } from "@/lib/content";
import { formatLongDate } from "@/lib/time";
import { useLiveElapsed } from "@/lib/useLiveElapsed";
import { AnimatedNumber } from "./AnimatedNumber";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { elapsed, mounted } = useLiveElapsed(relationshipStart);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-cream-deep" />
        <div className="absolute -left-24 -top-32 h-96 w-96 rounded-full bg-blush/50 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-gold-soft/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-rose/20 blur-3xl" />
        <div className="grain-overlay" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="flex max-w-2xl flex-col items-center"
      >
        <motion.p
          variants={item}
          className="font-sans text-xs uppercase tracking-[0.35em] text-ink-soft sm:text-sm"
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 text-balance font-serif text-[3.4rem] font-semibold leading-[0.95] text-burgundy sm:text-7xl md:text-8xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-md text-balance font-serif text-xl italic text-ink-soft sm:text-2xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:gap-12"
        >
          <div className="flex flex-col items-center">
            <span className="font-serif text-4xl text-gold sm:text-5xl">
              <AnimatedNumber value={mounted ? elapsed.totalDays : 0} duration={1.8} />
            </span>
            <span className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-ink-soft">
              {hero.daysLabel}
            </span>
          </div>

          <div className="hidden h-10 w-px bg-ink/15 sm:block" />

          <div className="flex flex-col items-center">
            <span className="font-serif text-lg text-ink sm:text-xl">
              {formatLongDate(relationshipStart)}
            </span>
            <span className="mt-1 font-sans text-xs uppercase tracking-[0.25em] text-ink-soft">
              începutul nostru
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#live-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-ink-soft"
        aria-label={hero.scrollHint}
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em]">
          {hero.scrollHint}
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-ink-soft/40 p-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-ink-soft/70" />
        </motion.span>
      </motion.a>
    </section>
  );
}
