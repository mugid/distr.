"use client";

import FeaturesSection from "@/components/build/features";
import HeroSection from "@/components/build/hero";
import Navbar from "@/components/build/navbar";


export default function LandingPage() {
  return (
    <div className="mt-8 max-w-7xl mx-auto">
      <Navbar />
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <HeroSection />
      </section>
      <section id="features" className="py-20">
        <FeaturesSection />
      </section>
    </div>
  );
}
