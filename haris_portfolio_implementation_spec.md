# Muhammad Haris Ghaffar — Portfolio Implementation Specification

## 1. Project Goal

Build a premium, cinematic personal portfolio for Muhammad Haris Ghaffar.

Primary positioning:
- Full-Stack Developer

Secondary positioning:
- AI/ML Developer

Target audiences:
- Software engineering recruiters
- Freelance clients
- Startup founders
- University/admission committees
- Technical professionals

Desired visitor impression:

> "This developer actually builds things, understands modern web development, and has strong technical curiosity."

Do not present Haris as a senior developer or invent professional industry experience.

---

# 2. Technology Stack

## Frontend

- React
- Vite
- JavaScript
- Tailwind CSS
- Motion / Framer Motion where useful

## Backend

Use Node.js + Express only where it provides real value.

The first version does NOT need a backend for every feature. The portfolio should remain primarily a fast React frontend.

Possible backend responsibility:
- Contact form API
- Email notification
- Future analytics/API features

## Database

PostgreSQL only if persistent backend data is actually required.

Do not introduce a database merely to make the project look more complex.

## Deployment

Recommended:
- Frontend: Vercel
- Backend: Render/Railway or equivalent
- Repository: GitHub

---

# 3. High-Level Architecture

```text
                    ┌─────────────────────┐
                    │      Visitor        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    React + Vite     │
                    │     Frontend        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        UI Components    Content/Data     Animation System
              │                │                │
              │                │                ▼
              │                │        Scroll Frame Engine
              │                │                │
              │                │                ▼
              │                │        Selected Frame Images
              │                │
              │                ▼
              │          Project Metadata
              │          Skills Metadata
              │          Education
              │          Certifications
              │
              ▼
       Sections / Pages
              │
              ▼
       Optional Express API
              │
              ▼
        Contact / Email
```

---

# 4. Recommended Website Architecture

```text
/
├── Hero
├── About
├── Skills
├── Projects
├── Education
├── Certifications
├── Resume
└── Contact
```

The site can remain a single-page application initially.

Do not create unnecessary pages.

---

# 5. User Journey

```text
Landing
   ↓
Cinematic Hero
   ↓
"What does Haris do?"
   ↓
About / Technical Identity
   ↓
Skills / Technologies
   ↓
Featured Projects
   ↓
CampusConnect deep presentation
   ↓
Online Book Store
   ↓
Education + Certifications
   ↓
Resume
   ↓
Contact / CTA
```

The portfolio should progressively answer:

1. Who is he?
2. What does he build?
3. What technologies does he use?
4. What has he actually built?
5. What evidence exists?
6. How can I contact him?

---

# 6. Folder Architecture

Use this structure:

```text
haris-portfolio/
│
├── public/
│   ├── frames/
│   │   ├── selected/
│   │   └── fallback/
│   ├── favicon/
│   └── resume/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── projects/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── TechBadge.jsx
│   │   └── SocialLinks.jsx
│   │
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   │
│   ├── components/
│   │   └── cinematic/
│   │       ├── ScrollFrameCanvas.jsx
│   │       ├── FramePreloader.js
│   │       └── useScrollFrames.js
│   │
│   ├── data/
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── certifications.js
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   └── useReducedMotion.js
│   │
│   ├── utils/
│   │   ├── frameUtils.js
│   │   └── performanceUtils.js
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│   ├── routes/
│   │   └── contact.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── services/
│   │   └── emailService.js
│   └── server.js
│
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

Important: the Express server can be omitted from the first frontend-only version and added later.

---

# 7. Cinematic Scroll Background — Core Requirement

This is the defining feature of the website.

I will upload a ZIP file containing the extracted video frames.

The ZIP may contain a large number of frames.

Example:

```text
portfolio-frames.zip
│
├── frame_0001.jpg
├── frame_0002.jpg
├── frame_0003.jpg
├── ...
├── frame_0300.jpg
└── ...
```

Do NOT automatically use every frame.

The implementation must inspect the available frames and select an optimized subset that still makes the scrolling animation look continuous and alive.

For example:

```text
Original:
300 frames

