import { Hero } from "@/components/Hero";
import { Services } from "@/components/services";
import { Work } from "@/components/Work";
import { Process } from "@/components/Process";
import { CTA } from "@/components/cta";


export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Work />
      <Process />
      <CTA />   
    </main>
  );
}
