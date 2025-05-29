import Link from "next/link";
import { ThemeToggle } from "./theme-button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-x-4">
        <Link className="font-bold" href="/">distr.</Link>
        <Link href="/create">create</Link>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
