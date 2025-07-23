import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="pb-12">
      <h2 className="text-5xl font-bold mb-12 tracking-tighter text-center">
        People Say
      </h2>
      <div className="bg-card rounded-lg max-w-3xl mx-auto">
        <div className="flex md:flex-row flex-col md:items-center items-start gap-4 p-8">
          <Image
            src="/gauss-testimonial.jpeg"
            alt="Friedrich Gauss"
            className="w-20 h-20 rounded-full mr-8 object-cover"
            width={100}
            height={100}
          />
          <div>
            <p className="md:text-lg text-sm text-muted-foreground">
              &quot;I would be 10x more productive if <span className="text-primary font-bold">distr.</span> was
              created in my times. This app streamlines the creation of
              distribution tables with remarkable accuracy and speed. Its
              intuitive interface makes complex calculations effortless. Highly
              recommended for anyone working with statistical data.&quot;
            </p>
            <h3 className="md:text-xl text-md mt-4 font-semibold mb-2">- Friedrich Gauss</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
