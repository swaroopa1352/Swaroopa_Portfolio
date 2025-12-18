export type Project = {
  id: string;
  title: string;
  blurb: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl: string;
  details: {
    problem: string;
    solution: string;
    features: string[];
    role: string;
    challenges: string[];
    architecture: string; // image path
  };
};

export const SOCIALS = {
  github: "https://github.com/swaroopa1352",
  linkedin: "https://www.linkedin.com/in/naga-swaroopa-nidadavolu/",
  email: "mailto:nnagaswaroopa13@gmail.com"
};

// Optional profile/contact fields used by the Contact section.
// Update these with your real details (safe defaults provided).
export const CONTACT = {
  // Add a phone number to enable phone display in contact section.
  // phone: "+1 (908) 476-8246",
  phone: undefined as string | undefined,
  location: "Harrison, NJ (Open to Relocation)"
};

export const HERO = {
  name: "Naga Swaroopa Nidadavolu",
  headline: "Open to Full-Time Opportunities",
  // tagline: "I build data-driven products and GenAI experiences with Next.js, Node.js, and modern cloud."
};

export const SKILLS = {
  frontend: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "UI/UX Design"],
  backend: ["Node.js", "Django", "RESTful APIs", "Spring Boot", "Fetch API", "Apache Kafka"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Prisma"],
  tools: ["Power BI", "Tableau", "Git", "GitHub", "SDLC" ],
  certifications: ["Oracle AI Certification"],
};

// Technical Skills data organized for tabbed view
export const TECHNICAL_SKILLS = {
  language: [
    "Java",
    "Python",
    "JavaScript",
    "C",
    "HTML",
    "CSS",
  ],
  // frameworks: [
  //   "React.js",
  //   "Node.js",
  //   "Next.js",
  //   "Flask",
  //   "Express.js",
  //   "Tailwind CSS",
  //   "Bootstrap",
  //   "Django",
  //   "Spring Boot",
  //   "RESTful APIs",
  //   "React Native",
  // ],
  mlData: [
    "TensorFlow",
    "scikit-learn",
    "PyTorch",
    "LLMs",
    "Prompt Engineering",
    "RAG",
  ],
  web3: ["Hardhat", "Web3.js", "Ethers.js"],
  devops: ["AWS", "Azure","Docker", "Kubernetes", "CI/CD", "Jenkins"],
  concepts: ["DSA", "OOP", "Design Patterns", "REST", "CI/CD", "Microservices"],
} as const;

export type ExperienceItem = {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    company: "XTGlobal",
    // companyUrl: "https://www.xtglobal.com", // add if desired
    location: "Plano, TX",
    period: "Sep 2025 – Present",
    bullets: [
      "Designed and developed scalable web applications using Java (Spring Boot) and Node.js (Express), building and documenting RESTful APIs for seamless integration across internal and third-party systems.",
      "Contributed to full-stack development with React, Next.js, and TypeScript, creating responsive, reusable UI components styled with TailwindCSS to enhance user experience.",
      "Optimized database performance in PostgreSQL and SQL Server, automated CI/CD pipelines with Jenkins, containerized applications using Docker, and deployed solutions on AWS for reliable, scalable delivery."
    ]
  },
  {
    title: "Data Engineer",
    company: "M.V.V. Builders",
    location: "Andhra Pradesh, India",
    period: "Jul 2021 – Jun 2023",
    bullets: [
      "Designed and optimized data integration pipelines in Azure Data Factory and PySpark, transforming multi-source datasets into structured layers for downstream applications.",
      "Built automated validation and error-handling modules, improving pipeline reliability and data accuracy by 95%.",
      "Developed CI/CD workflows with Jenkins, reducing manual release effort and improving consistency across environments.",
      "Implemented role-based access control and encryption to ensure secure data access, aligning with compliance standards."
    ]
  }
];

