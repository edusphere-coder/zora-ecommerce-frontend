import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { NewArrivals } from "@/components/home/NewArrivals";
import { CategoryHighlight } from "@/components/home/CategoryHighlight";
import { BrandStory } from "@/components/home/BrandStory";
import { Newsletter } from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCollections />
        <NewArrivals />
        <CategoryHighlight />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
