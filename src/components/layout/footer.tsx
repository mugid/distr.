import { ThemeButton } from "./theme-button";

export default function Footer() {
  return (
    <footer className="py-12 max-w-7xl px-10 mx-auto text-foreground/80 flex justify-between items-center">
      <p>
        problem solved by{" "}
        <a
          href="https://github.com/mugid"
          target="_blank"
          rel="noopener noreferrer"
          className="italic text-primary hover:border-b-1 hover:border-primary hover:font-bold transition-all duration-300"
        >
          bek slambek
        </a>
      </p>
      <ThemeButton />
    </footer>
  );
}
