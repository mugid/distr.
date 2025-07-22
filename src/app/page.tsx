"use client";

import FeaturesSection from "@/components/layout/features";
import HeroSection from "@/components/layout/hero";

export default function LandingPage() {
  return (
    <div className="max-w-7xl px-10 mx-auto">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
