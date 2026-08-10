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
  },
  {
    id: "bookstore",
    name: "Online Book Store",
    type: "Full-Stack E-Commerce Application",
    subtitle: "Complete digital bookstore with user authentication, dynamic catalog search, cart management, and admin inventory control.",
    featured: true,
    image: "/projects/bookstore.png",
    highlights: [
      "Secure User Authentication & Password Hashing",
      "Interactive Book Catalog with Genre & Keyword Filtering",
      "Real-time Shopping Cart & Order Checkout Pipeline",
      "Admin Inventory Dashboard with CRUD Operations",
      "Relational Database Schema for Orders & Customers"
    ],
    technologies: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    problem: "Independent bookstores require an easy-to-manage online e-commerce solution with real-time inventory updates without complex third-party SaaS subscriptions.",
    solution: "A custom PHP + MySQL web application delivering fast page loads, direct order tracking, and an intuitive administration dashboard for product stock control.",
    architecture: "Monolithic MVC structure with PHP backend processing, relational MySQL database schema, and vanilla JavaScript for dynamic frontend DOM manipulation.",
    github: "https://github.com/harisghaffar92",
    liveDemo: "",
    metrics: [
      { label: "Database", value: "Relational MySQL" },
      { label: "Backend", value: "Native PHP Engine" },
      { label: "Admin Panel", value: "Full CRUD Control" }
    ]
  }
];
