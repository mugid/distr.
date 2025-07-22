import Link from "next/link";
import Image from "next/image";


export default function  Navbar() {
  return (
    <div className="flex justify-center items-center py-8 px-10 border-b border-card">
        <Link href="/">
        <Image
          src="/logo-light.svg"
          alt="distr. logo light"
          width={80}
          height={80}
          className="inline-block dark:hidden"
        />
        <Image
          src="/logo-dark.svg"
          alt="distr. logo dark"
          width={80}
          height={80}
          className="dark:inline-block hidden"
        />
        </Link>
      </div>
  );
};
