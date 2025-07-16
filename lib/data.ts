import React from "react";

import { FaReact } from "react-icons/fa";

import buychai from "@/public/buychai.png"
import jobapi from "@/public/jobapi.png"
import billsplit from "@/public/billsplit.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "PricewaterhouseCoopers (PwC)",
    location: "Specialist, Kolkata",
    description:
      "Built an internal data platform from scratch with features like data cataloging, profiling, and quality checks. Integrated LLM-based insights for auto-generating data summaries. Also developed a full-stack PWA with SSO and a real-time chatbot for an e-commerce client.",
    icon: React.createElement(FaReact),
    date: "Sept 2024 - Present",
  },
  {
    title: "Tilicho Fintech (FreeBird)",
    location: "SDE Intern, Remote",
    description:
      "Developed a full-stack internal sales management tool that improved lead conversion by 40%. Built user filtering workflows and integrated Google Drive sync in the FreeBird App for seamless data access.",
    icon: React.createElement(FaReact),
    date: "June 2023 - Sept 2023",
  },
] as const;


export const projectsData = [
  {
    title: "Buy Me a Cutting Chai",
    description:
      "My crypto twist on 'buy me a coffee with an Indian touch of chai.It is a decentralized blockchain website using Next.js, Polygon, and Solidity, enabling content creators to create campaign pages for crowdfunding purposes.",
    tags: ["React"],
    imageUrl: buychai,
    repoLink:"https://github.com/aayush-1412/BuyMeCuttingChai",
    liveLink:"https://buy-me-cutting-chai.vercel.app"
  },
  {
    title: "Job REST API",
    description:
      "Designed and implemented RESTful endpoints to facilitate seamless communication between the frontend and backend components also implemented JWT tokens for secure authentication and authorization",
    tags: ["Node js", "Express", "JWT", "MongoDB"],
    imageUrl: jobapi,
    repoLink:"https://github.com/aayush-1412/jobApi",
    liveLink:"https://job-api-mnp0.onrender.com"
  },
  {
    title: "Bill splitter",
    description:
      " A MERN stack project for bill splitting among friends for seamless management of bills",
    tags: ["React", "Node js", "Express"],
    imageUrl: billsplit,
    repoLink:"https://github.com/aayush-1412/moneyTracker",
    liveLink:"https://trackermoney.vercel.app/"
  },
] as const;

export const skillsData = [
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Docker",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Redis",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
