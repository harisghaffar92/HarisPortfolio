export const projects = [
  {
    id: "campusconnect",
    name: "CampusConnect",
    type: "Final Year Project (FYP) — Full-Stack Job & Career Portal",
    subtitle: "Find Your Dream Career — Connect with alumni, discover opportunities perfectly matched to your skills, and launch your career from University of Sahiwal.",
    featured: true,
    image: "/projects/campusconnect.png",
    highlights: [
      "Full-stack job portal for students, alumni, and employers using Django REST Framework and React",
      "Automated Skill & Experience Matching Algorithm (87% Match React Dev, 76% UI/UX Designer)",
      "JWT Stateless Authentication & Role-Based Access Control (Student, Alumni, Employer, Admin)",
      "Dynamic Resume Management & Applicant Tracking System",
      "Real-time In-App Notifications & Admin Content Moderation Features",
      "Responsive UI designed for University of Sahiwal placement ecosystem"
    ],
    technologies: ["React", "Django REST Framework", "JWT", "PostgreSQL / SQLite", "Tailwind CSS"],
    problem: "University career offices struggle to match student capabilities with employer requirements efficiently, leading to fragmented hiring processes and lost job opportunities.",
    solution: "CampusConnect bridges the gap with a centralized platform featuring skill matching, verified employer postings, role-based workflows, and automated resume management.",
    architecture: "Built with a decoupled React SPA frontend communicating via RESTful APIs with a Django REST backend, employing JWT authentication and granular database permissions.",
    github: "https://github.com/harisghaffar92/campusconnect",
    liveDemo: "",
    metrics: [
      { label: "Students Enrolled", value: "2,400+" },
      { label: "Alumni Network", value: "850+" },
      { label: "Jobs Posted", value: "320+" },
      { label: "Placements", value: "180+" }
    ]
  }
];
