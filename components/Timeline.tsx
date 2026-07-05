"use client";

import { timelineEvents, timelineSection } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <section id="timeline" className="relative px-6 py-28 sm:py-36">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
          {timelineSection.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-4xl text-burgundy sm:text-5xl">
          {timelineSection.title}
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-20 max-w-3xl">
        <div className="absolute left-4 top-0 bottom-0 w-px -translate-x-1/2 bg-gold/25 sm:left-1/2" />

        <div className="space-y-14 sm:space-y-20">
          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal key={event.title} y={24} className="relative">
                <span className="absolute left-4 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-gold ring-4 ring-cream sm:left-1/2" />

                <div className="sm:grid sm:grid-cols-2 sm:gap-10">
                  <div
                    className={
                      isEven
                        ? "pl-10 sm:col-start-1 sm:pl-0 sm:pr-12 sm:text-right"
                        : "pl-10 sm:col-start-2 sm:pl-12"
                    }
                  >
                    <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold">
                      {event.date}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-burgundy sm:text-3xl">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-balance leading-relaxed text-ink-soft">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
