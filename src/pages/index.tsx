import { FeatureSection } from "@/components/feature-section";
import { CustomerStorySection } from "@/components/customer-story-section/customer-section-store";
import { HeroSection } from "@/components/hero-section";
import { FooterFunction } from "@/components/min-footer-section";
import { CallToAction } from "@/components/call-to-action";
import { SupportSection } from "@/components/suport-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
        <CustomerStorySection />
        <CallToAction />
        {/* <FooterFunction /> */}
      </article>
    </>
  );
}
