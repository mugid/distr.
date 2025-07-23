export default function FeaturesSection() {
  return (
    <section className="pt-24">
      <h2 className="text-5xl font-bold mb-12 tracking-tighter text-center">
        Features
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
        <a href="/create">
          <div className="bg-primary rounded-lg shadow-lg">
            <div className="hover:translate-y-[-10px] hover:translate-x-[-10px] transition-all p-8 rounded-lg bg-card h-full">
              <h3 className="text-2xl font-semibold mb-4">Binomial Tables</h3>
              <p className="mb-4">
                Access comprehensive binomial distribution tables for quick
                probability calculations.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">C(n,k) * p^k * (1-p)^(n-k)</pre>
              </div>
            </div>
          </div>
        </a>
        <a href="/create">
          <div className="bg-primary rounded-lg shadow-lg h-full">
            <div className="hover:translate-y-[-10px] hover:translate-x-[-10px] transition-all p-8 rounded-lg bg-card h-full">
              <h3 className="text-2xl font-semibold mb-4">Poisson Tables</h3>
              <p className="mb-4">
                Utilize Poisson distribution tables for efficient event
                probability analysis.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">(e^-λ * λ^k) / k!</pre>
              </div>
            </div>
          </div>
        </a>{" "}
        <a href="/create">
          <div className="bg-primary rounded-lg shadow-lg h-full">
            <div className="hover:translate-y-[-10px] hover:translate-x-[-10px] transition-all p-8 rounded-lg bg-card h-full">
              <h3 className="text-2xl font-semibold mb-4">
                Normal Distributions
              </h3>
              <p className="mb-4">
                Generate normal distribution tables and graphs for continuous
                data analysis.
              </p>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm">{"Φ(z) = P(Z < z)"}</pre>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
