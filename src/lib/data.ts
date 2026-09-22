export type Lang = "en" | "de";

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
  projectsSection: {
    eyebrow: string;
    index: string;
    title: string;
  };
  projects: Project[];
  projectCard: {
    liveDemo: string;
    github: string;
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
  personality: {
    line1: string;
    line2: string;
  };
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

const projectsEn: Project[] = [
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
    demo: "https://hybridrag-nithya-prakash.vercel.app",
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
  {
    number: "07",
    slug: "indusense",
    name: "InduSense",
    description:
      "A production-grade, event-driven monitoring platform for multi-factory industrial operations: ingests real-time sensor telemetry, detects anomalies, and manages alerts and incidents through a distributed microservices architecture.",
    stack: ["Python", "FastAPI", "Kafka", "MQTT", "InfluxDB", "Redis", "PostgreSQL", "Next.js", "Docker", "Kubernetes"],
    highlights: [
      "Five containerized microservices (API, ingestion, stream processing, anomaly detection, alerting) built with FastAPI",
      "Real-time telemetry from 1000+ simulated sensors via MQTT, processed through Kafka",
      "Statistical and ML-based anomaly detection (Isolation Forest) with alert deduplication and incident audit trails",
      "Full observability stack (Prometheus, Grafana, Jaeger) and a Next.js dashboard for live alerts and telemetry",
    ],
    github: "https://github.com/nithya-prakash/InduSense",
  },
];

const projectsDe: Project[] = [
  {
    number: "01",
    slug: "rag-knowledge-assistant",
    name: "Production RAG Knowledge Assistant",
    description:
      "Ein produktionsreifer Enterprise-Wissensassistent, der mittels Retrieval-Augmented Generation Fragen zu privaten Dokumenten beantwortet — mit belegten Antworten und Quellenangaben.",
    stack: ["Python", "FastAPI", "Next.js", "Qdrant", "PostgreSQL", "Redis", "Celery", "Docker", "LLMs", "Embeddings"],
    highlights: [
      "Hybrid-Retrieval aus semantischer Suche und BM25",
      "Reranking und quellenbewusste Antwortgenerierung",
      "Hintergrund-Dokumentenverarbeitung mit Evaluation und lokalem LLM-Support",
      "Durchgängig produktionsreife Architektur",
    ],
    github: "https://github.com/nithya-prakash/HybridRAG",
    demo: "https://hybridrag-nithya-prakash.vercel.app",
  },
  {
    number: "02",
    slug: "predictive-maintenance-ai",
    name: "Predictive Maintenance & Anomaly Detection Platform",
    description:
      "Eine industrielle KI-Plattform zur Erkennung von abnormalem Maschinenverhalten, die vorausschauende Wartungsprozesse unterstützt.",
    stack: ["Python", "FastAPI", "PyTorch", "scikit-learn", "PostgreSQL", "Docker", "Time-series ML"],
    highlights: [
      "Sensordatenverarbeitung und prädiktive Modellierung",
      "Anomalieerkennung mit Maschinenzustandsüberwachung",
      "Alarmierung und automatisierte Datenpipelines",
      "Industrielle KI, gebaut für echte Telemetriedaten",
    ],
    github: "https://github.com/nithya-prakash/PredictiveMaintenanceAI",
  },
  {
    number: "03",
    slug: "industrial-ai-copilot",
    name: "Industrial Multimodal AI Copilot",
    description:
      "Ein evidenzbasierter Diagnose-Copilot für Techniker in der Fertigung: kombiniert die Frage eines Technikers, ein Foto der Komponente, Sensordaten und technische Handbücher zu einer strukturierten, belegten Diagnose mit Konfidenzbewertung und Human-in-the-Loop-Freigabe für kritische Fälle.",
    stack: ["Python", "FastAPI", "Celery", "PostgreSQL", "Qdrant", "Docker", "Prometheus"],
    highlights: [
      "Multimodale Pipeline aus RAG über Handbücher, Computer Vision und Live-Sensoranalyse",
      "Agentenbasierte Orchestrierung mit Konfidenzbewertung und Human-in-the-Loop-Freigabe",
      "Phasenweise aufgebaut und gegen echte Postgres/Qdrant/Docker-Infrastruktur verifiziert",
    ],
    github: "https://github.com/nithya-prakash/IndustrialAICopilot",
  },
  {
    number: "04",
    slug: "sipmate-hydra",
    name: "SipMate / Hydra",
    description:
      "Ein macOS-Desktop-Assistent fürs Trinken, der eine verspielte Oberfläche mit lokaler Datenspeicherung und ML-basierter Zeitplanlogik verbindet.",
    stack: ["Python", "PySide6", "PyObjC", "SQLite", "scikit-learn", "macOS"],
    highlights: [
      "Native macOS-Integration mit prozeduralen Charakteren",
      "Eigene Desktop-Oberfläche, gebaut mit PySide6",
      "Lokale Datenspeicherung mit SQLite",
      "ML-basierte Erinnerungsplanung",
    ],
    github: "https://github.com/nithya-prakash/SipmateAssistant",
  },
  {
    number: "05",
    slug: "deutschai",
    name: "DeutschAI",
    description:
      "Eine KI-gestützte, adaptive Plattform zum Deutschlernen von A1 bis C1, so konzipiert, dass weitere Sprachen später ergänzt werden können, ohne den Kern umzubauen.",
    stack: ["Python", "FastAPI", "Next.js", "LLM Tutor Agent"],
    highlights: [
      "Spaced-Repetition-Lernmotor gepaart mit einem retrieval-gestützten KI-Tutor",
      "Lokale Sprach- und Konversationsübungsengine",
      "ML-gestützte Analysen und Empfehlungen über den gesamten Lernverlauf",
    ],
    github: "https://github.com/nithya-prakash/DeutschAI",
  },
  {
    number: "06",
    slug: "greengrid-optimizer",
    name: "GreenGrid Optimizer",
    description:
      "Eine durchgängige ML-Anwendung zur Prognose der Erzeugung erneuerbarer Energien in Deutschland anhand öffentlicher Datensätze.",
    stack: ["Python", "Machine Learning", "Time Series Forecasting"],
    highlights: [
      "Zeitreihen-Prognosepipeline auf Basis öffentlicher Daten zu erneuerbaren Energien",
      "Durchgängiger Workflow von der Datenaufnahme bis zur Modellausgabe",
    ],
    github: "https://github.com/nithya-prakash/GreenGridOptimizer",
  },
  {
    number: "07",
    slug: "indusense",
    name: "InduSense",
    description:
      "Eine produktionsreife, ereignisgesteuerte Monitoring-Plattform für Industriebetriebe mit mehreren Standorten: erfasst Sensortelemetrie in Echtzeit, erkennt Anomalien und verwaltet Alarme und Vorfälle über eine verteilte Microservices-Architektur.",
    stack: ["Python", "FastAPI", "Kafka", "MQTT", "InfluxDB", "Redis", "PostgreSQL", "Next.js", "Docker", "Kubernetes"],
    highlights: [
      "Fünf containerisierte Microservices (API, Ingestion, Stream-Verarbeitung, Anomalieerkennung, Alarmierung) mit FastAPI",
      "Echtzeit-Telemetrie von 1000+ simulierten Sensoren via MQTT, verarbeitet über Kafka",
      "Statistische und ML-basierte Anomalieerkennung (Isolation Forest) mit Alarm-Deduplizierung und Vorfalls-Audit-Trails",
      "Vollständiger Observability-Stack (Prometheus, Grafana, Jaeger) und ein Next.js-Dashboard für Live-Alarme und Telemetrie",
    ],
    github: "https://github.com/nithya-prakash/InduSense",
  },
];

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

const experienceDe: JourneyEntry[] = [
  {
    period: "Jun 2024 — Jan 2025",
    title: "Java Full Stack Developer Trainee",
    place: "Palle Technologies, Bengaluru, Indien",
    description:
      "Strukturiertes 6-monatiges Full-Stack-Entwicklungsprogramm mit Erfahrung in Java, Spring Boot, MySQL und responsiver Frontend-Entwicklung. REST-APIs entwickelt und getestet sowie Frontend- und Backend-Komponenten für interne Webanwendungen integriert. Starke Problemlösungskompetenz, Beteiligung an Code-Reviews und Teamzusammenarbeit über den gesamten SDLC hinweg.",
    tags: ["Java", "Spring Boot", "MySQL", "REST APIs", "Full Stack"],
  },
  {
    period: "Aktuell",
    title: "Im Aufbau",
    place: "Eigene Projekte",
    description:
      "Produktionsreife KI-Systeme, RAG-Anwendungen, intelligente Backend-Systeme und KI-gestützte Produkte.",
    tags: ["RAG", "KI-Agenten", "Backend-Systeme"],
    current: true,
  },
];

const skillsEn: SkillGroup[] = [
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

const skillsDe: SkillGroup[] = [
  {
    category: "KI / ML",
    items: ["Python", "PyTorch", "scikit-learn", "Transformers", "NLP", "Computer Vision", "Machine Learning", "Deep Learning"],
  },
  {
    category: "Generative KI",
    items: ["LLMs", "RAG", "Embeddings", "Vector Search", "Hybrid Retrieval", "Reranking", "AI Agents", "Prompt Engineering", "LLM Evaluation"],
  },
  {
    category: "Backend",
    items: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "Redis", "Celery"],
  },
  {
    category: "Infrastruktur",
    items: ["Docker", "Git", "GitHub", "Linux", "CI/CD", "MLOps"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Datenbanken / Daten",
    items: ["PostgreSQL", "Qdrant", "SQLite", "SQL"],
  },
];

const publicationsEn: Publication[] = [
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

const publicationsDe: Publication[] = [
  {
    title: "MediSync – Streamlining Healthcare Continuity",
    venue: "IJRPR",
    year: "2023",
    identifier: "ISSN 2582-7421",
    href: "/publications/medisync-ijrpr-2023.pdf",
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
    projectsSection: { eyebrow: "Selected Work", index: "02", title: "Things I've built end to end." },
    projects: projectsEn,
    projectCard: { liveDemo: "Live demo", github: "GitHub" },
    educationSection: { eyebrow: "Education", index: "03", title: "Where I've studied." },
    education: educationEn,
    experienceSection: { eyebrow: "Experience", index: "04", title: "Where I've worked, what I'm building." },
    experience: experienceEn,
    publicationsSection: { eyebrow: "Research", index: "05", title: "Published work.", readPaper: "Read Paper" },
    publications: publicationsEn,
    skillsSection: { eyebrow: "Skills", index: "06", title: "Tools of the trade." },
    skills: skillsEn,
    personality: {
      line1: "Most of my best ideas start somewhere between a blank editor and a cup of coffee.",
      line2: "Built with ☕️, curiosity, and an unhealthy number of experiments.",
    },
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
    projectsSection: { eyebrow: "Ausgewählte Arbeiten", index: "02", title: "Was ich von Anfang bis Ende gebaut habe." },
    projects: projectsDe,
    projectCard: { liveDemo: "Live-Demo", github: "GitHub" },
    educationSection: { eyebrow: "Ausbildung", index: "03", title: "Wo ich studiert habe." },
    education: educationDe,
    experienceSection: { eyebrow: "Erfahrung", index: "04", title: "Wo ich gearbeitet habe, was ich gerade baue." },
    experience: experienceDe,
    publicationsSection: { eyebrow: "Forschung", index: "05", title: "Veröffentlichte Arbeit.", readPaper: "Paper lesen" },
    publications: publicationsDe,
    skillsSection: { eyebrow: "Skills", index: "06", title: "Werkzeuge des Handwerks." },
    skills: skillsDe,
    personality: {
      line1: "Die meisten meiner besten Ideen entstehen irgendwo zwischen einem leeren Editor und einer Tasse Kaffee.",
      line2: "Entstanden mit ☕️, Neugier und einer ungesunden Anzahl an Experimenten.",
    },
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
