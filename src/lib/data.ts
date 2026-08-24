export const profile = {
  name: "Nithya Madalakote Prakash",
  firstName: "Nithya",
  title: "AI Engineer",
  role: "AI Engineer / Generative AI Engineer",
  positioning:
    "I build production-ready AI systems with LLMs, RAG, AI agents, NLP, computer vision, and modern backend infrastructure.",
  heroSupport:
    "I build production-ready AI applications across Generative AI, RAG, LLMs, AI agents, computer vision, and backend systems.",
  location: "Germany",
  education: "M.Sc. Artificial Intelligence — BTU Cottbus",
  email: "nithyamadalakoteprakash12@gmail.com",
  github: "https://github.com/nithya-prakash",
  githubHandle: "github.com/nithya-prakash",
  linkedin: "https://www.linkedin.com/in/nithya-prakash1209/",
  linkedinHandle: "linkedin.com/in/nithya-prakash1209",
  signature: "Created with ☕️, curiosity, and way too many experiments.",
};

export const heroFacts = ["AI Engineer", "Based in Germany", "Open to opportunities"];

export const about = {
  headline: "Building AI systems from idea to production.",
  paragraphs: [
    "I'm an AI Engineer currently pursuing a Master's in Artificial Intelligence in Germany. My focus is on turning research and modern AI techniques into practical software systems — not demos that only work in a notebook.",
    "I enjoy working across LLM applications, Retrieval-Augmented Generation, AI agents, NLP, computer vision, machine learning, backend engineering, and MLOps / deployment.",
    "What I care about most is what happens after the first prototype works: reliability, evaluation, scalability, observability, production engineering, and clean architecture.",
  ],
  focusAreas: [
    "LLM Applications",
    "Retrieval-Augmented Generation",
    "AI Agents",
    "NLP",
    "Computer Vision",
    "Machine Learning",
    "Backend Engineering",
    "MLOps / Deployment",
  ],
  values: [
    "Reliability",
    "Evaluation",
    "Scalability",
    "Observability",
    "Production engineering",
    "Clean architecture",
  ],
};

export type Project = {
  number: string;
  slug: string;
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "rag-knowledge-assistant",
    name: "Production RAG Knowledge Assistant",
    description:
      "A production-oriented enterprise knowledge assistant using Retrieval-Augmented Generation to answer questions over private documents with grounded responses and citations.",
    stack: ["Python", "FastAPI", "Next.js", "Qdrant", "PostgreSQL", "Redis", "Celery", "Docker", "LLMs", "Embeddings"],
    highlights: [
      "Hybrid retrieval combining semantic search and BM25",
      "Reranking and citation-aware generation",
      "Background document processing with evaluation and local LLM support",
      "Production-grade architecture end to end",
    ],
    github: "https://github.com/nithya-prakash/HybridRAG",
  },
  {
    number: "02",
    slug: "predictive-maintenance-ai",
    name: "Predictive Maintenance & Anomaly Detection Platform",
    description:
      "An industrial AI platform for detecting abnormal machine behavior and supporting predictive maintenance workflows.",
    stack: ["Python", "FastAPI", "PyTorch", "scikit-learn", "PostgreSQL", "Docker", "Time-series ML"],
    highlights: [
      "Sensor data processing and predictive modeling",
      "Anomaly detection with machine health monitoring",
      "Alerting and automated data pipelines",
      "Industrial AI, built for real telemetry",
    ],
    github: "https://github.com/nithya-prakash/PredictiveMaintenanceAI",
  },
  {
    number: "03",
    slug: "industrial-ai-copilot",
    name: "Industrial Multimodal AI Copilot",
    description:
      "An evidence-based diagnostic copilot for manufacturing technicians: combines a technician's question, a component photo, sensor readings, and technical manuals into a structured, cited diagnosis with confidence scoring and human-in-the-loop approval for high-risk cases.",
    stack: ["Python", "FastAPI", "Celery", "PostgreSQL", "Qdrant", "Docker", "Prometheus"],
    highlights: [
      "Multimodal pipeline fusing RAG over manuals, computer vision, and live sensor analytics",
      "Agentic orchestration with confidence scoring and human-in-the-loop approval",
      "Built and verified phase-by-phase against real Postgres/Qdrant/Docker infrastructure",
    ],
    github: "https://github.com/nithya-prakash/IndustrialAICopilot",
  },
  {
    number: "04",
    slug: "sipmate-hydra",
    name: "SipMate / Hydra",
    description:
      "A macOS desktop hydration assistant that combines a playful interface with local data storage and ML-based scheduling logic.",
    stack: ["Python", "PySide6", "PyObjC", "SQLite", "scikit-learn", "macOS"],
    highlights: [
      "Native macOS integration with procedural characters",
      "Custom desktop UI built with PySide6",
      "Local persistence with SQLite",
      "ML-based reminder scheduling",
    ],
    github: "https://github.com/nithya-prakash/SipmateAssistant",
  },
  {
    number: "05",
    slug: "deutschai",
    name: "DeutschAI",
    description:
      "An AI-powered, adaptive platform for learning German from A1 to C1, architected so additional languages can be added later without reworking the core.",
    stack: ["Python", "FastAPI", "Next.js", "LLM Tutor Agent"],
    highlights: [
      "Spaced-repetition learning engine paired with a retrieval-grounded AI tutor",
      "Local speech and conversation practice engine",
      "ML-driven analytics and recommendations across the learning journey",
    ],
    github: "https://github.com/nithya-prakash/DeutschAI",
  },
  {
    number: "06",
    slug: "greengrid-optimizer",
    name: "GreenGrid Optimizer",
    description:
      "An end-to-end ML application forecasting renewable energy generation across Germany using public datasets.",
    stack: ["Python", "Machine Learning", "Time Series Forecasting"],
    highlights: [
      "Time-series forecasting pipeline over public renewable-energy data",
      "End-to-end workflow from data ingestion to model output",
    ],
    github: "https://github.com/nithya-prakash/GreenGridOptimizer",
  },
];

