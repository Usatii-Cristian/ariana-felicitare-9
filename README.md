# 9 luni împreună — felicitare digitală

Felicitare digitală single-page (Next.js App Router + TypeScript + Tailwind CSS
+ Framer Motion) pentru aniversarea a 9 luni de relație.

## Pornire locală

```bash
npm install
npm run dev
```

Deschide [http://localhost:3000](http://localhost:3000).

## Ce editezi ca să o personalizezi

- **[lib/content.ts](lib/content.ts)** — toate textele, numele, data de start a
  relației și momentele din timeline. Singurul fișier de care ai nevoie pentru
  a schimba conținutul.
- **public/photos/1.svg ... 6.svg** — placeholder-uri; înlocuiește-le cu
  poze reale (jpg/png/webp) și actualizează extensia din `galleryPhotos` din
  `lib/content.ts`.
- **[app/icon.svg](app/icon.svg)** — favicon-ul (o inimă simplă); opțional de
  schimbat.

## Deploy pe Vercel

```bash
vercel deploy --prod
```

sau conectează repo-ul din [vercel.com/new](https://vercel.com/new).
