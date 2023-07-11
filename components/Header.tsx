import Link from "next/link";
import { Open_Sans, Knewave } from "next/font/google";
import Logo from "./Logo";
import Hambar from "./Hambar";
const knewave = Knewave({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
const open_sans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 bg-white shadow-md">
        <nav className="flex justify-between items-center px-6 py-2">
          <div className="flex items-center gap-3">
            <Logo />
            <Link
              href="/"
              className={`tracking-wider uppercase ${knewave.className}`}
            >
              API Ninja Hub
            </Link>
          </div>
          <Hambar />
          <ul
            className={`hidden md:flex items-center gap-6  ${open_sans.className} font-medium`}
          >
            <Link href="/" className="hover:underline underline-offset-2">
              Home
            </Link>
            <Link href="/docs" className="hover:underline underline-offset-2">
              Docs
            </Link>
            <Link
              href="https://github.com/mandorakannu/api-ninja-hub-next"
              target="_blank"
              className="hover:underline underline-offset-2"
            >
              GitHub
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