Selected:
60–100 strategically chosen frames
```

The exact number should depend on:
- visual difference between frames
- image dimensions
- file size
- animation duration
- smoothness
- device performance

The objective is NOT maximum frame count.

The objective is:

> Maximum perceived motion with minimum loading/performance cost.

---

# 8. Frame Selection Strategy

Do not simply select:

```text
1, 5, 10, 15, 20...
```

unless that actually produces a smooth sequence.

Instead:

1. Inspect the complete ZIP/frame sequence.
2. Determine the total number of frames.
3. Analyze visual progression.
4. Identify frames where meaningful visual changes occur.
5. Preserve enough intermediate frames during fast visual transitions.
6. Remove redundant frames that look almost identical.
7. Generate a final ordered frame list.
8. Use the selected frames for the scroll animation.

If automated frame analysis is practical, use perceptual similarity / image difference to help identify redundant frames.

The final frame sequence must remain in chronological order.

---

# 9. Scroll Animation Architecture

Use a sticky cinematic layer.

Concept:

```text
┌──────────────────────────────────────┐
│                                      │
│       FIXED / STICKY BACKGROUND      │
│                                      │
│        [FRAME IMAGE/CANVAS]          │
│                                      │
│    ┌────────────────────────────┐    │
│    │      CONTENT OVERLAY        │    │
│    └────────────────────────────┘    │
│                                      │
└──────────────────────────────────────┘
```

The scroll position controls animation progress.

Conceptually:

```text
scrollProgress = 0.00 → frame 1
scrollProgress = 0.10 → frame 6
scrollProgress = 0.25 → frame 16
scrollProgress = 0.50 → frame 35
scrollProgress = 0.75 → frame 55
scrollProgress = 1.00 → final frame
```

Do not tie frame changes to arbitrary wheel events.

Tie them to actual scroll progress so:
- mouse wheel
- trackpad
- touch scrolling
- keyboard navigation

all behave naturally.

---

# 10. Canvas vs IMG

Prefer a `<canvas>` rendering strategy for the cinematic sequence when it improves performance.

Reason:
- avoids creating hundreds of DOM image elements
- gives precise frame control
- supports responsive rendering
- works well for scroll-driven sequences

Use `<img>` only if it provides a clear performance or simplicity advantage.

---

# 11. Frame Preloading

Do not load every large frame at once.

Use staged loading:

```text
Initial critical frames
        ↓
Hero frames
        ↓
Nearby frames
        ↓
Remaining sequence
```

The page should become usable before the entire sequence finishes loading.

Show a lightweight loading state only when necessary.

Do not make visitors stare at a long loading screen.

---

# 12. Mobile Strategy

Do NOT assume the desktop frame sequence will perform equally well on mobile.

Possible mobile strategy:

```text
Desktop:
60–100 selected frames

Mobile:
20–40 optimized frames
```

Alternatively:
- use lower-resolution frames
- use fewer frames
- use a short sequence
- use a static fallback frame on very low-powered devices

Respect:

```text
prefers-reduced-motion
```

When reduced motion is enabled, show an appropriate static frame or subtle non-scroll visual instead.

---

# 13. Visual Layering

The background must never destroy text readability.

Recommended layer order:

```text
Background Frame
      ↓
Dark Gradient
      ↓
Radial / Directional Overlay
      ↓
Optional Blur / Vignette
      ↓
Content
      ↓
Navigation / UI
```

The overlay should adapt to the background frame if required.

---

# 14. Hero Section

Content:

```text
MUHAMMAD HARIS GHAFFAR

Full-Stack Developer
AI/ML Developer

