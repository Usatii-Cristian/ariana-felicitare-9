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
export const relationshipStart = new Date(2025, 9, 8, 0, 0);

/** Eticheta aniversării curente — o schimbi când treceți la următoarea. */
export const milestoneLabel = "9 luni împreună";

export const hero = {
  eyebrow: `${couple.partnerA} & ${couple.partnerB}`,
  title: milestoneLabel,
  subtitle: "De la un 'bună' timid, la nouă luni în care ai devenit acasă.",
  daysLabel: "zile împreună",
  scrollHint: "descoperă povestea",
};

export const liveCounterSection = {
  eyebrow: "Chiar acum",
  title: "Timpul nostru continuă",
  subtitle: "Numărătoarea nu se oprește niciodată — nici acum, cât citești asta.",
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
  subtitle: "Fragmente mici dintr-o poveste pe care o scriem din mers.",
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
  { src: "/photos/5.jpg", alt: "Regi de bal, pentru o seară" },
  { src: "/photos/6.jpg", alt: "Noi, așa cum suntem" },
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
    title: "Începutul",
    description: "Un „da” simplu care ne-a schimbat toată toamna.",
  },
  {
    date: "Luna 2",
    title: "Ritmul nostru",
    description: "Am găsit felul nostru de a fi împreună, fără să-l căutăm.",
  },
  {
    date: "Luna 3",
    title: "Departe de casă, aproape unul de altul",
    description: "Prima călătorie ne-a arătat cât de bine ne potrivim și fără rutină.",
  },
  {
    date: "Luna 4",
    title: "Micile obiceiuri",
    description: "Un mesaj de dimineață, un apel seara — lucruri mici, devenite esențiale.",
  },
  {
    date: "Luna 5",
    title: "Lumile noastre, una singură",
    description: "Ne-am arătat celor dragi, și totul a părut de la sine înțeles.",
  },
  {
    date: "Luna 6",
    title: "Jumătate de an",
    description: "Am realizat că nu mai număr zilele de emoție, ci din bucurie.",
  },
  {
    date: "Luna 7",
    title: "Testați și rămași",
    description: "Am trecut prin zile mai grele și am ieșit tot noi doi, mai uniți.",
  },
  {
    date: "Luna 8",
    title: "Echipă",
    description: "Am învățat să sărbătorim victoriile mici unul altuia, ca pe ale noastre.",
  },
  {
    date: "Luna 9",
    title: "Astăzi",
    description: "Nouă luni mai târziu, tot tu ești răspunsul la orice întrebare.",
  },
];

export const letterSection = {
  eyebrow: "O scrisoare",
  title: "Pentru tine",
  paragraphs: [
    "Nu știu de unde să încep, așa că încep simplu: mă bucur în fiecare zi că te-am cunoscut.",
    "Îmi amintesc emoția de la început, felul în care căutam mereu cuvintele potrivite lângă tine. Nouă luni mai târziu, cuvintele au devenit ușoare, pentru că totul cu tine e firesc.",
    "Îți mulțumesc pentru fiecare zi obișnuită pe care ai transformat-o în ceva de care îmi aduc aminte cu zâmbetul pe buze, pentru răbdare, pentru cum mă asculți și pentru cum ești, pur și simplu, tu.",
    "Asta nu e finalul unui capitol, e doar o pauză scurtă înainte de tot ce urmează. Și abia aștept.",
  ],
  signature: `Al tău, ${couple.partnerB}`,
};

export const footerSection = {
  message: "Nouă luni au trecut. Multe altele urmează.",
  replayLabel: "Replay",
  credit: `${couple.partnerA} & ${couple.partnerB}`,
};
