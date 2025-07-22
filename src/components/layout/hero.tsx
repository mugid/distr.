"use client";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="flex md:flex-row flex-col justify-start items-start md:items-center gap-12 py-40"
    >
      <h1 className="text-foreground text-4xl font-extrabold tracking-tighter lg:text-7xl">
        Build <span className="font-medium">tables and graphs</span>
        <br className="md:block hidden" /> with{" "}
        <span className="font-medium text-primary">high</span> efficiency
      </h1>
      <button className="rounded-full bg-foreground px-6 py-2 font-medium text-background hover:bg-foreground/90 hover:px-8 transition-all">
        <Link href="/create">
          <ArrowRightIcon width={36} height={36}/>
        </Link>
      </button>
    </section>
  );
}
