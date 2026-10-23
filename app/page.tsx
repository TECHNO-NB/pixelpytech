import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
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
