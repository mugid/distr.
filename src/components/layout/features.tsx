import { motion } from "motion/react";

export default function FeaturesSection () {
    return (
        <section className="pt-12">
          <h2 className="text-4xl font-bold mb-12 tracking-tighter text-center">Features</h2>
          <div className="flex flex-col gap-12">
            <motion.div
              className="bg-card p-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03 }}
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
              whileHover={{ scale: 1.02 }}
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
            <motion.div
              className="bg-card p-8 rounded-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Normal Distributions</h3>
              <p className="mb-4">
                Generate normal distribution tables and graphs for continuous
                data analysis.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">{'Φ(z) = P(Z < z)'}</pre>
              </div>
            </motion.div>
          </div>
        </section>
    )
}