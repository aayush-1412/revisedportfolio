"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">I am a full-stack web developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I have one year of experience and currenlty lookin for jobs in Software developer domain. I am language and framework agnostic and also available for freelance work.
      </p>

     
    </motion.section>
  );
}