export type Certification = {
  title: string;
  period: string; // e.g., Certified / Completed or date
  image: string; // path to certificate image
  url?: string; // optional link to credential
  issuer?: string;
  summary?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "J.P.Morgan - Software Engineering Virtual Experience Program",
    issuer: "Forage",
    period: "Nov 2025",
    image: "/images/certificates/placeholder.svg",
    url: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_ssGL3NxiG6sjx3Cpm_1762392728564_completion_certificate.pdf"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Generative AI Professional Certified",
    issuer: "Oracle",
    period: "Oct 2024",
    image: "/images/certificates/placeholder.svg",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BA56EC286821ED36A4739FE67DC08A9B207922239DF4C370EBF67524C195DCFA"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    period: "Oct 2025",
    image: "/images/certificates/placeholder.svg",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BA56EC286821ED36A4739FE67DC08A9B207922239DF4C370EBF67524C195DCFA"
  },
  {
    title: "Prompt Engineering & Programming with OpenAI",
    issuer: "Columbia+",
    period: "July 2025",
    image: "/images/certificates/placeholder.svg",
    url: "https://badges.plus.columbia.edu/c54877e7-bdb1-45a4-a299-ce8d673733c8#acc.y6z2lbAh"
  },
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University(Coursera)",
    period: "Jan 2022",
    image: "/images/certificates/placeholder.svg",
    url: "https://www.coursera.org/account/accomplishments/verify/EZBTMS8TE67W"
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    period: "Nov 2021",
    image: "/images/certificates/placeholder.svg",
    url: "https://www.credly.com/badges/b35f3ead-5e8d-47ec-9e3b-e6f941c2a65e"
  },
  {
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    period: "Dec 2021",
    image: "/images/certificates/placeholder.svg",
    url: "https://www.credly.com/badges/09e25330-6892-439f-8551-b13bf795a2e4"
  },
];

export type Education = {
  level: "Masters" | "Bachelors" | "Certificate" | string;
  program: string;
  institution: string;
  period: string; // e.g., May 2025
  gpa?: string; // e.g., 4.0/4.0
  coursework?: string[];
  details?: string[]; // optional additional bullet points
};

export const EDUCATION: Education[] = [
  {
    level: "Masters",
    program: "Master of Science in Computer Science",
    institution: "New Jersey Institute of Technology (NJIT)",
    period: "May 2025",
    gpa: "3.5/4.0",
    // coursework: [
    //   "Artificial Intelligence",
    //   "Database Systems",
    //   "Machine Learning",
    //   "Big Data",
    //   "Visualization and Visual Analytics"
    // ]
  },
  {
    level: "Bachelors",
    program: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
    period: "Apr 2023",
    gpa: "3.4/4.0"
  }
];

