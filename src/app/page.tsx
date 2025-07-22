"use client";

import FeaturesSection from "@/components/layout/features";
import HeroSection from "@/components/layout/hero";
import { motion } from "motion/react";

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl px-10 mx-auto"
    >
      <HeroSection />
      <FeaturesSection />
    </motion.div>
  );
}
