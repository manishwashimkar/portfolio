import {
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaNodeJs,
  FaReact,
  FaServer,
  FaTwitter,
} from "react-icons/fa6";
import { SiExpress, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Years building products", value: "3+" },
  { label: "Projects completed", value: "12+" },
  { label: "Core focus", value: "MERN + UX" },
];

export const highlights = [
  "Build performant React interfaces with maintainable component systems.",
  "Design clean REST APIs with Express, MongoDB, and predictable validation flows.",
  "Collaborate across product, design, and engineering to ship polished experiences.",
];

export const techStack = [
  { name: "MongoDB", icon: SiMongodb, tone: "from-emerald-500/20 to-emerald-500/5" },
  { name: "Express", icon: SiExpress, tone: "from-slate-500/20 to-slate-500/5" },
  { name: "React", icon: FaReact, tone: "from-cyan-500/20 to-cyan-500/5" },
  { name: "Node.js", icon: FaNodeJs, tone: "from-lime-500/20 to-lime-500/5" },
  { name: "JavaScript", icon: SiJavascript, tone: "from-amber-500/20 to-amber-500/5" },
  { name: "Tailwind CSS", icon: SiTailwindcss, tone: "from-sky-500/20 to-sky-500/5" },
  { name: "REST APIs", icon: FaServer, tone: "from-rose-500/20 to-rose-500/5" },
  { name: "Data Modeling", icon: FaDatabase, tone: "from-violet-500/20 to-violet-500/5" },
];

export const experienceTimeline = [
  {
    period: "2024 - Present",
    title: "Full-Stack Developer",
    company: "Freelance / Product Collaborations",
    summary:
      "Delivered responsive web apps, admin dashboards, and API integrations with a strong focus on maintainability and user experience.",
  },
  {
    period: "2023 - 2024",
    title: "Frontend Developer",
    company: "Startup Projects",
    summary:
      "Built reusable React components, improved lighthouse scores, and helped move product ideas from rough prototypes to production-ready interfaces.",
  },
  {
    period: "2022 - 2023",
    title: "JavaScript Developer",
    company: "Independent Learning & Client Work",
    summary:
      "Strengthened core JavaScript, backend fundamentals, and database design while shipping practical solutions for real business needs.",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/manishwashimkar", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/manishwashimkar", icon: FaLinkedinIn },
  { label: "Twitter", href: "https://twitter.com/manishwashimkar", icon: FaTwitter },
  { label: "Email", href: "mailto:manishwashimkar45@gmail.com", icon: FaEnvelope },
];
