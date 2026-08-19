export const projects = [
  {
    id: "campusconnect",
    name: "CampusConnect",
    type: "Full-Stack Job & Career Portal",
    subtitle: "Enterprise-grade career platform linking students, alumni, and verified employers with intelligent skill matching.",
    featured: true,
    image: "/projects/campusconnect.png",
    highlights: [
      "Role-Based Access Control (Student, Alumni, Employer, Admin)",
      "Automated Skill & Experience Matching Algorithm",
      "JWT Security & Token Refreshes",
      "Dynamic Resume Uploads & Applicant Tracking System",
      "Real-time In-App Notifications & Email Alerts",
      "Admin Moderation & Content Verification"
    ],
    technologies: ["React", "Django REST Framework", "JWT", "PostgreSQL / SQLite", "Tailwind CSS"],
    problem: "University career offices struggle to match student capabilities with employer requirements efficiently, leading to fragmented hiring processes and lost job opportunities.",
    solution: "CampusConnect bridges the gap with a centralized platform featuring skill matching, verified employer postings, role-based workflows, and automated resume management.",
    architecture: "Built with a decoupled React SPA frontend communicating via RESTful APIs with a Django backend, employing JWT stateless authentication and granular database permissions.",
    github: "https://github.com/harisghaffar92/campusconnect",
    liveDemo: "",
    metrics: [
      { label: "User Roles", value: "4 Portals" },
      { label: "Architecture", value: "Decoupled REST API" },
      { label: "Security", value: "JWT & RBAC" }
    ]
  }
];
