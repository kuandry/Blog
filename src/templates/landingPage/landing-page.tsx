import { CustomerStorySection } from "../../components/customer-story-section";
import { FeatureSection } from "../../components/feature-section";
import { HeroSection } from "../../components/hero-section";
import { SupportSection } from "../../components/suport-section";

export default function LandingPage() {
    return (
        <article className="flex flex-col">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
        </article>
    )
}