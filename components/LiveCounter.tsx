"use client";

import { liveCounterSection, relationshipStart } from "@/lib/content";
import { useLiveElapsed } from "@/lib/useLiveElapsed";
import { AnimatedNumber } from "./AnimatedNumber";
import { Reveal } from "./Reveal";

export function LiveCounter() {
  const { elapsed, mounted } = useLiveElapsed(relationshipStart);
  const value = (n: number) => (mounted ? n : 0);

  const stats = [
    { value: value(elapsed.months), label: liveCounterSection.units.months },
    { value: value(elapsed.days), label: liveCounterSection.units.days },
    { value: value(elapsed.hours), label: liveCounterSection.units.hours },
    { value: value(elapsed.minutes), label: liveCounterSection.units.minutes },
    { value: value(elapsed.seconds), label: liveCounterSection.units.seconds },
  ];

  return (
    <section id="live-counter" className="relative px-6 py-28 sm:py-36">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
          {liveCounterSection.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-4xl text-burgundy sm:text-5xl">
          {liveCounterSection.title}
        </h2>
        <p className="mt-4 font-serif text-lg italic text-ink-soft">
          {liveCounterSection.subtitle}
        </p>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-4 sm:grid-cols-5 sm:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center rounded-2xl border border-gold/20 bg-paper px-3 py-8 shadow-[0_1px_2px_rgba(74,22,32,0.06)] sm:px-4"
          >
            <span className="font-serif text-4xl tabular-nums text-burgundy sm:text-5xl">
              <AnimatedNumber value={stat.value} pad={2} />
            </span>
            <span className="mt-2 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-ink-soft sm:text-xs">
              {stat.label}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
