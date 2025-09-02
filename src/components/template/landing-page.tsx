import { CallToAction } from "../call-to-action";
import { CustomerStorySection } from "../customer-story-section";
import { FeatureSection } from "../feature-section";
import { HeroSection } from "../hero-section";
import { SupportSection } from "../suport-section";

export default function LandingPage() {
    return (
        <article className="flex flex-col">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
            <CallToAction />
        </article>
    )
}