export const profile = {
  name: "Abhishek V",
  title: "Technical Lead · Full-Stack & AI Systems",
  pitch:
    "I build production web, mobile, backend and AI systems, and lead the teams that ship them.",
  location: "Bangalore, India",
  email: "abhishekv.dev@gmail.com",
  links: {
    github: "https://github.com/abhi0498",
    linkedin: "https://linkedin.com/in/abhishekvdev0498",
  },
};

export const about = [
  "Technical lead with 6+ years shipping production web, mobile, backend and AI systems in Python, TypeScript, Node.js and React.",
  "I built the AI document-extraction service for a production RAG platform at Codvo, and most recently led delivery across a ~30-repository MERN platform at SmartFoodSafe while designing a multi-tenant AI agent assistant.",
  "I own architecture, hiring and delivery end to end, work directly with clients, and stay hands-on in code.",
];

export const experience = [
  {
    period: "Feb — Oct 2026",
    title: "Technical Lead, Full-Stack & AI",
    company: "SmartFoodSafe",
    note: "Rejoined",
    points: [
      "Led technology, delivery and code quality across a ~30-repository MERN platform with a junior-heavy team.",
      "Shipped the Health & Safety module to production and delivered change acknowledgement, a scheduling API integration and a shared form library reused across record modules.",
      "Resolved ~250 SonarQube issues in the UI codebase and set engineering standards: typed OpenAPI contracts, Jenkins quality gates and dependency automation.",
      "Ran engineering hiring end to end, from interview design through coordination to final evaluation.",
      "Designed a multi-tenant AI assistant in Python and Pydantic AI on the Gemini API with typed tools, structured outputs, tool access scoped by tenant and role, and human approval for sensitive actions, and built a working prototype.",
    ],
    tags: ["MERN", "Python", "Pydantic AI", "Gemini API", "OpenAPI", "Jenkins"],
  },
  {
    period: "Sep 2025 — Feb 2026",
    title: "Software Craftsperson",
    company: "Incubyte",
    points: [
      "Fixed WCAG accessibility issues in a production Next.js application and added automated accessibility checks to CI/CD to prevent regressions.",
    ],
    tags: ["Next.js", "WCAG", "CI/CD"],
  },
  {
    period: "Apr 2023 — Sep 2025",
    title: "Senior Full-Stack Engineer",
    company: "Codvo.ai",
    points: [
      "Built the Python microservice for AI-driven structured data extraction from PDFs using the OpenAI API in the NeIO RAG and document-processing platform.",
      "Used NATS for decoupled, resilient messaging between services, and added Langfuse tracing to inspect pipeline behaviour and diagnose failures.",
      "Built a Vue.js internal admin console and shipped a React Native mobile app.",
      "Built frontend and backend for a Saudi enterprise client's IoT platform (6 months), integrating a Camunda rule engine owned by another team; worked with the client remotely through go-live.",
    ],
    tags: ["Python", "OpenAI API", "RAG", "NATS", "Langfuse", "Vue.js", "React Native"],
  },
  {
    period: "Jun 2020 — Mar 2023",
    title: "Technical Team Lead, Full-Stack",
    company: "SmartFoodSafe",
    points: [
      "Led a team of three engineers and owned architecture and delivery for two production applications: Node.js/Express APIs and a React Native app.",
      "Owned stability, scalability and technical decisions while mentoring engineers and staying hands-on in implementation.",
      "Handled client communication on bugs and requirement clarifications, translating issues into fixes and scoped work for the team.",
    ],
    tags: ["Node.js", "Express", "React Native", "MongoDB"],
  },
];

export const projects = [
  {
    title: "Okay to Work",
    kind: "SaaS · live",
    description:
      "COI tracking for contractors, property managers and venues. It checks each vendor's certificate of insurance (ACORD 25) against the customer's own requirements, emails vendors exactly what to fix with automatic reminders, and flags anything it can't read clearly for a person to confirm.",
    tags: ["Document extraction", "ACORD 25", "Email automation", "SaaS"],
    links: [
      { label: "okaytowork.com", href: "https://okaytowork.com" },
      { label: "Free COI checker", href: "https://okaytowork.com/coi-checker" },
    ],
  },
  {
    title: "Translate JSON",
    kind: "npm package",
    description:
      "CLI that translates i18n JSON resource files from English into any Google Translate language, to take the busywork out of localisation.",
    tags: ["Node.js", "Playwright", "CLI", "i18n"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/translate-json-file" },
      { label: "Source", href: "https://github.com/abhi0498/translate-json-file" },
    ],
  },
  {
    title: "FreshRelease Export",
    kind: "Chrome extension",
    description:
      "Adds a button to FreshRelease's kanban board that copies tasks to the clipboard as clean, structured text.",
    tags: ["React", "Plasmo", "TypeScript"],
    links: [
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/freshrelease-export/emfbelpnpdbkejginlmljfhfdjdjmjci",
      },
      { label: "Source", href: "https://github.com/abhi0498/freshrelease-copy-to-clipboard" },
    ],
  },
  {
    title: "Charitably.in",
    kind: "Web app",
    description:
      "Next.js site that makes charitable organisations easier to discover, so people can find and support causes that matter to them.",
    tags: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Google OAuth"],
    links: [
      { label: "charitably.in", href: "https://charitably.in" },
      { label: "Source", href: "https://github.com/abhi0498/charitably" },
    ],
  },
];

export const skills = [
  {
    group: "AI & LLM systems",
    items: [
      "OpenAI API",
      "Gemini API",
      "RAG",
      "Document extraction",
      "Pydantic AI",
      "Structured outputs",
      "Tool calling",
      "Human-in-the-loop workflows",
      "Langfuse",
    ],
  },
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript"] },
  { group: "Backend", items: ["Node.js", "Express", "REST", "OpenAPI", "NATS", "Microservices"] },
  { group: "Frontend & mobile", items: ["React", "Next.js", "React Native", "Vue.js"] },
  { group: "Data & platform", items: ["MongoDB", "MySQL", "Docker", "Kubernetes", "Jenkins CI/CD"] },
  {
    group: "Leadership",
    items: ["Architecture", "Code review", "Hiring", "Mentoring", "Delivery ownership"],
  },
];