I build practical web applications and explore
AI-powered software solutions.
```

Primary CTA:

```text
View Projects
```

Secondary CTA:

```text
Download Resume
```

Optional:

```text
Let's Talk
```

Keep the hero copy short.

The cinematic visual should carry much of the emotional impact.

---

# 15. About Section

Position Haris as:

- Computer Science graduate
- Full-stack developer
- Practical software builder
- Interested in AI/ML
- Continuously expanding JavaScript and modern web development knowledge

Do not claim professional industry experience.

---

# 16. Skills Section

Use categories rather than fake percentages.

## Programming

- Python
- C++
- JavaScript

## Frontend

- HTML
- CSS
- React

## Backend

- Django
- Node.js

## Databases

- MySQL
- SQLite

## Tools

- VS Code
- GitHub
- Microsoft Excel

## AI

- Prompt Engineering

Potential future skills should be visually separated from current skills.

Do not show technologies that Haris has not actually used.

---

# 17. Featured Projects

## Project 1 — CampusConnect

Title:

```text
CampusConnect
```

Subtitle:

```text
Full-Stack Job & Career Portal
```

Description:

A full-stack platform for students, alumni, and employers.

Technologies:
- React
- Django REST Framework
- JWT
- Role-based access

Features:
- Skill matching
- Authentication
- Role-based access
- Responsive UI
- Resume management
- Notifications
- Admin moderation

Give this project the strongest visual treatment.

Potential layout:

```text
Project visual
      ↓
Project title
      ↓
Problem
      ↓
Solution
      ↓
Architecture / technical approach
      ↓
Key features
      ↓
Technology
      ↓
GitHub / Live Demo
```

Do not simply make it another small card.

---

## Project 2 — Online Book Store

Technologies:
- PHP
- MySQL
- HTML
- CSS
- JavaScript

Features:
- Authentication
- Browse/search books
- Shopping cart
- Order management
- Admin panel
- Inventory management

Present it as evidence of earlier full-stack/web development work.

---

# 18. Education

```text
BS Computer Science
University of Sahiwal
2022–2026

CGPA: 3.44
```

Relevant courses:
- Database Systems
- Data Structures
- OOP
- Web
- AI

---

# 19. Certifications

Current verified CV content:

- Introduction to Python — Kaggle
- Getting Started with Excel — Coursera
- Google Prompting Essentials Specialization — Google

Do not invent:
- certificate IDs
- dates
- grades
- verification URLs

---

# 20. Resume

Use the uploaded resume as the source of truth for current factual information.

Provide:

```text
View Resume
Download Resume
```

Do not create contradictory information between the resume and website.

---

# 21. Contact

Recommended hierarchy:

Primary:
- Email
- LinkedIn

Technical proof:
- GitHub

Secondary:
- WhatsApp

Optional:
- Phone

Also provide:
- Contact form

Recommended CTA:

```text
Let's build something useful.
```

The contact form should eventually submit to the Express backend if a backend is enabled.

---

# 22. Navigation

Desktop:

```text
Home
About
Skills
Projects
Education
Contact

