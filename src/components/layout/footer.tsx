import { ThemeToggle } from "./theme-button";

export default function Footer() {
  return (
    <footer className="mt-8 pb-4 text-center text-sm text-foreground/80">
        <p>

      problem solved by{" "}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="italic font-bold hover:underline text-blue-400"
      >
        bek slambek
      </a>
        </p>
      <ThemeToggle />
    </footer>
  );
}
