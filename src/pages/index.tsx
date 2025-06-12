import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SectionFunction } from "@/components/store-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SectionFunction />
      </article>
    </>
  );
}
