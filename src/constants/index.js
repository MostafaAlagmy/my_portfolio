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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React & TypeScript Specialist",
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
    title: "Shopify Clone Project",
    company_name: "GitHub",
    icon: web, // يمكنك تغيير الأيقونة بما يناسب المشروع
    iconBg: "#383E56",
    date: "Jan 2024 - Present",
    
    points: [
      "Developed a fully functional e-commerce website using React, Tailwind CSS, Shadcn UI, and JavaScript.",
      "Implemented dual interfaces: a user-friendly shopping experience for customers and a dynamic admin dashboard for product and order management.",
      "Enabled users to browse, filter, search for products, and add products to the cart for purchase using PayPal integration.",
      "Implemented address management, allowing users to add and save their shipping addresses.",
      "Designed the admin panel to manage product listings, update the user interface, and track customer orders efficiently.",
      "Deployed the project on Vercel for seamless performance and accessibility.",
    ],
  },
 
  {
    title: "Snapgram Project",
    company_name: "GitHub",
    icon: mobile, // أيقونة مناسبة للمشروع
    iconBg: "#383E56",
    date: "Nov 2023 - Dec 2023",
    points: [
      "Built a social media platform using React.js, TypeScript, and Tailwind CSS.",
      "Managed server state with React Query for efficient data fetching.",
      "Implemented user authentication, dynamic content rendering, and responsive UI with Shadcn UI.",
      "Deployed the project on Vercel for public access.",
    ],
  },

  {
    title: "Movie Website Project",
    company_name: "GitHub",
    icon: starbucks, // يمكنك تغيير الأيقونة بما يناسب المشروع
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Developed a movie website with user authentication (Login & Register) using React and JavaScript.",
      "Created a homepage displaying a collection of movies, series, and characters with interactive UI.",
      "Enabled users to view detailed information about movies, series, and characters.",
      "Focused on seamless navigation and responsive design for an optimal user experience across devices.",
      "Integrated API for fetching movie and series data, enhancing content accessibility.",
      "Deployed the project on Vercel for efficient performance and access.",
    ],
  },
 
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
    name: "E-commerce Project",
    description:
    
"A web-based e-commerce platform that allows users to browse, filter, and purchase products across various categories. Featuring a user-friendly shopping cart, PayPal integration for secure payments, and an admin panel for managing products, orders, and user interactions, providing a seamless and efficient shopping experience."

,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn ui",
        color: "blue-text-gradient",
      },
    ],
    image: shopify,
    source_code_link: "https://github.com/MostafaAlagmy/Shopify",
    live_demo: "https://shopify-pearl.vercel.app",
  },
  {
    name: "instagram clone ",
    description:
      
"A web-based social platform that allows users to create, view, and interact with posts. With features like following other users, liking and commenting on content, and real-time updates, this platform provides a seamless and engaging social experience."

,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ts",
        color: "green-text-gradient",
      },
      {
        name: "tailwand css",
        color: "pink-text-gradient",
      },
      {
        name: "react query",
        color: "green-text-gradient",
      },
      {
        name: "chadcn  ui",
        color: "pink-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: meta,
    source_code_link: "https://github.com/MostafaAlagmy/insta-clone",
    live_demo: "https://insta-clone-alpha-six.vercel.app/",

  },
  {
    name: "movie app",
    description:

    "A web-based platform that allows users to browse, search, and view detailed information about movies, TV shows, and characters. With features like user authentication (Login/Register), an interactive homepage, and a responsive design, this app offers an engaging and seamless experience for movie enthusiasts."  ,
      tags: [
      {
        name: "react ",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://github.com/MostafaAlagmy/movieApp",
    live_demo: "https://movie-app-khaki-five.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
