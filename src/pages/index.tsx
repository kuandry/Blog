import { FeatureSection } from "@/components/feature-section";
import { FeedbackFunction } from "@/components/feedback-section";
import { HeroSection } from "@/components/hero-section";
import { FooterFunction } from "@/components/min-footer-section";
import { StoreFunction } from "@/components/store-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <StoreFunction />
        <FeedbackFunction />
        <FooterFunction />
      </article>
    </>
  );
}
