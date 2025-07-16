import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Aayush
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> inspired from <Link className="px-3 py-1 text-[0.7rem] uppercase tracking-wider  rounded-full dark:text-white/70"href="https://github.com/ByteGrad/portfolio-website/tree/063ec660e1ed58b6ce67d6aa95b93d6b12961a5a">Here</Link>
      </p>
    </footer>
  );
}
