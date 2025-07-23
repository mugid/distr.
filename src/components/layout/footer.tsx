"use client"

import { ThemeButton } from "./theme-button";
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className={`py-12 ${pathname == "/" ? "max-w-7xl" : "max-w-3xl"} px-10 mx-auto text-foreground/80 flex justify-between items-center`}>
      <p>
        problem solved by{" "}
        <a
          href="https://github.com/mugid"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-primary/80 hover:text-primary transition-all duration-300"
        >
          bek slambek
        </a>
      </p>
      <ThemeButton />
    </footer>
  );
}
