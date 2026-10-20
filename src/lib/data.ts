export type Lang = "en" | "de";

export type JourneyEntry = {
  period: string;
  title: string;
  place: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  identifier: string;
  href: string;
  summary: string;
  stack: string[];
};

export type LocaleContent = {
  profile: {
    name: string;
    firstName: string;
    title: string;
    role: string;
    positioning: string;
    heroSupport: string;
    location: string;
    education: string;
    email: string;
    github: string;
    githubHandle: string;
    linkedin: string;
    linkedinHandle: string;
    signature: string;
    resumeHref: string;
  };
  heroFacts: string[];
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    viewProjects: string;
    connect: string;
    downloadResume: string;
    scroll: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    education: string;
    experience: string;
    skills: string;
    contact: string;
    resume: string;
    downloadResume: string;
    openMenu: string;
    closeMenu: string;
  };
  about: {
    eyebrow: string;
    index: string;
    headline: string;
    paragraphs: string[];
    workAcrossLabel: string;
    focusAreas: string[];
    careAboutLabel: string;
    values: string[];
  };
  educationSection: {
    eyebrow: string;
    index: string;
    title: string;
  };
  education: JourneyEntry[];
  experienceSection: {
    eyebrow: string;
    index: string;
    title: string;
  };
  experience: JourneyEntry[];
  publicationsSection: {
    eyebrow: string;
    index: string;
    title: string;
    readPaper: string;
  };
  publications: Publication[];
  skillsSection: {
    eyebrow: string;
    index: string;
    title: string;
  };
  skills: SkillGroup[];
  contactSection: {
    eyebrow: string;
    index: string;
  };
  contact: {
    headline: string;
    subheading: string;
    emailLabel: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  contactForm: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    unconfigured: string;
  };
  footer: {
    role: string;
    tagline: string;
  };
  themeToggle: {
    switchToLight: string;
    switchToDark: string;
  };
};

