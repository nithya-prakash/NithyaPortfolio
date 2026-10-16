import type { Lang } from "@/lib/data";

type L = Record<Lang, string>;

export type Metric = { value: string; label: L };

export type Flagship = {
  slug: string;
  name: string;
  tagline: L;
  problem: L;
  built: L;
  limits: L;
  metrics: Metric[];
  stack: string[];
  github: string;
  gif: string;
  demo?: string;
};

export type OtherWork = {
  name: string;
  line: L;
  metric: L;
  stack: string[];
  github: string;
  demo?: string;
};

const raw = (repo: string, path: string) =>
  `https://raw.githubusercontent.com/nithya-prakash/${repo}/main/${path}`;

export const flagships: Flagship[] = [
  {
    slug: "industrial-ai-copilot",
    name: "Industrial AI Copilot",
    tagline: {
      en: "A maintenance copilot that cites its sources, checks sensors, and asks a human before acting.",
      de: "Ein Wartungs-Copilot, der Quellen zitiert, Sensoren prüft und vor jeder Aktion einen Menschen fragt.",
    },
    problem: {
      en: "Technicians lose time searching manuals and guessing from sensor trends. A wrong answer on a machine is costly.",
      de: "Techniker verlieren Zeit mit der Suche in Handbüchern und Sensor-Raten. Eine falsche Antwort an einer Maschine ist teuer.",
    },
    built: {
      en: "LangGraph multi-agent supervisor with human approval, hybrid search (BM25 + dense + cross-encoder rerank) over equipment manuals, and z-score sensor checks on a real hydraulic test rig dataset.",
      de: "LangGraph-Multi-Agent-Supervisor mit menschlicher Freigabe, Hybridsuche (BM25 + Dense + Cross-Encoder-Reranking) über Gerätehandbücher und Z-Score-Sensorprüfungen auf echten Hydraulik-Prüfstanddaten.",
    },
    limits: {
      en: "Valve faults are only weakly detectable (AUROC 0.84). The Anthropic path is covered by mocked tests only.",
      de: "Ventilfehler sind nur schwach erkennbar (AUROC 0,84). Der Anthropic-Pfad ist nur mit Mocks getestet.",
    },
    metrics: [
      { value: "0.959", label: { en: "retrieval MRR, hybrid + rerank (53 questions)", de: "Retrieval-MRR, Hybrid + Rerank (53 Fragen)" } },
      { value: "0.91", label: { en: "citation precision of agent answers", de: "Zitationspräzision der Agent-Antworten" } },
      { value: "7 / 8", label: { en: "unanswerable questions declined", de: "unbeantwortbare Fragen abgelehnt" } },
    ],
    stack: ["LangGraph", "RAG", "FastAPI", "Qdrant", "PostgreSQL", "Celery", "Next.js"],
    github: "https://github.com/nithya-prakash/IndustrialAICopilot",
    gif: raw("IndustrialAICopilot", "docs/images/supervisor-demo.gif"),
  },
  {
    slug: "clauseguard",
    name: "ClauseGuard",
    tagline: {
      en: "First-pass compliance screening of German contracts, with every finding tied to a verified citation.",
      de: "Erste Compliance-Prüfung deutscher Verträge, jeder Befund mit überprüfter Fundstelle.",
    },
    problem: {
      en: "Reviewing contract clauses against BGB and DSGVO is slow, and an LLM that invents a citation is worse than no tool.",
      de: "Die Prüfung von Vertragsklauseln gegen BGB und DSGVO ist langsam, und ein LLM mit erfundener Fundstelle ist schlimmer als kein Werkzeug.",
    },
    built: {
      en: "Hybrid BGB/DSGVO retrieval (RRF, cross-encoder), an evidence-sufficiency gate, citation verification, a LoRA-tuned DistilBERT classifier, Celery worker, Next.js UI, and a local Ollama reasoning provider.",
      de: "Hybrides BGB/DSGVO-Retrieval (RRF, Cross-Encoder), Evidenz-Gate, Zitationsprüfung, LoRA-feingetunter DistilBERT-Klassifikator, Celery-Worker, Next.js-UI und lokaler Ollama-Provider.",
    },
    limits: {
      en: "The LoRA classifier does not beat a TF-IDF baseline (0.56 vs 0.63). Benchmarks are small and hand-written. Live Anthropic inference is untested.",
      de: "Der LoRA-Klassifikator schlägt eine TF-IDF-Baseline nicht (0,56 vs. 0,63). Benchmarks sind klein und selbst geschrieben. Live-Anthropic-Inferenz ist ungetestet.",
    },
    metrics: [
      { value: "1.00", label: { en: "Recall@5 on 15 retrieval queries", de: "Recall@5 bei 15 Retrieval-Fragen" } },
      { value: "0.79", label: { en: "evidence-gate accuracy on 63 clauses", de: "Genauigkeit des Evidenz-Gates auf 63 Klauseln" } },
      { value: "135", label: { en: "tests passing, ruff and mypy clean", de: "Tests bestanden, ruff und mypy sauber" } },
    ],
    stack: ["RAG", "LLM", "LoRA", "Qdrant", "Neo4j", "FastAPI", "Next.js"],
    github: "https://github.com/nithya-prakash/ClauseGuard",
    gif: raw("ClauseGuard", "docs/demo.gif"),
  },
  {
    slug: "fleetops",
    name: "FleetOps",
    tagline: {
      en: "MLOps for edge AI: roll a model out to a device fleet, and roll it back automatically when quality drops.",
      de: "MLOps für Edge-KI: Modelle auf eine Geräteflotte ausrollen und bei Qualitätsverlust automatisch zurückrollen.",
    },
    problem: {
      en: "Shipping a new model to factory devices is risky. One bad rollout can stop a line, and drift goes unnoticed.",
      de: "Ein neues Modell auf Fabrikgeräte zu bringen ist riskant. Ein schlechter Rollout kann eine Linie stoppen, Drift bleibt unbemerkt.",
    },
    built: {
      en: "Central model registry, quality-gated canary rollout with automatic rollback, drift detection and monitoring, over MQTT with simulated edge agents, trained on the real UCI hydraulic rig data.",
      de: "Zentrale Modell-Registry, qualitätsgesteuerter Canary-Rollout mit automatischem Rollback, Drift-Erkennung und Monitoring über MQTT mit simulierten Edge-Agenten, trainiert auf echten UCI-Hydraulikdaten.",
    },
    limits: {
      en: "The model is a small MLP on five sensor means. The point is the rollout, rollback and monitoring machinery, not the detector.",
      de: "Das Modell ist ein kleines MLP auf fünf Sensor-Mittelwerten. Im Fokus stehen Rollout, Rollback und Monitoring, nicht der Detektor.",
    },
    metrics: [
      { value: "0.85", label: { en: "F1 on 662 held-out real rig cycles", de: "F1 auf 662 zurückgehaltenen echten Zyklen" } },
      { value: "367", label: { en: "tests plus 52 live security checks", de: "Tests plus 52 Live-Sicherheitsprüfungen" } },
      { value: "12 s", label: { en: "rollout to 100 simulated devices", de: "Rollout auf 100 simulierte Geräte" } },
    ],
    stack: ["MLOps", "MQTT", "FastAPI", "Prometheus", "Docker", "Kubernetes"],
    github: "https://github.com/nithya-prakash/FleetOps",
    gif: raw("FleetOps", "docs/demo.gif"),
  },
  {
    slug: "hybridrag",
    name: "HybridRAG",
    tagline: {
      en: "A multi-user RAG assistant that declines to answer when it can't back the answer up.",
      de: "Ein Mehrbenutzer-RAG-Assistent, der ablehnt, wenn er die Antwort nicht belegen kann.",
    },
    problem: {
      en: "Plain vector search misses exact terms and mixes up similar topics, and a RAG system that answers everything will hallucinate.",
      de: "Reine Vektorsuche verfehlt exakte Begriffe und verwechselt ähnliche Themen, und ein RAG-System, das alles beantwortet, halluziniert.",
    },
    built: {
      en: "Dense + BM25 retrieval fused with RRF, cross-encoder reranking, a guard that declines before generating, citation-aware answers, background ingestion, and an eval harness with a deliberately hard test set.",
      de: "Dense- + BM25-Retrieval mit RRF-Fusion, Cross-Encoder-Reranking, ein Guard, der vor der Generierung ablehnt, zitierfähige Antworten, Hintergrund-Ingestion und ein Eval-Harness mit bewusst schwerem Testset.",
    },
    limits: {
      en: "The guard's recall tops out at 76.5%, so about 1 in 4 unanswerable questions still reaches the LLM. On my own small corpus retrieval is near ceiling, which is why the hard set exists.",
      de: "Der Recall des Guards liegt bei höchstens 76,5 %, etwa jede vierte unbeantwortbare Frage erreicht also das LLM. Auf meinem kleinen Korpus ist Retrieval nahe am Limit, daher das schwere Testset.",
    },
    metrics: [
      { value: "0.817", label: { en: "Recall@1 on 30 hard questions (dense alone 0.483)", de: "Recall@1 bei 30 schweren Fragen (nur Dense: 0,483)" } },
      { value: "93%", label: { en: "hallucination-guard accuracy", de: "Genauigkeit des Halluzinations-Guards" } },
      { value: "284", label: { en: "tests (250 backend, 34 eval)", de: "Tests (250 Backend, 34 Eval)" } },
    ],
    stack: ["RAG", "Hybrid search", "FastAPI", "Qdrant", "PostgreSQL", "Celery", "Next.js"],
    github: "https://github.com/nithya-prakash/HybridRAG",
    gif: raw("HybridRAG", "docs/screenshots/demo.gif"),
    demo: "https://hybridrag-nithya-prakash.vercel.app",
  },
];

