import Link from "next/link";
import Logo from "./Logo";
import { Knewave } from "next/font/google";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
const knewave = Knewave({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-gray-600 body-font border-t-2 border-t-teal-300">
      <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-full shadow-md shadow-blue-400"
          />
          <span className={`ml-3 text-xl uppercase ${knewave.className}`}>
            API Ninja Hub
          </span>
        </Link>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {currentYear} —
          <Link
            href="https://github.com/mandorakannu"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @mandorakannu
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link
            href="https://www.github.com/mandorakannu"
            target="_blank"
            className="text-gray-500 text-2xl hover:text-slate-400"
          >
            <AiFillGithub />
          </Link>
          <Link
            href="https://www.instagram.com/mandorakannu"
            target="_blank"
            className="ml-3 text-gray-500 text-2xl hover:text-pink-400"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://www.twitter.com/KannuMandora"
            target="_blank"
            className="ml-3 text-gray-500 text-2xl hover:text-blue-500"
          >
            <AiFillTwitterCircle />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mandorakannu"
            target="_blank"
            className="ml-3 text-gray-500 text-2xl hover:text-blue-400"
          >
            <AiFillLinkedin />
          </Link>
        </span>
      </div>
    </footer>
  );
}