const educationEn: JourneyEntry[] = [
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

const educationDe: JourneyEntry[] = [
  {
    period: "2020 — 2024",
    title: "B.Tech, Informatik",
    place: "Presidency University, Bengaluru, Indien",
    description:
      "Solide Grundlage in Algorithmen, Datenstrukturen, Softwaretechnik und angewandtem maschinellem Lernen.",
    tags: ["Algorithmen", "Datenstrukturen", "Softwaretechnik", "Machine Learning"],
  },
  {
    period: "2025 — Heute",
    title: "M.Sc. Künstliche Intelligenz",
    place: "BTU Cottbus, Deutschland",
    description:
      "Masterstudium Künstliche Intelligenz an der Brandenburgischen Technischen Universität Cottbus-Senftenberg mit Schwerpunkt Künstliche Intelligenz, Machine Learning, Generative KI, NLP und Computer Vision.",
    tags: ["Künstliche Intelligenz", "Machine Learning", "Generative KI", "NLP", "Computer Vision"],
  },
];

const experienceEn: JourneyEntry[] = [
  {
    period: "Mar 2025 — Apr 2025",
    title: "AI Intern",
    place: "LaunchED Global, Remote (Bengaluru, India)",
    description:
      "Two-month internship gaining practical exposure to AI concepts and development workflows. Built an understanding of AI fundamentals and machine learning techniques, and applied AI approaches to real-world problems while exploring AI tools and intelligent systems.",
    tags: ["Python", "NumPy", "Machine Learning", "AI Fundamentals", "AI Tools", "Intelligent Systems", "Problem Solving"],
  },
  {
    period: "Jul 2024 — Jan 2025",
    title: "Java Full Stack Developer Trainee",
    place: "Palle Technologies, Bengaluru, India",
    description:
      "Completed a structured full stack development programme, gaining experience in Java, Spring Boot, MySQL, and responsive front-end development. Built and tested REST APIs and integrated front-end and back-end components for internal web applications. Demonstrated strong problem-solving, code review participation, and team collaboration across the SDLC.",
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs", "Full Stack", "Responsive Front-End", "Code Review", "SDLC", "Teamwork"],
  },
];

const experienceDe: JourneyEntry[] = [
  {
    period: "Mär 2025 — Apr 2025",
    title: "AI Intern",
    place: "LaunchED Global, Remote (Bengaluru, Indien)",
    description:
      "Zweimonatiges Praktikum mit praktischem Einblick in KI-Konzepte und KI-Entwicklungsworkflows. Grundlagen der KI und Machine-Learning-Techniken erarbeitet und KI-Ansätze auf praxisnahe Problemstellungen angewendet, dabei KI-Tools und intelligente Systeme erkundet.",
    tags: ["Python", "NumPy", "Machine Learning", "KI-Grundlagen", "KI-Tools", "Intelligente Systeme", "Problemlösung"],
  },
  {
    period: "Jul 2024 — Jan 2025",
    title: "Java Full Stack Developer Trainee",
    place: "Palle Technologies, Bengaluru, Indien",
    description:
      "Strukturiertes Full-Stack-Entwicklungsprogramm mit Erfahrung in Java, Spring Boot, MySQL und responsiver Frontend-Entwicklung. REST-APIs entwickelt und getestet sowie Frontend- und Backend-Komponenten für interne Webanwendungen integriert. Starke Problemlösungskompetenz, Beteiligung an Code-Reviews und Teamzusammenarbeit über den gesamten SDLC hinweg.",
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs", "Full Stack", "Responsives Frontend", "Code Reviews", "SDLC", "Teamarbeit"],
  },
];

const skillsEn: SkillGroup[] = [
  {
    category: "AI & LLMs",
    items: ["LLMs", "LangGraph", "LangChain", "AI agents", "Multi-agent systems", "MCP", "Prompt engineering", "Structured LLM output", "LoRA fine-tuning", "Hugging Face Transformers", "Ollama", "Anthropic API", "OpenAI API", "Groq", "Langfuse", "RAGAS", "Hallucination guards", "Citation verification", "Whisper"],
  },
  {
    category: "RAG & Search",
    items: ["RAG", "Hybrid retrieval", "BM25", "Dense embeddings", "Sentence-Transformers", "Cross-encoder reranking", "RRF", "Qdrant", "Neo4j", "Vector search", "Retrieval evals (Recall@k, MRR)", "PDF parsing"],
  },
  {
    category: "ML & Deep Learning",
    items: ["PyTorch", "scikit-learn", "XGBoost", "Prophet", "SHAP", "Optuna", "Time-series forecasting", "Anomaly detection", "Isolation Forest", "Computer vision", "OpenCV", "torchvision", "Grad-CAM", "Graph neural networks", "Reinforcement learning (PPO)", "Stable-Baselines3", "OR-Tools", "ONNX Runtime"],
  },
  {
    category: "Languages & Data",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C++", "Bash", "pandas", "NumPy", "SciPy", "DuckDB", "PyArrow", "Pandera", "dbt", "PostgreSQL", "InfluxDB", "SQLite", "Power BI-ready exports"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Spring Boot", "REST APIs", "Pydantic", "SQLAlchemy", "Alembic", "Flyway", "Celery", "Redis", "Kafka", "MQTT", "WebSockets", "JWT auth", "Rate limiting", "n8n automation", "Event-driven design", "Microservices", "MinIO"],
  },
  {
    category: "DevOps & MLOps",
    items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "GitHub Actions CI/CD", "Prometheus", "Grafana", "OpenTelemetry", "Jaeger", "MLflow", "Prefect", "Model registry", "Canary rollout and rollback", "Drift detection", "Linux", "Git"],
  },
  {
    category: "Testing & Quality",
    items: ["pytest", "Vitest", "Playwright", "Testing Library", "Hypothesis", "Locust", "k6", "Load testing", "Integration tests", "ruff", "mypy", "ESLint", "Coverage reports", "Dependency audits", "Evaluation harnesses"],
  },
  {
    category: "Frontend & UI/UX",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Streamlit", "Recharts", "React Query", "Framer Motion", "Responsive design", "Dashboard design", "Dark and light themes"],
  },
];