export const others: OtherWork[] = [
  {
    name: "InduSense",
    line: { en: "Event-driven industrial IoT monitoring: MQTT, Kafka, anomaly detection, Kubernetes.", de: "Ereignisgesteuertes IIoT-Monitoring: MQTT, Kafka, Anomalieerkennung, Kubernetes." },
    metric: { en: "148 tests; dashboard p95 65 ms at 50 users", de: "148 Tests; Dashboard p95 65 ms bei 50 Nutzern" },
    stack: ["Kafka", "MQTT", "FastAPI", "Kubernetes"],
    github: "https://github.com/nithya-prakash/InduSense",
  },
  {
    name: "InferenceStack",
    line: { en: "Defect-detection inference: C++17 ONNX engine, Java 21 gateway, PostgreSQL and dbt analytics.", de: "Defekterkennungs-Inferenz: C++17-ONNX-Engine, Java-21-Gateway, PostgreSQL und dbt." },
    metric: { en: "Image AUROC 0.987 on MVTec bottle", de: "Bild-AUROC 0,987 auf MVTec bottle" },
    stack: ["C++", "Java", "ONNX", "dbt"],
    github: "https://github.com/nithya-prakash/InferenceStack",
  },
  {
    name: "PredictiveMaintenanceAI",
    line: { en: "Remaining useful life on NASA C-MAPSS with prediction intervals and SHAP.", de: "Restnutzungsdauer auf NASA C-MAPSS mit Vorhersageintervallen und SHAP." },
    metric: { en: "RMSE 17.19; 90% interval covers 91%", de: "RMSE 17,19; 90%-Intervall deckt 91 % ab" },
    stack: ["PyTorch", "SHAP", "FastAPI", "PostgreSQL"],
    github: "https://github.com/nithya-prakash/PredictiveMaintenanceAI",
  },
  {
    name: "DefectVisionAI",
    line: { en: "Defect inspection on MVTec AD: PatchCore-style detector vs ResNet18, human review routing.", de: "Defektprüfung auf MVTec AD: PatchCore-Detektor vs. ResNet18, Weiterleitung an Prüfer." },
    metric: { en: "PatchCore-lite AUROC 0.944 vs 0.577 baseline", de: "PatchCore-lite AUROC 0,944 vs. 0,577 Baseline" },
    stack: ["PyTorch", "Computer Vision", "FastAPI"],
    github: "https://github.com/nithya-prakash/DefectVisionAI",
  },
  {
    name: "GreenGridOptimizer",
    line: { en: "Hourly German wind and solar forecasts, 1 to 72 h ahead, XGBoost vs Prophet with SHAP.", de: "Stündliche Wind- und Solarprognosen für Deutschland, 1 bis 72 h, XGBoost vs. Prophet mit SHAP." },
    metric: { en: "86 tests; 0 errors in a 1,234-request load test", de: "86 Tests; 0 Fehler im Lasttest mit 1.234 Anfragen" },
    stack: ["XGBoost", "Time series", "Streamlit", "FastAPI"],
    github: "https://github.com/nithya-prakash/GreenGridOptimizer",
  },
  {
    name: "AirQualityCascade",
    line: { en: "PM2.5 and NO2 forecasts for 315 German stations; do neighbouring stations help?", de: "PM2,5- und NO2-Prognosen für 315 deutsche Stationen; helfen Nachbarstationen?" },
    metric: { en: "PM2.5 t+1h R² 0.60 vs 0.45 persistence", de: "PM2,5 t+1h R² 0,60 vs. 0,45 Persistenz" },
    stack: ["XGBoost", "Transformer", "GNN", "Streamlit"],
    github: "https://github.com/nithya-prakash/AirQualityCascade",
  },
  {
    name: "ForgeRL",
    line: { en: "Smart-factory scheduling: a PPO agent vs dispatching rules and OR-Tools CP-SAT under machine breakdowns.", de: "Smart-Factory-Scheduling: PPO-Agent vs. Dispatching-Regeln und OR-Tools CP-SAT bei Maschinenausfällen." },
    metric: { en: "PPO lost to the best rule by 32%; 47 tests", de: "PPO verlor 32 % gegen die beste Regel; 47 Tests" },
    stack: ["Reinforcement learning", "Stable-Baselines3", "OR-Tools", "SimPy"],
    github: "https://github.com/nithya-prakash/ForgeRL",
  },
  {
    name: "JobIntelGermany",
    line: { en: "Power BI-ready NLP and data platform for German job-market analysis.", de: "Power-BI-fähige NLP- und Datenplattform zur Analyse des deutschen Arbeitsmarkts." },
    metric: { en: "Skill extraction precision 0.949 (106 ads)", de: "Skill-Extraktion Präzision 0,949 (106 Anzeigen)" },
    stack: ["NLP", "Power BI", "Python"],
    github: "https://github.com/nithya-prakash/JobIntelGermany",
  },
];

