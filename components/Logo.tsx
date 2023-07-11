import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={width ? width : 50}
        height={height ? height : 50}
        className="rounded-full shadow-md shadow-blue-400"
      />
    </Link>
  );
}
