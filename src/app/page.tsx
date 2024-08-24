import { HeroHeaderSection, HowItWorkSection } from "@/sections";

export default function Home() {
  return (
    <main className="bg-landing px-40 text-center space-y-40">
      <HeroHeaderSection />
      <HowItWorkSection />
    </main>
  );
}