export const ui: Record<
  Lang,
  {
    status: string;
    headline: string;
    sub: string;
    ctaWork: string;
    ctaContact: string;
    resume: string;
    flagshipLabel: string;
    flagshipTitle: string;
    problem: string;
    built: string;
    limits: string;
    code: string;
    othersLabel: string;
    othersTitle: string;
    live: string;
    howLabel: string;
    howTitle: string;
    how: { title: string; text: string; proof: string }[];
    backgroundLabel: string;
    backgroundTitle: string;
    skillsLabel: string;
    nav: { work: string; other: string; about: string; ask: string; skills: string; contact: string };
    approachProof: string;
    eduLabel: string;
    eduTitle: string;
    researchLabel: string;
    researchTitle: string;
    expLabel: string;
    expTitle: string;
    now: string;
    anotherCup: string;
    quotes: string[];
    asides: string[];
    pops: Record<string, string>;
    close: string;
  }
> = {
  en: {
    status: "Open to Werkstudent and internship roles in Germany",
    headline: "AI systems, measured honestly.",
    sub: "AI engineer building RAG, agent and ML systems. Every project ships with tests, evaluation numbers and a demo you can watch, including what doesn't work.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
    resume: "Resume",
    flagshipLabel: "Flagship work",
    flagshipTitle: "Four projects, with evidence.",
    problem: "Problem",
    built: "What I built",
    limits: "Honest limits",
    code: "Code",
    othersLabel: "Other important work",
    othersTitle: "More systems I've built.",
    live: "Live demo",
    howLabel: "How I work",
    howTitle: "What happens after the first prototype.",
    how: [
      { title: "Evaluate first", text: "Labelled test sets, confidence intervals and baselines come before any claim.", proof: "HybridRAG ships a deliberately hard question set because its own corpus was too easy." },
      { title: "Report the misses", text: "Every README says what didn't work and what it can't prove.", proof: "ClauseGuard's LoRA classifier lost to a TF-IDF baseline, and the README says so." },
      { title: "Run real infrastructure", text: "Docker, CI, load tests and Kubernetes instead of mocks.", proof: "InduSense: 148 tests, 15 Kubernetes pods verified, k6 load tests." },
    ],
    backgroundLabel: "Background",
    backgroundTitle: "Education, experience, research.",
    skillsLabel: "Skills",
    nav: { work: "Work", other: "More", about: "Journey", ask: "Ask", skills: "Skills", contact: "Contact" },
    approachProof: "Proof",
    eduLabel: "Education",
    eduTitle: "Where I've studied.",
    researchLabel: "Research",
    researchTitle: "Published work.",
    expLabel: "Experience",
    expTitle: "Where I've worked.",
    now: "Now",
    anotherCup: "Another cup",
    quotes: [
      "Built with coffee, curiosity, and a suspicious number of experiments.",
      "Loss function: caffeine. Optimizer: stubbornness.",
      "One more cup, one more eval run.",
      "Debugged by espresso, deployed with oat-milk confidence.",
      "Fine-tuned on caffeine, validated on a second cup.",
    ],
    asides: [
      "Debugging is a conversation with a very literal coworker.",
      "Good code is like good coffee: strong, clear, and no surprises.",
      "Ship small, measure honestly, refill the cup.",
    ],
    pops: {
      work: "Psst: every number here comes from a script in the repo.",
      more: "Every README here lists what the project can't do.",
      ask: "Try asking it something it can't know. It will say so.",
      approach: "Boring answer: evaluation first, vibes later.",
      experience: "From Java trainee to RAG systems. Curiosity compounds.",
      skills: "I know what a reranker is. I also know when it doesn't help.",
      contact: "Coffee chat? I'm in Germany and open to Werkstudent roles.",
    },
    close: "Close",
  },
  de: {
    status: "Offen für Werkstudent- und Praktikumsstellen in Deutschland",
    headline: "KI-Systeme, ehrlich gemessen.",
    sub: "KI-Ingenieurin für RAG-, Agenten- und ML-Systeme. Jedes Projekt kommt mit Tests, Evaluationszahlen und einer Demo, auch zu dem, was nicht funktioniert.",
    ctaWork: "Arbeiten ansehen",
    ctaContact: "Kontakt",
    resume: "Lebenslauf",
    flagshipLabel: "Hauptprojekte",
    flagshipTitle: "Vier Projekte, mit Belegen.",
    problem: "Problem",
    built: "Was ich gebaut habe",
    limits: "Ehrliche Grenzen",
    code: "Code",
    othersLabel: "Weitere wichtige Arbeiten",
    othersTitle: "Weitere Systeme, die ich gebaut habe.",
    live: "Live-Demo",
    howLabel: "Arbeitsweise",
    howTitle: "Was nach dem ersten Prototyp passiert.",
    how: [
      { title: "Erst evaluieren", text: "Gelabelte Testsets, Konfidenzintervalle und Baselines kommen vor jeder Behauptung.", proof: "HybridRAG bringt ein bewusst schweres Fragenset mit, weil der eigene Korpus zu einfach war." },
      { title: "Fehlschläge nennen", text: "Jedes README sagt, was nicht funktioniert und was es nicht beweisen kann.", proof: "ClauseGuards LoRA-Klassifikator verlor gegen eine TF-IDF-Baseline, und das README sagt es." },
      { title: "Echte Infrastruktur", text: "Docker, CI, Lasttests und Kubernetes statt Mocks.", proof: "InduSense: 148 Tests, 15 Kubernetes-Pods verifiziert, k6-Lasttests." },
    ],
    backgroundLabel: "Hintergrund",
    backgroundTitle: "Ausbildung, Erfahrung, Forschung.",
    skillsLabel: "Skills",
    nav: { work: "Projekte", other: "Mehr", about: "Weg", ask: "Fragen", skills: "Skills", contact: "Kontakt" },
    approachProof: "Beleg",
    eduLabel: "Ausbildung",
    eduTitle: "Wo ich studiert habe.",
    researchLabel: "Forschung",
    researchTitle: "Veröffentlichte Arbeit.",
    expLabel: "Erfahrung",
    expTitle: "Wo ich gearbeitet habe.",
    now: "Jetzt",
    anotherCup: "Noch eine Tasse",
    quotes: [
      "Gebaut mit Kaffee, Neugier und verdächtig vielen Experimenten.",
      "Verlustfunktion: Koffein. Optimierer: Sturheit.",
      "Noch eine Tasse, noch ein Eval-Lauf.",
      "Von Espresso debuggt, mit Hafermilch-Selbstvertrauen deployt.",
      "Auf Koffein feingetunt, mit der zweiten Tasse validiert.",
    ],
    asides: [
      "Debuggen ist ein Gespräch mit einem sehr wörtlichen Kollegen.",
      "Guter Code ist wie guter Kaffee: stark, klar und ohne Überraschungen.",
      "Klein ausliefern, ehrlich messen, Tasse nachfüllen.",
    ],
    pops: {
      work: "Psst: Jede Zahl hier stammt aus einem Skript im Repo.",
      more: "Jedes README hier nennt, was das Projekt nicht kann.",
      ask: "Frag etwas, das es nicht wissen kann. Es sagt es dir.",
      approach: "Langweilige Antwort: erst evaluieren, dann Bauchgefühl.",
      experience: "Vom Java-Trainee zu RAG-Systemen. Neugier zahlt sich aus.",
      skills: "Ich weiß, was ein Reranker ist. Und wann er nicht hilft.",
      contact: "Kaffee-Chat? Ich bin in Deutschland und offen für Werkstudentenstellen.",
    },
    close: "Schließen",
  },
};

