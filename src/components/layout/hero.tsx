"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { Jersey_15 } from "next/font/google";

const jersey = Jersey_15({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export default function HeroSection() {
  return (
    <section
      className="relative flex lg:flex-row flex-col justify-start items-start lg:items-center gap-12 py-50"
    >
      <h1 className="text-foreground text-4xl font-extrabold tracking-tighter lg:text-7xl">
        Build <span className={`${jersey.className} text-5xl md:text-8xl`}>tables and graphs</span>
        <br className="md:block hidden" /> with{" "}
        <span className={`${jersey.className} text-5xl md:text-8xl text-primary`}>high</span> efficiency
      </h1>
      <button className="rounded-full bg-foreground px-6 py-2 font-medium text-background hover:bg-foreground/90 hover:px-8 transition-all">
        <Link href="/create">
          <ArrowRightIcon width={36} height={36}/>
        </Link>
      </button>
      <div className="absolute lg:left-210 lg:bottom-10 left-10 -bottom-10">
        <Image src="/hero-illustration-dark.svg" alt="dark illustration" width={256} height={256}className="hidden dark:inline-block"/>
        <Image src="/hero-illustration-light.svg" alt="dark illustration" width={256} height={256} className="dark:hidden inline-block"/>
      </div>
    </section>
  );
}
