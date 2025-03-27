import FeaturesCompanions from "@/components/features/features-companions";
import FeaturesFactions from "@/components/features/features-factions";
import FeaturesResurrection from "@/components/features/features-resurrection";
import FeaturesHero from "@/components/features/features-hero";

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#0e1a2b]">
      <FeaturesHero />
      <div className="container mx-auto px-4">
        <FeaturesFactions />
        <FeaturesResurrection />
        <FeaturesCompanions />
      </div>
    </main>
  );
}

