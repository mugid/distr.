"use client";

import FeaturesSection from "@/components/layout/features";
import HeroSection from "@/components/layout/hero";


export default function LandingPage() {
  return (
    <div className="mt-8 max-w-7xl mx-auto">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <HeroSection />
      </section>
      <section id="features" className="py-20">
        <FeaturesSection />
      </section>
    </div>
  );
}
