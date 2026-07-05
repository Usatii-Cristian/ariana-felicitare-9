import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Letter } from "@/components/Letter";
import { LiveCounter } from "@/components/LiveCounter";
import { Timeline } from "@/components/Timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <LiveCounter />
      <Gallery />
      <Timeline />
      <Letter />
      <Footer />
    </main>
  );
}
