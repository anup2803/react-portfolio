import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

import profileImg from "../assets/profile.png";
import projectImg1 from "../assets/project1.png";
import projectImg2 from "../assets/project2.png";
import projectImg3 from "../assets/project3.png";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React"],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "Flask"],
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Mobile Development",
    icon: FaMobileAlt,
    description:
      "Building cross-platform mobile applications with modern tools.",
    tags: ["React Native"],
  },
  // {
  //   title: "Cloud & DevOps",
  //   icon: FaCloud,
  //   description: "Deploying and managing applications in cloud environments.",
  //   tags: ["Docker"],
  // },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Figma"],
  },
];

export const projects = [
  {
    title: "Food-Delivery",
    description: "A food delivery menu items,add to cart, responsive design",
    image: projectImg1,
    tech: ["React js"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://anup2803.github.io/Food-Delivery/",
  },
  {
    title: "Dice Game",
    description: "A simple game like ludo . Guessing the number from 1-6.",
    image: projectImg2,
    tech: ["React js"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://anup2803.github.io/Dice-Game/",
  },
  {
    title: "Youtube Clone",
    description: "Youtube Clone using Youtube Api with react js .",
    image: projectImg3,
    tech: ["React JS"],
    icons: [FaReact],
    demo: "https://youtube-clone-yt3k.onrender.com",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
  //   image: projectImg4,
  //   tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
  //   icons: [FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "Chat App",
  //   description:
  //     "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description:
  //     "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // },
];

export const workData = [
  // {
  //   role: "Senior Frontend Developer",
  //   company: "TechCorp Inc.",
  //   duration: "2020 - Present",
  //   description:
  //     "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
  //   color: "purple",
  // },
  // {
  //   role: "Web Developer",
  //   company: "Digital Solutions LLC",
  //   duration: "2018 - 2020",
  //   description:
  //     "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
  //   color: "pink",
  // },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2024 - present",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue",
  },
];

export const Navheader = [
  { id: 1, header: "home", title: "Home" },
  { id: 2, header: "about", title: "About" },
  { id: 3, header: "skill", title: "Skills" },
  { id: 4, header: "projects", title: "Projects" },
  { id: 5, header: "experience", title: " Experience" },
  { id: 6, header: "contact", title: "Contact" },
];

export const github = "https://github.com/anup2803";
export const linkedin = "https://www.linkedin.com/in/anup-kumal-526a293a9/";