const skillsDe: SkillGroup[] = [
  {
    category: "KI & LLMs",
    items: ["LLMs", "LangGraph", "LangChain", "KI-Agenten", "Multi-Agenten-Systeme", "MCP", "Prompt Engineering", "Strukturierte LLM-Ausgabe", "LoRA fine-tuning", "Hugging Face Transformers", "Ollama", "Anthropic API", "OpenAI API", "Groq", "Langfuse", "RAGAS", "Halluzinations-Guards", "Zitationsprüfung", "Whisper"],
  },
  {
    category: "RAG & Suche",
    items: ["RAG", "Hybrid-Retrieval", "BM25", "Dense Embeddings", "Sentence-Transformers", "Cross-Encoder-Reranking", "RRF", "Qdrant", "Neo4j", "Vektorsuche", "Retrieval-Evals (Recall@k, MRR)", "PDF-Parsing"],
  },
  {
    category: "ML & Deep Learning",
    items: ["PyTorch", "scikit-learn", "XGBoost", "Prophet", "SHAP", "Optuna", "Zeitreihenprognose", "Anomalieerkennung", "Isolation Forest", "Computer Vision", "OpenCV", "torchvision", "Grad-CAM", "Graph Neural Networks", "Reinforcement Learning (PPO)", "Stable-Baselines3", "OR-Tools", "ONNX Runtime"],
  },
  {
    category: "Sprachen & Daten",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "C++", "Bash", "pandas", "NumPy", "SciPy", "DuckDB", "PyArrow", "Pandera", "dbt", "PostgreSQL", "InfluxDB", "SQLite", "Power-BI-fähige Exporte"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Spring Boot", "REST APIs", "Pydantic", "SQLAlchemy", "Alembic", "Flyway", "Celery", "Redis", "Kafka", "MQTT", "WebSockets", "JWT auth", "Rate Limiting", "n8n-Automatisierung", "Ereignisgesteuertes Design", "Microservices", "MinIO"],
  },
  {
    category: "DevOps & MLOps",
    items: ["Docker", "Docker Compose", "Kubernetes", "Helm", "GitHub Actions CI/CD", "Prometheus", "Grafana", "OpenTelemetry", "Jaeger", "MLflow", "Prefect", "Modell-Registry", "Canary-Rollout und Rollback", "Drift-Erkennung", "Linux", "Git"],
  },
  {
    category: "Testing & Qualität",
    items: ["pytest", "Vitest", "Playwright", "Testing Library", "Hypothesis", "Locust", "k6", "Lasttests", "Integrationstests", "ruff", "mypy", "ESLint", "Coverage-Berichte", "Dependency-Audits", "Evaluations-Harnesses"],
  },
  {
    category: "Frontend & UI/UX",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Streamlit", "Recharts", "React Query", "Framer Motion", "Responsives Design", "Dashboard-Design", "Dunkle und helle Themes"],
  },
];

const publicationsEn: Publication[] = [
  {
    title: "MediSync – Streamlining Healthcare Continuity",
    venue: "IJRPR",
    year: "2024",
    identifier: "ISSN 2582-7421",
    href: "/publications/medisync-ijrpr-2024.pdf",
    summary:
      "A doctor appointment web app connecting patients and doctors directly — search for a doctor, book an appointment, and get reminder notifications, with no third party involved.",
    stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "MySQL", "Spring Boot"],
  },
];

const publicationsDe: Publication[] = [
  {
    title: "MediSync – Streamlining Healthcare Continuity",
    venue: "IJRPR",
    year: "2024",
    identifier: "ISSN 2582-7421",
    href: "/publications/medisync-ijrpr-2024.pdf",
    summary:
      "Eine Webanwendung für Arzttermine, die Patienten und Ärzte direkt verbindet — Arzt suchen, Termin buchen und Erinnerungen erhalten, ganz ohne Mittelsperson.",
    stack: ["JavaScript", "HTML", "CSS", "Bootstrap", "MySQL", "Spring Boot"],
  },
];

