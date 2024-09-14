"use client";

import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="mt-8">
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text">
            Problify
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Don&apos;t waste time on calculations
          </p>
        </motion.div>
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 50 + 10}px`,
                height: `${Math.random() * 50 + 10}px`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
          <div className="grid md:grid-cols-1 gap-12">
            <motion.div
              className="bg-card p-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Binomial Tables</h3>
              <p className="mb-4">
                Access comprehensive binomial distribution tables for quick
                probability calculations.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">
                  P(X = k) = C(n,k) * p^k * (1-p)^(n-k)
                </pre>
              </div>
            </motion.div>
            <motion.div
              className="bg-card p-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Poisson Tables</h3>
              <p className="mb-4">
                Utilize Poisson distribution tables for efficient event
                probability analysis.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">P(X = k) = (e^-λ * λ^k) / k!</pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