export type JourneyEntry = {
  period: string;
  title: string;
  place: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export const education: JourneyEntry[] = [
  {
    period: "2020 — 2024",
    title: "B.Tech, Computer Science",
    place: "Presidency University, Bengaluru, India",
    description:
      "Strong foundation in algorithms, data structures, software engineering, and applied machine learning.",
    tags: ["Algorithms", "Data Structures", "Software Engineering", "Machine Learning"],
  },
  {
    period: "2025 — Present",
    title: "M.Sc. Artificial Intelligence",
    place: "BTU Cottbus, Germany",
    description:
      "Master's in Artificial Intelligence at Brandenburg University of Technology Cottbus-Senftenberg, with a focus on Artificial Intelligence, Machine Learning, Generative AI, NLP, and Computer Vision.",
    tags: ["Artificial Intelligence", "Machine Learning", "Generative AI", "NLP", "Computer Vision"],
  },
];

export const experience: JourneyEntry[] = [
  {
    period: "Jun 2024 — Jan 2025",
    title: "Java Full Stack Developer Trainee",
    place: "Palle Technologies, Bengaluru, India",
    description:
      "Completed a structured 6-month full stack development programme, gaining experience in Java, Spring Boot, MySQL, and responsive front-end development. Built and tested REST APIs and integrated front-end and back-end components for internal web applications. Demonstrated strong problem-solving, code review participation, and team collaboration across the SDLC.",
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs", "Full Stack"],
  },
  {
    period: "Currently",
    title: "Building",
    place: "Independent projects",
    description:
      "Production-ready AI systems, RAG applications, intelligent backend systems, and AI-powered products.",
    tags: ["RAG", "AI Agents", "Backend Systems"],
    current: true,
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "AI / ML",
    items: ["Python", "PyTorch", "scikit-learn", "Transformers", "NLP", "Computer Vision", "Machine Learning", "Deep Learning"],
  },
  {
    category: "Generative AI",
    items: ["LLMs", "RAG", "Embeddings", "Vector Search", "Hybrid Retrieval", "Reranking", "AI Agents", "Prompt Engineering", "LLM Evaluation"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "Redis", "Celery"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "MLOps"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Databases / Data",
    items: ["PostgreSQL", "Qdrant", "SQLite", "SQL"],
  },
];

export type Publication = {
  title: string;
  venue: string;
  year: string;
  identifier: string;
  href: string;
  summary: string;
  stack: string[];
};

export const publications: Publication[] = [
  {
    title: "MediSync – Streamlining Healthcare Continuity",
    venue: "IJRPR",
    year: "2023",
    identifier: "ISSN 2582-7421",
    href: "/publications/medisync-ijrpr-2023.pdf",
    summary:
      "A doctor appointment web app connecting patients and doctors directly — search for a doctor, book an appointment, and get reminder notifications, with no third party involved.",
    stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "MySQL", "Spring Boot"],
  },
];

export const personality = {
  line1: "Most of my best ideas start somewhere between a blank editor and a cup of coffee.",
  line2: "Built with ☕️, curiosity, and an unhealthy number of experiments.",
};

export const contact = {
  headline: "Have an interesting problem?",
  subheading: "Let's build something intelligent.",
};
