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
  },
  {
    id: "bookverse",
    name: "BookVerse",
    type: "Full-Stack Online Bookstore & Inventory Management System",
    subtitle: "Curated Literary Haven — Full-stack e-commerce web application with guest Cash on Delivery storefront, real-time search, and executive admin portal.",
    featured: true,
    image: "/projects/bookstore.png",
    highlights: [
      "Full-Stack Architecture built with React (Vite), Tailwind CSS v4, React Router v6, and Firebase SDK (Firestore, Storage, Authentication)",
      "Guest Cash on Delivery (COD) Storefront allowing customers to browse by category, perform real-time search, manage persistent cart (localStorage + React Context), and place orders",
      "Executive Admin & Inventory Portal (harisghaffar@admin.com) guarded by ProtectedRoute wrappers, featuring KPI metrics, inventory CRUD, and real-time order status toggles (Pending ➔ Shipped ➔ Delivered)",
      "Real-Time Data Synchronization with reactive state listeners ensuring instant UI updates across catalog and orders without page reloads",
      "Firebase Storage & Image Pipeline handling direct image file uploads with fallback handling and live image URL previews"
    ],
    technologies: ["React", "Tailwind CSS", "Firebase (Firestore)", "Firebase Storage", "Firebase Auth", "Vite", "React Router v6"],
    problem: "Independent online book retailers need a high-performance storefront for guest browsing and COD ordering, seamlessly paired with a real-time admin portal for catalog and order management.",
    solution: "BookVerse delivers a fast guest checkout storefront coupled with a role-based executive inventory & order tracking portal powered by real-time Firebase services.",
    architecture: "Decoupled Single Page Application built with React (Vite) and Tailwind CSS v4, leveraging Firebase Auth for guarded admin routes, Firestore for real-time document sync, and Firebase Storage for image assets.",
    github: "https://github.com/harisghaffar92",
    liveDemo: "",
    metrics: [
      { label: "Frontend Stack", value: "React + Vite" },
      { label: "Styling", value: "Tailwind CSS v4" },
      { label: "Database", value: "Firebase Firestore" },
      { label: "Auth & Storage", value: "Firebase SDK" }
    ]
  }
];
