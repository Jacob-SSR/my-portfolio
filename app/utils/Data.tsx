import type { JSX } from "react";
import { Github } from "lucide-react";

export interface TimelineItem {
  date: string;
  company_name: string;
  title: string;
  points: (string | JSX.Element)[];
  icon?: string;
}

export const experiences = [
  {
    title: "IT Support ( Internship )",
    company_name: "Prakhonchai Hospital",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvuwnqmdGUJMAIZTO2ezf1eiK4vy5sOPi-A&s",
    date: "January 2025 - February 2025",
    points: [
      `Provided hardware and software maintenance for hospital computers.`,
      `Installed Windows 10/11 and configured shared printers over LAN.`,
      `Connected and maintained LAN network infrastructure.`,
      `Coordinated with internal staff to resolve IT issues.`,
    ],
  },
  {
    title: "Backend ( Internship )",
    company_name: "Billion B Property",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQErofdkQGfuEATz0ceGxSvSqkW9x1oq-auXw&s",
    date: "November 2024 - January 2025",
    points: [
      `Tested and reported website issues to the development team.`,
      `Edited promotional videos and created social media content.`,
      `Coordinated with internal teams and external agencies for project alignment.`,
    ],
  },
];

export const education = [
  {
    company_name: "Software Park Codecamp Thailand #19",
    title: "Learning Full Stack JavaScript For Web Developer",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFLLKA1qotA3CDyrk7HZCYJLkrh3TWLnFjw&s",
    date: "December 2024 - April 2025",
    points: [
      <>
        <a
          href="/assets/Certificate Codecamp.jpg"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-cyan-800"
        >
          Download Certificate
        </a>
      </>,
    ],
  },
  {
    company_name: "Buriram Rajabhat University",
    title: "Bachelor Degree in Business Computer",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbLmN7fSG0cTjyrc5BdIKkOJamgJ5EIZKSK0YfltaTN-fbZTa2EXykvLSxhSBBCHOcjY&usqp=CAU",
    date: "July 2020 - March 2024",
    points: [],
  },
  {
    company_name: "Prakhonchai Pittayakhom School",
    title: "High School Career and Technology Education Program",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtj0xsGZ0NxpSENU0SYpynS8We5fSso8t78a8RRdXvdS358jOiiY0iF2OAoWHXJr0M_Os&usqp=CAU",
    date: "2012 - 2019",
    points: [],
  },
];

export const projects = [
  {
    title: "SHOESHOE",
    description:
      "An e-commerce website for smart shoe shopping with modern UI and AI-powered personalized product recommendations.",
    points: [
      "Revolutionized online shoe shopping with an intuitive, user-friendly design.",
      "Integrated AI-powered features for personalized shopping experiences.",
      "Provided robust business management tools for efficient store management.",
    ],
    link: {
      label: "GitHub",
      href: "https://github.com/Jacob-SSR",
      icon: <Github size={16} />,
    },
  },
  {
    title: "GREENCART",
    description:
      "An e-commerce website for fresh vegetable shopping with modern UI and convenient home delivery service.",
    points: [
      "Developed a full-featured e-commerce platform with product browsing, cart functionality, checkout, and order management.",
      "Implemented secure authentication and authorization using JWT.",
      "Integrated Stripe for secure and seamless online payments.",
    ],
    link: {
      label: "Live Demo",
      href: "https://greencart-wine.vercel.app/",
    },
  },
  {
    title: "JUMPKING 2D",
    description: `A 2D platformer made with Unity and C#.
Play as a fox on a vertical journey to find a legendary PC repair master in the sky.
Features precise jumping, challenging level design, and pixel art style.`,
    points: [
      "Developed a 2D platformer adventure game using Unity and C#.",
      "Designed and implemented precise jumping mechanics and platforming challenges.",
      "Created a story-driven experience about a fox’s journey to find a legendary PC repair master.",
    ],
    link: {
      label: "GitHub",
      href: "https://github.com/Jacob-SSR/jumpking-unity",
      icon: <Github size={16} />,
    },
  },
];
