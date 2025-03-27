import FeaturesCompanions from "@/components/features/features-companions";
import FeaturesResurrection from "@/components/features/features-resurrection";
import FeaturesCustomization from "@/components/features/features-customization";
import FeaturesArsenal from "@/components/features/features-arsenal";


export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <div className="container mx-auto px-4">
        <FeaturesResurrection />
        <FeaturesCompanions />
        <FeaturesCustomization />
        <FeaturesArsenal />
      </div>
    </main>
  );
}
