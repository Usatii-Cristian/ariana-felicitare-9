// ============================================================================
// CONȚINUT EDITABIL — modifică orice text, dată sau poză din acest fișier.
// Restul aplicației citește totul de aici, deci nu trebuie să umbli prin
// componente ca să personalizezi felicitarea.
// ============================================================================

/** Numele vostre, afișate în Hero. */
export const couple = {
  partnerA: "Ariana",
  partnerB: "Cristi",
};

/**
 * Data și ora exactă de când sunteți împreună.
 * Format: new Date(an, lună (0-11!), zi, oră, minut)
 * Atenție: luna e indexată de la 0 (0 = ianuarie, 9 = octombrie).
 */
export const relationshipStart = new Date(2025, 9, 8, 20, 0);

/** Eticheta aniversării curente — o schimbi când treceți la următoarea. */
export const milestoneLabel = "9 luni împreună";

export const hero = {
  eyebrow: `${couple.partnerA} & ${couple.partnerB}`,
  title: milestoneLabel,
  subtitle:
    "Nouă luni în care fiecare zi obișnuită a devenit, pe nesimțite, o amintire.",
  daysLabel: "zile împreună",
  scrollHint: "descoperă povestea",
};

export const liveCounterSection = {
  eyebrow: "Chiar acum",
  title: "Timpul nostru continuă",
  subtitle: "De când a început totul, secundă cu secundă.",
  units: {
    months: "luni",
    days: "zile",
    hours: "ore",
    minutes: "minute",
    seconds: "secunde",
  },
};

export const gallerySection = {
  eyebrow: "Amintiri",
  title: "Momentele noastre",
  subtitle: "Câteva clipe pe care am vrut să le păstrăm.",
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};

/**
 * Pozele din galerie. Sunt deocamdată niște placeholder-uri elegante
 * (public/photos/1.svg ... 6.svg). Înlocuiește fișierele cu propriile poze
 * (jpg/png/webp) și actualizează extensia din calea `src` de mai jos ca să
 * corespundă cu fișierul nou (ex: "/photos/1.jpg").
 */
export const galleryPhotos: GalleryPhoto[] = [
  { src: "/photos/1.svg", alt: "Prima noastră poză împreună" },
  { src: "/photos/2.svg", alt: "O zi obișnuită, perfectă" },
  { src: "/photos/3.svg", alt: "O călătorie de neuitat" },
  { src: "/photos/4.svg", alt: "Râsul tău preferat" },
  { src: "/photos/5.svg", alt: "O seară liniștită împreună" },
  { src: "/photos/6.svg", alt: "Noi, așa cum suntem" },
];

export const timelineSection = {
  eyebrow: "Drumul până aici",
  title: "Momente importante",
};

export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
};

/**
 * Câte un mesaj scurt pentru fiecare dintre cele 9 luni — editează liber
 * titlul și descrierea fiecăreia, sau data din capul liniei.
 */
export const timelineEvents: TimelineEvent[] = [
  {
    date: "8 octombrie 2025",
    title: "Luna 1 — Începutul",
    description: "Ziua în care am ales să încercăm asta împreună.",
  },
  {
    date: "Luna 2",
    title: "Obișnuința frumoasă",
    description: "Am început să ne simțim firesc unul lângă altul.",
  },
  {
    date: "Luna 3",
    title: "Prima călătorie",
    description: "Am plecat doar noi doi și ne-am apropiat și mai mult.",
  },
  {
    date: "Luna 4",
    title: "Râsul tău",
    description: "Am învățat să-l recunosc din mii de altele.",
  },
  {
    date: "Luna 5",
    title: "Cunoștință cu cei dragi",
    description: "Lumile noastre s-au întâlnit și totul a părut firesc.",
  },
  {
    date: "Luna 6",
    title: "Jumătate de an",
    description: "Șase luni în care fiecare zi a adăugat ceva bun.",
  },
  {
    date: "Luna 7",
    title: "Prima ceartă, prima împăcare",
    description: "Am învățat să alegem să rămânem, nu să fim perfecți.",
  },
  {
    date: "Luna 8",
    title: "Tot mai aproape",
    description: "Am simțit că suntem echipă, în tot ce facem.",
  },
  {
    date: "Luna 9",
    title: "Astăzi",
    description: "Nouă luni mai târziu, aceeași alegere: tu.",
  },
];

export const letterSection = {
  eyebrow: "O scrisoare",
  title: "Pentru tine",
  paragraphs: [
    "Sunt momente pe care le trăiești și momente pe care le simți cu adevărat abia mai târziu, când te oprești și te uiți în urmă. Ultimele nouă luni au fost, pentru mine, din a doua categorie.",
    "Nu știu exact ce anume s-a schimbat de la o zi obișnuită la una în care zâmbetul tău a devenit motivul pentru care aștept cu drag ziua următoare. Dar știu că s-a întâmplat, încet, fără zgomot, așa cum se întâmplă lucrurile adevărate.",
    "Îți mulțumesc pentru răbdare, pentru râs, pentru liniștea pe care mi-o dai fără să-ți dai seama și pentru toate zilele astea pe care le-am adunat împreună, una câte una.",
    "Asta e doar începutul. Aștept cu drag tot ce urmează.",
  ],
  signature: `Al tău, ${couple.partnerB}`,
};

export const footerSection = {
  message: "Și povestea noastră abia acum începe cu adevărat.",
  replayLabel: "Replay",
  credit: `${couple.partnerA} & ${couple.partnerB}`,
};
