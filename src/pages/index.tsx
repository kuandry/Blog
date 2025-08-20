import { FeatureSection } from "@/components/feature-section";
import { CustomerStorySection } from "@/components/feedback-section/customer-section-store";
import { HeroSection } from "@/components/hero-section";
import { FooterFunction } from "@/components/min-footer-section";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <CallToAction />
        <CustomerStorySection />
        <FooterFunction />
      </article>
    </>
  );
}