// Ordered so first 5 are showcased; remainder revealed via "Other Projects" toggle.
export const PROJECTS: Project[] = [
  {
    id: "every-day-planner",
    title: "Every Day Planner",
    blurb: "A full-stack, production-ready daily planning application with secure authentication, real-time reminder notifications, and persistent data storage. Built with modern web technologies." ,
    image: "/images/projects/EDP.png",
    tech: ["Next.js","React", "Node.js","PostgreSQL", "Prisma","Tailwind CSS", "TypeScript"],
    liveUrl: "https://every-day-planner.vercel.app/",
    sourceUrl: "https://github.com/swaroopa1352/EveryDay_Planner/blob/main/README.md",
    details: {
      problem: "Urban drivers struggle to find reliable parking availability.",
      solution: "Geo-indexed listings, real-time availability flags, and reservation workflow.",
      features: ["Search by area", "Reserve spot", "Listing management"],
      role: "Full-stack developer",
      challenges: ["Accurate geo queries", "Preventing double booking"],
      architecture: "/images/architecture/architecture-sample.svg"
   }
 },
  {
    id: "job-recommendation-system",
    title: "Job Recommendation System",
    blurb: "Data-driven platform recommending jobs based on profile, skills, and preferences.",
    image: "/images/projects/JB.png",
    tech: ["React.js", "Scikit-learn", "Django", "PostgreSQL", "AI"],
    liveUrl: "https://example.com/job-recommendation", // replace with real
    sourceUrl: "https://github.com/swaroopa1352/Job_Recommendation_System/tree/main/Job-Recommendation-System-main", // replace with real
    details: {
      problem: "Manual background removal is time-consuming and inconsistent.",
      solution: "Implemented a segmentation pipeline + matte refinement, wrapped in a fast Next.js UI.",
      features: ["Drag & drop", "Segmentation", "Preview/export", "Dark mode"],
      role: "Full-stack + AI integration",
      challenges: ["Edge detection tuning", "Optimizing inference latency"],
      architecture: "/images/architecture/architecture-sample.svg"
    }
  },
  {
    id: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    blurb: "The Web-based application allows users to play Tic-Tac-Toe with an AI opponent that uses the Minimax algorithm for optimal moves.",
    image: "/images/projects/Tic-tac-toe.png",
    tech: ["Django", "Django ORM", "Python", "HTML5", "CSS3", "JavaScript(ES6)", "Fetch API"],
    liveUrl: "https://example.com/nextalk",
    sourceUrl: "https://github.com/swaroopa1352/TicTacToe_Advanced",
    details: {
      problem: "Remote teams need lightweight, secure video meetings without heavy setup.",
      solution: "Implemented WebRTC rooms, token-secured access, and scheduled meeting flows.",
      features: ["Create/join meetings", "Screen share", "Recording", "Auth"],
      role: "Full-stack engineer",
      challenges: ["Handling network quality variance", "Recording persistence"],
      architecture: "/images/architecture/architecture-sample.svg"
    }
  },
  {
    id: "sudoko-game",
    title: "Sudoko Game",
    blurb: "Full-stack web application with a real-time solver, difficulty-graded puzzles, and a global leaderboard, built using a modern TypeScript-focused tech stack.",
    image: "/images/projects/Su.png",
    tech: ["React", "Vite", "TypeScript","Tailwind CSS", "Fastify", "PostgreSQL", "Prisma", "Docker"],
    liveUrl: "https://example.com/swiggy",
    sourceUrl: "https://github.com/swaroopa1352/Sudoko",
    details: {
      problem: "Recreate modern food delivery UX for learning state management.",
      solution: "Structured modular Redux slices, route-based data fetching and responsive UI.",
      features: ["Search", "Cart", "Restaurant menus", "Responsive layout"],
      role: "Frontend developer",
      challenges: ["Caching menu data", "Optimizing bundle size"],
      architecture: "/images/architecture/architecture-sample.svg"
    }
  },
  {
    id: "smart-cctv-system",
    title: "Smart CCTV System",
    blurb: "Smart CCTV project utilizes computer vision and Machine Learning to automate and enhance security monitoring, including noise detection, and face/visitor identification, thereby decreasing reliance on human security personnel.",
    image: "/images/projects/CCTV.jpg",
    tech: ["Python","Machine Learning", "Computer Vision","OpenCV", "Responsive Design"],
    liveUrl: "https://example.com/nike",
    sourceUrl: "https://github.com/swaroopa1352/Smart_CCTV",
    details: {
      problem: "Showcase clean product storytelling and conversion-focused layout.",
      solution: "Accessible semantic structure, responsive grid, and subtle motion cues.",
      features: ["Responsive hero", "Feature sections", "CTA buttons"],
      role: "Frontend engineer",
      challenges: ["Maintaining design fidelity", "Animation performance"],
      architecture: "/images/architecture/architecture-sample.svg"
    }
  },
  {
    id: "yoga-pose-detection",
    title: "Yoga Pose Detection",
    blurb: "This project is a website that utilizes real-time pose detection with 95% accuracy to automatically assess and guide users in performaing Yoga asanas correctly and safely without an instructor.",
    image: "/images/projects/YogaPose.jpg",
    tech: ["Movenet", "HTML5", "CSS3", "JavaScript(ES6)","ml5.js","Bootstrap","TensorFlow.js"],
    liveUrl: "https://example.com/soundzone",
    sourceUrl: "https://github.com/your-username/soundzone",
    details: {
      problem: "Fragmented discovery experience across multiple music sources.",
      solution: "Unified interface with curated lists and client-side caching for snappy playback.",
      features: ["Play/pause", "Seek", "Playlist management", "Favorites"],
      role: "Full-stack developer",
      challenges: ["Preloading audio", "State sync across components"],
      architecture: "/images/architecture/architecture-sample.svg"
    }
  },
  // // Other projects (hidden until toggle)
  // {
  //   id: "car-parking",
  //   title: "Car Parking",
  //   blurb: "Community-driven parking spot listing and reservation system.",
  //   image: "/images/projects/car-parking-thumb.svg",
  //   tech: ["Next.js", "PostgreSQL", "Map API", "Tailwind CSS"],
  //   liveUrl: "https://example.com/car-parking",
  //   sourceUrl: "https://github.com/your-username/car-parking",
  //   details: {
  //     problem: "Urban drivers struggle to find reliable parking availability.",
  //     solution: "Geo-indexed listings, real-time availability flags, and reservation workflow.",
  //     features: ["Search by area", "Reserve spot", "Listing management"],
  //     role: "Full-stack developer",
  //     challenges: ["Accurate geo queries", "Preventing double booking"],
  //     architecture: "/images/architecture/architecture-sample.svg"
  //   }
  // },
  // {
  //   id: "auth-crud-app",
  //   title: "Job Recommendation System",
  //   blurb: "Full-stack CRUD with authentication and role-based access.",
  //   image: "/images/projects/auth-crud-thumb.svg",
  //   tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind", "JWT"],
  //   liveUrl: "https://example.com",
  //   sourceUrl: "https://github.com/your-username/auth-crud-app",
  //   details: {
  //     problem: "Build secure user management with protected content and CRUD operations.",
  //     solution: "Implemented JWT auth, RESTful API routes, and responsive UI with optimistic updates.",
  //     features: ["JWT auth", "Protected routes", "CRUD", "Form validation", "Responsive design"],
  //     role: "Full-stack developer",
  //     challenges: ["Handling token refresh securely", "Database migrations with zero downtime"],
  //     architecture: "/images/architecture/architecture-sample.svg"
  //   }
  // },
  // {
  //   id: "rest-api-db",
  //   title: "REST API + DB",
  //   blurb: "Typed REST API with database integration and caching.",
  //   image: "/images/projects/rest-api-thumb.svg",
  //   tech: ["Node.js", "Express", "TypeScript", "MongoDB", "Redis"],
  //   liveUrl: undefined,
  //   sourceUrl: "https://github.com/your-username/rest-api-db",
  //   details: {
  //     problem: "Provide scalable API endpoints with validation and persistence.",
  //     solution: "Zod-validated endpoints, MongoDB for persistence, and Redis caching for hotspots.",
  //     features: ["Input validation", "Pagination", "Rate limiting", "Caching"],
  //     role: "Backend engineer",
  //     challenges: ["Designing stable API contracts", "Query performance tuning"],
  //     architecture: "/images/architecture/architecture-sample.svg"
  //   }
  // },
  // {
  //   id: "viz-tool",
  //   title: "Algo Visualization",
  //   blurb: "Interactive visualizations for classic algorithms and data structures.",
  //   image: "/images/projects/viz-tool-thumb.svg",
  //   tech: ["Next.js", "TypeScript", "Canvas", "Tailwind"],
  //   liveUrl: "https://example.com",
  //   sourceUrl: "https://github.com/your-username/algorithms-visualizer",
  //   details: {
  //     problem: "Make complex algorithms intuitive via animated visuals.",
  //     solution: "Canvas-based animations with step controls and performance-safe rendering.",
  //     features: ["Play/pause/step", "Speed control", "Responsive canvas"],
  //     role: "Frontend engineer",
  //     challenges: ["Animation performance", "Responsive rendering across devices"],
  //     architecture: "/images/architecture/architecture-sample.svg"
  //   }
  // }
];
