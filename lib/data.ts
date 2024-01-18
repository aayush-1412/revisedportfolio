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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Tilicho Fintech (FreeBird) ",
    location: "SDE Intern",
    description:"Developed and implemented an internal sales management tool, streamlining lead generation and user filtering processes for improved efficiency and productivity. Also developed frontend feature for seamless user data synchronization with Google Drive for the FreeBird App",
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

  "Framer Motion",
] as const;
