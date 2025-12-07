import HeroSection from "@/components/home/hero-section";
import HomeHeader from "@/components/layout/header/home-header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />
      <HeroSection />
    </main>
  );
}
