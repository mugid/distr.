"use client";

import FeaturesSection from "@/components/layout/features";
import HeroSection from "@/components/layout/hero";
import TestimonialSection from "@/components/layout/testimonial";
import { TextReveal } from "@/components/magicui/text-reveal";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
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
      <VelocityScroll className="pt-12">GRAPHS AND TABLES AND</VelocityScroll>
      <FeaturesSection />
      <TextReveal>
        distr. is just a pet project that was done in several hours. author
        didn&apos;t want to spend time on calculations and just decided to add visual
        graphs for the sake of cool ui.
      </TextReveal>
      <TestimonialSection />
    </motion.div>
  );
}