export const content: Record<Lang, LocaleContent> = {
  en: {
    profile: {
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
      resumeHref: "/resume.pdf",
    },
    heroFacts: ["AI Engineer", "Based in Germany", "Open to opportunities"],
    hero: {
      greeting: "Hey there,",
      name: "Hi, I'm Nithya.",
      tagline: "AI Engineer building intelligent systems that actually work.",
      viewProjects: "View Projects",
      connect: "Let's Connect",
      downloadResume: "Download Resume",
      scroll: "Scroll",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      education: "Education",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
      resume: "Resume",
      downloadResume: "Download Resume",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    about: {
      eyebrow: "About",
      index: "01",
      headline: "Building AI systems from idea to production.",
      paragraphs: [
        "I'm an AI Engineer currently pursuing a Master's in Artificial Intelligence in Germany. My focus is on turning research and modern AI techniques into practical software systems — not demos that only work in a notebook.",
        "I enjoy working across LLM applications, Retrieval-Augmented Generation, AI agents, NLP, computer vision, machine learning, backend engineering, and MLOps / deployment.",
        "What I care about most is what happens after the first prototype works: reliability, evaluation, scalability, observability, production engineering, and clean architecture.",
      ],
      workAcrossLabel: "What I work across",
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
      careAboutLabel: "What I care about",
      values: ["Reliability", "Evaluation", "Scalability", "Observability", "Production engineering", "Clean architecture"],
    },
    educationSection: { eyebrow: "Education", index: "03", title: "Where I've studied." },
    education: educationEn,
    experienceSection: { eyebrow: "Experience", index: "04", title: "Where I've worked, what I'm building." },
    experience: experienceEn,
    publicationsSection: { eyebrow: "Research", index: "05", title: "Published work.", readPaper: "Read Paper" },
    publications: publicationsEn,
    skillsSection: { eyebrow: "Skills", index: "06", title: "Tools of the trade." },
    skills: skillsEn,
    contactSection: { eyebrow: "Contact", index: "07" },
    contact: {
      headline: "Have an interesting problem?",
      subheading: "Let's build something intelligent.",
      emailLabel: "Email",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    contactForm: {
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      messagePlaceholder: "Message",
      send: "Send Message",
      sending: "Sending…",
      success: "Thanks — your message is in. I'll get back to you soon.",
      error: "Something went wrong — please try again, or email me directly.",
      unconfigured: "The contact form isn't connected yet — reach out directly via email in the meantime.",
    },
    footer: { role: "AI Engineer · Germany", tagline: "Created with ☕️ and curiosity." },
    themeToggle: { switchToLight: "Switch to light mode", switchToDark: "Switch to dark mode" },
  },
  de: {
    profile: {
      name: "Nithya Madalakote Prakash",
      firstName: "Nithya",
      title: "KI-Ingenieurin",
      role: "KI-Ingenieurin / Generative-AI-Engineerin",
      positioning:
        "Ich baue produktionsreife KI-Systeme mit LLMs, RAG, KI-Agenten, NLP, Computer Vision und moderner Backend-Infrastruktur.",
      heroSupport:
        "Ich entwickle produktionsreife KI-Anwendungen in den Bereichen Generative KI, RAG, LLMs, KI-Agenten, Computer Vision und Backend-Systeme.",
      location: "Deutschland",
      education: "M.Sc. Künstliche Intelligenz — BTU Cottbus",
      email: "nithyamadalakoteprakash12@gmail.com",
      github: "https://github.com/nithya-prakash",
      githubHandle: "github.com/nithya-prakash",
      linkedin: "https://www.linkedin.com/in/nithya-prakash1209/",
      linkedinHandle: "linkedin.com/in/nithya-prakash1209",
      signature: "Entstanden mit ☕️, Neugier und viel zu vielen Experimenten.",
      resumeHref: "/resume.pdf",
    },
    heroFacts: ["KI-Ingenieurin", "Wohnhaft in Deutschland", "Offen für neue Möglichkeiten"],
    hero: {
      greeting: "Hallo,",
      name: "Hi, ich bin Nithya.",
      tagline: "KI-Ingenieurin, die intelligente Systeme baut, die wirklich funktionieren.",
      viewProjects: "Projekte ansehen",
      connect: "Kontakt aufnehmen",
      downloadResume: "Lebenslauf herunterladen",
      scroll: "Scrollen",
    },
    nav: {
      home: "Start",
      about: "Über mich",
      projects: "Projekte",
      education: "Ausbildung",
      experience: "Erfahrung",
      skills: "Skills",
      contact: "Kontakt",
      resume: "Lebenslauf",
      downloadResume: "Lebenslauf herunterladen",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
    },
    about: {
      eyebrow: "Über mich",
      index: "01",
      headline: "KI-Systeme von der Idee bis zur Produktion.",
      paragraphs: [
        "Ich bin KI-Ingenieurin und absolviere derzeit einen Master in Künstlicher Intelligenz in Deutschland. Mein Fokus liegt darauf, Forschung und moderne KI-Techniken in praxistaugliche Softwaresysteme zu überführen — nicht in Demos, die nur im Notebook funktionieren.",
        "Ich arbeite gerne an LLM-Anwendungen, Retrieval-Augmented Generation, KI-Agenten, NLP, Computer Vision, maschinellem Lernen, Backend-Engineering und MLOps / Deployment.",
        "Am wichtigsten ist mir, was nach dem ersten funktionierenden Prototyp passiert: Zuverlässigkeit, Evaluation, Skalierbarkeit, Observability, Produktionsreife und saubere Architektur.",
      ],
      workAcrossLabel: "Womit ich arbeite",
      focusAreas: [
        "LLM-Anwendungen",
        "Retrieval-Augmented Generation",
        "KI-Agenten",
        "NLP",
        "Computer Vision",
        "Machine Learning",
        "Backend-Engineering",
        "MLOps / Deployment",
      ],
      careAboutLabel: "Worauf ich Wert lege",
      values: ["Zuverlässigkeit", "Evaluation", "Skalierbarkeit", "Observability", "Produktionsreife", "Saubere Architektur"],
    },
    educationSection: { eyebrow: "Ausbildung", index: "03", title: "Wo ich studiert habe." },
    education: educationDe,
    experienceSection: { eyebrow: "Erfahrung", index: "04", title: "Wo ich gearbeitet habe, was ich gerade baue." },
    experience: experienceDe,
    publicationsSection: { eyebrow: "Forschung", index: "05", title: "Veröffentlichte Arbeit.", readPaper: "Paper lesen" },
    publications: publicationsDe,
    skillsSection: { eyebrow: "Skills", index: "06", title: "Werkzeuge des Handwerks." },
    skills: skillsDe,
    contactSection: { eyebrow: "Kontakt", index: "07" },
    contact: {
      headline: "Ein interessantes Problem?",
      subheading: "Lass uns etwas Intelligentes bauen.",
      emailLabel: "E-Mail",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    contactForm: {
      namePlaceholder: "Name",
      emailPlaceholder: "E-Mail",
      messagePlaceholder: "Nachricht",
      send: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Danke — deine Nachricht ist angekommen. Ich melde mich bald bei dir.",
      error: "Etwas ist schiefgelaufen — bitte versuch es erneut oder schreib mir direkt eine E-Mail.",
      unconfigured: "Das Kontaktformular ist noch nicht verbunden — schreib mir in der Zwischenzeit gerne direkt per E-Mail.",
    },
    footer: { role: "KI-Ingenieurin · Deutschland", tagline: "Entstanden mit ☕️ und Neugier." },
    themeToggle: { switchToLight: "Zum hellen Modus wechseln", switchToDark: "Zum dunklen Modus wechseln" },
  },
};
