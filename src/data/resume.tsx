import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Abderrahmane Hadar",
  initials: "A.H",
  url: "https://cv.myapps.lol",
  location: "Forlì, Italy",
  locationLink: "https://www.google.com/maps/place/Forli",
  description: "Developer by profession and a Teacher by heart. ❤️ , a software developer with 4 years of experience",
  summary:
    `I am an expert software engineer with a focus on <b>React.js</b>, <b>Next.js</b>, <b>Zustand</b>, and <b>TypeScript</b>.,
having experience in Node.js/MongoDB as well. I am also familiar with <b>DevOps</b> tools such
as <b>Docker</b> and <b>Jenkins</b> for continuous> integration and delivery.
<div>
I am passionate about creating a high-quality product that meets the needs and
expectations of both customers and end users and am always eager to learn in order to
stay up-to-date with the latest trends and technologies in my field.
</div>`,
  avatarUrl: "/me.png",

  skills: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Rest API",
    "Tailwind CSS",
    "Zustand",
    "React Query",
    "Git",
    "Docker",
    "CI/CD",
  ],

  additionalSkills: [
    "Redis",
    "PHP",
    "Laravel",
    "MySQL",
    "Postman",
    "MongoDB",
    "PostgreSQL",
    "React native",
    "graphql",
    ],

  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],

  contact: {
    email: "abdrr97@gmail.com",
    tel: "+39 XXX XXX XXXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abdrr97",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hadar-abderrahmane",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "InnovaTech Solutions",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Mid-Level Senior Full Stack Engineer",
      logoUrl: "/innovatech.png",
      start: "April 2022",
      end: "Present",
      description:
        "Pioneered Africa's premier flight reservation system, generating €1M+ revenue in its inaugural year. Architected a B2C flight booking platform integrating Amadeus API, enhancing system performance by 40%. Developed a multi-tenant SaaS property management solution, increasing client efficiency by 30%. Engineered a scalable e-commerce platform with advanced payment integration, boosting sales by 25%. Designed a real-time POS system with multi-device synchronization, reducing transaction time by 50%.",
    },
    {
      company: "3WA Digital Academy",
      href: "#",
      badges: [],
      location: "Casablanca, Morocco",
      title: "Frontend Developer & Instructor",
      logoUrl: "/3wa.png",
      start: "April 2021",
      end: "November 2021",
      description:
        "Developed and delivered an advanced React.js curriculum, training 50+ students. Achieved a 90% job placement rate through personalized mentoring and code reviews. Created practical projects simulating real-world scenarios, enhancing student learning outcomes.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/freelance.png",
      start: "March 2020",
      end: "April 2021",
      description:
        "Delivered end-to-end web solutions for diverse international clients. Implemented responsive designs and robust server-side architectures. Utilized Agile methodologies to ensure on-time project delivery and 100% client satisfaction.",
    },
  ],

  education: [
    {
      school: "Moroccan CIGMA University",
      href: "#",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/cigma.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "ISTA POLO",
      href: "#",
      degree: "Technical Diploma in Software Development",
      logoUrl: "/ista.png",
      start: "2017",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "Flight Reservation System",
      dates: "",
      active: true,
      description:
        "Led the development of Africa's first flight reservation system, utilizing React, TypeScript, and Styled Components. The platform generated over 1 million MAD in revenue within its first year.",
      technologies: [
        "React",
        "TypeScript",
        "Shadcn UI",
        "Tailwind CSS",
        "Amadeus API",
        "React-Query",
        "PostgreSQL",
        "Next.js",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://cv.myapps.lol",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source (Private)",
          href: "https://github.com/abdrr97",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/intern.png",
      video: "",
    },
    {
      title: "B2C Flight Booking Platform",
      href: "",
      dates: "",
      active: true,
      description:
        "Architected and implemented a flight booking platform with Next.js and React.js, integrating with Amadeus API, and incorporating caching and optimization techniques.",
      technologies: ["Next.js", "React.js", "Amadeus API"],
      links: [
        {
          type: "Website",
          href: "https://b2c.myapps.lol",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source (Private)",
          href: "https://github.com/abdrr97",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/b2c-image.png",
      video: "",
    },
    {
      title: "Multi-Tenant SaaS for Property Management",
      href: "",
      dates: "",
      active: true,
      description:
        "Designed and developed a multi-tenant SaaS platform for property management using Ant Design and Zustand, significantly improving operational efficiency for clients.",
      technologies: ["Ant Design", "Zustand"],
      links: [
        {
          type: "Website",
          href: "https://cv.myapps.lol",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source (Private)",
          href: "https://github.com/abdrr97",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/multi-tenant.png",
      video: "",
    },
    {
      title: "Scalable E-Commerce Solution",
      href: "",
      dates: "",
      active: true,
      description:
        "Engineered a scalable e-commerce solution with React.js, Zustand, and TailwindCSS, offering seamless payment gateway integration and optimized shopping cart functionality.",
      technologies: ["React.js", "Zustand", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://cv.myapps.lol",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source (Private)",
          href: "https://github.com/abdrr97",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Point of Sale (POS) System",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed a robust POS system using React.js and Styled Components, implementing real-time inventory updates and multi-device synchronization.",
      technologies: ["React.js", "Styled Components"],
      links: [
        {
          type: "Website",
          href: "https://cv.myapps.lol",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source (Private)",
          href: "https://github.com/abdrr97",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],

  hackathons: [],
};
