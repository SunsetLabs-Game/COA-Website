import FeaturesCompanions from "@/components/features/features-companions";
import FeaturesResurrection from "@/components/features/features-resurrection";
import FeaturesCustomization from "@/components/features/features-customization";
import FeaturesArsenal from "@/components/features/features-arsenal";
import FeaturesWorldExploration from "@/components/features/features-world-exploration";
import DigitalRainEffect from "@/components/effects/digital-rain-effect";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <DigitalRainEffect />
      <div className="container mx-auto px-4">
        <FeaturesResurrection />
        <FeaturesCompanions />
        <FeaturesCustomization />
        <FeaturesArsenal />
        <FeaturesWorldExploration />
      </div>
    </main>
  );
}
