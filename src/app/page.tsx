import { HeroHeaderSection, HowItWorkSection, KeyFeaturesSection } from "@/sections";
import { Testimonial } from "@/sections/Testimonial/Testimonial";

export default function Home() {
  return (
    <main className="bg-landing px-40 text-center space-y-40">
      <HeroHeaderSection />
      <HowItWorkSection />
      <KeyFeaturesSection />
      <Testimonial />
    </main>
  );
}