export const askUi: Record<
  Lang,
  {
    label: string;
    title: string;
    sub: string;
    placeholder: string;
    button: string;
    chips: string[];
    steps: string[];
    answerFrom: string;
    declined: string;
    declinedHint: string;
    noLlm: string;
    score: string;
    open: string;
    notFound: string;
  }
> = {
  en: {
    label: "Ask my portfolio",
    title: "A tiny RAG system, running in your browser.",
    sub: "Ask anything about my work. It searches this site's own content with BM25 and answers only when the evidence is strong enough. Otherwise it says it doesn't know.",
    placeholder: "e.g. What didn't work in ClauseGuard?",
    button: "Ask",
    chips: [
      "What didn't work in ClauseGuard?",
      "Which project has the best retrieval score?",
      "Where has she worked?",
      "Is she open to roles in Germany?",
      "Who won the football world cup?",
    ],
    steps: ["tokenize", "BM25 retrieve", "evidence gate", "cite"],
    answerFrom: "Answer, quoted from the page",
    declined: "I don't have evidence for that on this site, so I won't guess.",
    declinedHint: "Try asking about a project, a result, her experience or education.",
    noLlm: "No LLM, no server: retrieval and an evidence gate, the same idea as HybridRAG and ClauseGuard. Nothing you type leaves your browser.",
    score: "score",
    open: "Open",
    notFound: "Nothing on this site about",
  },
  de: {
    label: "Frag mein Portfolio",
    title: "Ein winziges RAG-System, direkt im Browser.",
    sub: "Frag alles zu meiner Arbeit. Es durchsucht den Inhalt dieser Seite mit BM25 und antwortet nur, wenn die Belege stark genug sind. Sonst sagt es, dass es das nicht weiß.",
    placeholder: "z. B. Was hat bei ClauseGuard nicht funktioniert?",
    button: "Fragen",
    chips: [
      "Was hat bei ClauseGuard nicht funktioniert?",
      "Welches Projekt hat den besten Retrieval-Wert?",
      "Wo hat sie gearbeitet?",
      "Ist sie offen für Stellen in Deutschland?",
      "Wer wurde Fußball-Weltmeister?",
    ],
    steps: ["tokenisieren", "BM25-Suche", "Evidenz-Gate", "zitieren"],
    answerFrom: "Antwort, zitiert von der Seite",
    declined: "Dafür habe ich auf dieser Seite keine Belege, deshalb rate ich nicht.",
    declinedHint: "Frag nach einem Projekt, einem Ergebnis, ihrer Erfahrung oder Ausbildung.",
    noLlm: "Kein LLM, kein Server: Retrieval und ein Evidenz-Gate, dieselbe Idee wie bei HybridRAG und ClauseGuard. Nichts, was du tippst, verlässt deinen Browser.",
    score: "Score",
    open: "Öffnen",
    notFound: "Dazu steht nichts auf dieser Seite",
  },
};
