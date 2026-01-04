import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
    shopify,

  onTask,
  ChinaGitway,
  sochial,
 

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React & Next.js Specialist",
    icon: mobile,
  },
  {
    title: "State Management with Redux Toolkit & React Query",
    icon: backend,
  },
  {
    title: "UI/UX Designer with Tailwind CSS & Shadcn UI",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
 
];


const experiences = [
   {
    title: "Front-End Developer",
    company_name: "AlexApps",
    icon: web, // ضع أيقونة مناسبة لشركة AlexApps
    iconBg: "#383E56",
    date: "Nov 2024 – Present",
    points: [
      "Built scalable and user-friendly interfaces using React.js and Shadcn UI, following clean code principles.",
      "Created and maintained an admin dashboard to efficiently manage and monitor system operations.",
      "Optimized front-end performance to improve load times and deliver a smoother user experience.",
      "Designed and launched client-facing web applications across different industries, contributing to high client satisfaction.",
      "Implemented efficient state management solutions using Redux Toolkit and React Query to handle complex data flows.",
      "Delivered digital products for the Picalica platform, meeting high-quality standards and supporting strong sales performance.",
    ],
  },
  {
  title: "Front-End Developer",
  company_name: "Freelance",
  icon: web, // ضع أيقونة مناسبة للفريلانس
  iconBg: "#383E56",
  date: "Mar 2024 – Oct 2024",
  points: [
    "Collaborated with a team to build modern web applications using best front-end practices.",
    "Converted Figma designs into pixel-perfect, fully responsive UI components using Shadcn UI and Tailwind CSS, ensuring consistency across all screen sizes.",
    "Developed interactive dashboards and admin panels for SaaS projects, improving client management workflows.",
    "Implemented efficient state management solutions using Redux Toolkit and React Query to handle dynamic data.",
    "Optimized front-end performance and ensured smooth user experience across multiple devices and browsers.",
    "Integrated APIs to fetch and manage data, ensuring seamless communication between front-end and back-end systems.",
    "Delivered high-quality web applications for clients across different industries, maintaining timelines and standards.",
  ],
}
,
 
 
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "OnTask – Multi-Dashboard Service Platform",
    description:
      "Developed a service management platform with three dashboards for admin, merchant companies, and technician companies. The system enables full admin control, service and location management, technician supervision, and customer and order management for merchants.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "next.js", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "shadcn ui", color: "blue-text-gradient" },
      { name: "redux toolkit", color: "green-text-gradient" },
      { name: "react query", color: "pink-text-gradient" },
    ],
    image: onTask, 
    source_code_link: "#", 
    live_demo: "#", 
  },
  {
    name: "ChinaGate Platform",
    description:
      "Developed a dual-dashboard platform for importers and merchants to manage orders, inventory, supply operations, and financial accounts. Importers can create and track orders, monitor accounts, and follow shipment status, while merchants manage warehouses and supply workflows through a centralized system.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "next.js", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "shadcn ui", color: "blue-text-gradient" },
      { name: "redux toolkit", color: "green-text-gradient" },
      { name: "react query", color: "pink-text-gradient" },
    ],
    image: ChinaGitway,
    source_code_link: "https://github.com/MostafaAlagmy/ChinaGate",
    live_demo: "https://chinagate-live-demo.vercel.app",
  },
  {
    name: "Full E-Commerce Platform",
    description:
      "Developed a complete e-commerce system with a customer-facing store and an admin dashboard. Implemented product browsing, cart management, search and filtering, PayPal payments, and full admin control over products and orders.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "shadcn ui", color: "pink-text-gradient" },
      { name: "tailwind css", color: "blue-text-gradient" },
      { name: "redux toolkit", color: "green-text-gradient" },
    ],
    image: shopify,
    source_code_link: "https://github.com/MostafaAlagmy/Shopify",
    live_demo: "https://shopify-pearl.vercel.app/",
  },
  {
    name: "Social Media Platform",
    description:
      "Developed a social media application that allows users to create posts and browse published content from other users. Implemented real-time data handling using React Query and built the UI with React, TypeScript, and Tailwind CSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "react query", color: "pink-text-gradient" },
      { name: "shadcn ui", color: "blue-text-gradient" },
      { name: "redux toolkit", color: "green-text-gradient" },
      { name: "tailwind css", color: "pink-text-gradient" },
    ],
    image: sochial,
    source_code_link: "https://github.com/MostafaAlagmy/snapgram",
    live_demo: "https://insta-clone-alpha-six.vercel.app/",
  },
];


export { services, technologies, experiences, testimonials, projects };
