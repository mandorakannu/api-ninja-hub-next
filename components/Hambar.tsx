"use client";
import styles from "../assets/styles/Hambar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "700"],
});

export default function Hambar() {
  const [hambar, setHambar] = useState("hidden");
  const hambarMenu = (): void => {
    setHambar(hambar === "hidden" ? "" : "hidden");
  };
  return (
    <>
      <div className="sm:hidden flex justify-between items-center py-2 px-4">
        <RxHamburgerMenu className="text-2xl" onClick={hambarMenu} />
      </div>
      <div
        className={`${hambar} ${outfit.className} flex flex-col justify-around items-end px-6 absolute right-0 top-16 w-full transition-all delay-150 ease-in-out ${styles.slide} bg-white `}
        onClick={hambarMenu}
      >
        <Link href="/" className="p-4 border-b border-white w-full text-end">
          Home
        </Link>
        <Link
          href="/docs"
          className="p-4 border-b border-white w-full text-end"
        >
          Docs
        </Link>
        <Link
          href="https://github.com/mandorakannu/api-ninja-hub-next"
          target="_blank"
          className="p-4 border-b border-white w-full text-end"
        >
          GitHub
        </Link>
      </div>
    </>
  );
}