[Resume]
```

Mobile:
- hamburger menu
- smooth navigation
- no oversized navigation UI

Navigation should be transparent/minimal initially and become slightly more visible after scrolling.

---

# 23. Animation Rules

Use animation with purpose.

Good:
- scroll-linked frame animation
- text reveal
- subtle section transitions
- project image movement
- hover micro-interactions
- smooth navigation transitions

Avoid:
- constant bouncing
- excessive particles
- giant cursor effects
- excessive parallax
- animation on every element
- slow page transitions
- distracting 3D effects

The cinematic background is already the main visual effect.

Everything else should support it.

---

# 24. Performance Requirements

Priority order:

1. Fast first render
2. Readable content
3. Smooth scroll
4. Cinematic frame animation
5. Decorative animation

Optimize:
- JPEG/WebP/AVIF frames where supported
- image dimensions
- frame count
- lazy loading
- code splitting
- bundle size
- font loading
- unused dependencies

Do not sacrifice usability for visual effects.

---

# 25. Accessibility

Implement:
- semantic HTML
- keyboard navigation
- visible focus states
- appropriate contrast
- alt text
- reduced motion support
- accessible buttons
- accessible form labels

The cinematic animation must not prevent navigation or reading.

---

# 26. Content Architecture

Keep content outside components.

Example:

```js
export const profile = {
  name: "Muhammad Haris Ghaffar",
  primaryRole: "Full-Stack Developer",
  secondaryRole: "AI/ML Developer",
  location: "Sahiwal, Pakistan",
  education: "BS Computer Science",
  university: "University of Sahiwal",
  graduation: "2026",
  cgpa: "3.44"
};
```

Projects:

```js
export const projects = [
  {
    name: "CampusConnect",
    type: "Full-Stack Job & Career Portal",
    technologies: [
      "React",
      "Django REST Framework",
      "JWT"
    ],
    github: "",
    liveDemo: "",
    featured: true
  }
];
```

This makes future updates easy.

---

# 27. Environment Variables

Example:

```text
VITE_API_URL=
VITE_LINKEDIN_URL=
VITE_GITHUB_URL=
VITE_WHATSAPP_URL=
```

Backend:

```text
PORT=
DATABASE_URL=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASSWORD=
```

Never commit secrets.

---

# 28. Development Phases

## Phase 1 — Foundation

- Vite + React setup
- Tailwind setup
- Routing/section architecture
- global typography
- responsive layout
- navigation

## Phase 2 — Cinematic Engine

- accept uploaded ZIP
- extract/inspect frames
- select useful frames
- optimize images
- create frame manifest
- preload frames
- implement scroll-to-frame mapping
- desktop optimization
- mobile optimization
- reduced-motion fallback

## Phase 3 — Hero

- cinematic background
- hero typography
- CTA
- scroll indicator
- responsive behavior

## Phase 4 — Content

- About
- Skills
- Projects
- Education
- Certifications
- Resume
- Contact

## Phase 5 — Project Presentation

- CampusConnect detailed case study
- Online Book Store
- screenshots
- GitHub links
- live demo links

## Phase 6 — Backend

Only if needed:
- Express
- contact API
- email service
- validation
- spam protection

## Phase 7 — Optimization

- Lighthouse
- image optimization
- bundle analysis
- mobile testing
- accessibility
- reduced motion
- browser testing

## Phase 8 — Deployment

- GitHub
- Vercel
- backend deployment if required
- custom domain
- environment variables
- production testing

---

# 29. Antigravity Build Instruction

When I upload the ZIP containing the extracted video frames, do NOT blindly use every image.

Your workflow should be:

```text
ZIP upload
   ↓
Inspect all frames
   ↓
Determine frame dimensions/count
   ↓
Analyze visual redundancy
   ↓
Select frames that preserve motion
   ↓
Optimize selected frames
   ↓
Generate frame manifest
   ↓
Implement scroll-controlled animation
   ↓
Test smoothness
   ↓
Reduce frames if performance is poor
   ↓
Keep visual continuity
```

The selected frame sequence should make the background feel like a real video controlled by scrolling.

The user should perceive:

```text
scroll down
     ↓
background moves
     ↓
visual scene evolves
     ↓
content changes
     ↓
next section
```

It should NOT feel like:

```text
scroll down
     ↓
random images changing
```

The sequence should therefore prioritize temporal continuity.

---

# 30. Critical Implementation Constraint

The ZIP file and frames are user-provided visual assets.

Do not replace them with:
- stock photos
- generated backgrounds
- unrelated images
- placeholder cinematic sequences

If the supplied frames are insufficient for a smooth sequence, report that clearly and use the best available subset rather than inventing a different visual concept.

---

# 31. Final Quality Standard

The finished portfolio should feel:

- Custom
- Cinematic
- Technical
- Professional
- Fast
- Modern
- Recruiter-friendly
- Client-friendly
- Memorable

But it should NOT feel:

- Fake
- Over-engineered
- Like a template
- Like a gaming landing page
- Like a generic student resume
- Filled with technologies that are only listed for appearance

The strongest proof of ability should be the actual projects and their technical presentation.

Build the first version around the visual system and Hero first, then progressively add the remaining sections.
