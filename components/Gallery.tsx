"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { gallerySection, galleryPhotos } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? null : (current - 1 + galleryPhotos.length) % galleryPhotos.length
      ),
    []
  );
  const showNext = useCallback(
    () =>
      setActiveIndex((current) => (current === null ? null : (current + 1) % galleryPhotos.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <section id="gallery" className="relative px-6 py-28 sm:py-36">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center text-center">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-gold">
          {gallerySection.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-4xl text-burgundy sm:text-5xl">
          {gallerySection.title}
        </h2>
        <p className="mt-4 font-serif text-lg italic text-ink-soft">
          {gallerySection.subtitle}
        </p>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
        {galleryPhotos.map((photo, index) => (
          <Reveal key={photo.src} delay={Math.min(index * 0.08, 0.4)} y={20}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-xl bg-cream-deep"
              aria-label={`Deschide poza: ${photo.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <span className="absolute inset-0 bg-burgundy-deep/0 transition-colors duration-500 group-hover:bg-burgundy-deep/20" />
              <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/70 text-cream">
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                    <path
                      d="M10 4a6 6 0 104.472 10.03l4.75 4.75a.75.75 0 101.06-1.06l-4.75-4.75A6 6 0 0010 4z"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                    <path d="M10 7.5v5M7.5 10h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-burgundy-deep/90 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Închide"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 text-cream/90 transition-colors hover:bg-cream/10"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Poza anterioară"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream/90 transition-colors hover:bg-cream/10 sm:left-6"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Poza următoare"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream/90 transition-colors hover:bg-cream/10 sm:right-6"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] max-w-3xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryPhotos[activeIndex].src}
                alt={galleryPhotos[activeIndex].alt}
                className="max-h-[85vh] w-full rounded-lg object-contain shadow-2xl"
              />
              <p className="mt-4 text-center font-serif italic text-cream/80">
                {galleryPhotos[activeIndex].alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
