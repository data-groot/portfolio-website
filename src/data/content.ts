// All site copy lives here. Edit content in this file without touching components.

export const site = {
  name: "Krishna Mihir Tatavarthi",
  firstName: "Krishna",
  lastName: "Mihir",
  surname: "Tatavarthi",
  monogram: "KM.T",
  role: "ML Engineer / AI Solutions Architect",
  taglines: [
    "Building ML systems that ship",
    "Cloud-native AI on AWS & Kubernetes",
    "Data → Models → Production",
    "LLM agents, RAG & real-world pipelines",
  ],
  email: "krishnamihir.t@gmail.com",
  linkedin: "https://www.linkedin.com/in/krishna-mihir-tatavarthi/",
  linkedinLabel: "linkedin.com/in/krishna-mihir-tatavarthi",
  github: "https://github.com/data-groot/",
  githubLabel: "github.com/data-groot",
  location: "Baltimore, MD",
  description:
    "ML Engineer and AI Solutions Architect building LLM agents, RAG workflows, and production data pipelines on AWS, Supabase, and Kubernetes. MS Computer Science at UMBC. IEEE-published NLP researcher.",
};

export const about = {
  statement:
    "I build AI systems that survive contact with production: LLM agents, RAG pipelines, and the data infrastructure underneath them.",
  paragraphs: [
    "I'm finishing my MS in Computer Science at UMBC (GPA 3.93), where my trajectory has run from classical ML research into cloud-native AI engineering: shipping agentic workflows with LangGraph and LangChain and wiring it all into secure, role-based APIs.",
    "Before the model there is always the data. I've built batch and streaming ETL/ELT pipelines on AWS, orchestrated with Airflow and dbt, and I care as much about observability and data quality as I do about model accuracy. At Date Maroon, improving Mode Analytics dashboards was my daily work. I sat with the real users who depended on them, heard what slowed them down, and turned that feedback into faster queries and clearer reports.",
    "My IEEE-published research on detecting machine-generated text sits right at the intersection I like most: rigorous ML with a real-world stake.",
  ],
  facts: [
    { label: "MS Computer Science", value: "UMBC · GPA 3.93 · 2026" },
    { label: "Research", value: "IEEE-published, NLP & ML" },
    { label: "Based in", value: "Baltimore, MD" },
    { label: "Focus", value: "LLM systems · Data platforms · Cloud" },
  ],
};

export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "ml",
    label: "ML & AI",
    skills: [
      "LangChain",
      "LangGraph",
      "AI Agents",
      "RAG",
      "LLM APIs (OpenAI, Anthropic)",
      "Hugging Face",
      "PyTorch",
      "scikit-learn",
      "BERT",
      "Pinecone",
      "Prompt Engineering",
    ],
  },
  {
    id: "data",
    label: "Data Engineering",
    skills: [
      "PySpark",
      "Apache Spark",
      "Apache Airflow",
      "dbt",
      "BigQuery",
      "Snowflake",
      "PostgreSQL",
      "FastAPI",
      "ETL Pipelines",
      "AWS Glue",
      "AWS Athena",
      "S3",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "Supabase",
      "Linux",
      "Git",
    ],
  },
  {
    id: "lang",
    label: "Languages & Web",
    skills: [
      "Python",
      "SQL",
      "TypeScript",
      "JavaScript",
      "C++",
      "React",
      "Next.js",
      "Node.js",
    ],
  },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  tag: string;
  blurb: string;
  details: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  links?: { label: string; href: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "systematlas",
    index: "01",
    title: "SystemAtlas AI",
    tag: "AI engineering intelligence platform",
    blurb:
      "Indexes a whole codebase, its databases, and its datasets into one evidence-backed knowledge graph, then answers questions about how the system fits together with real file-and-line proof instead of LLM guesses.",
    details: [
      "Full-stack platform (Node.js, Express, React) that statically indexes JavaScript, TypeScript, and Python repositories, SQL schemas, and CSV datasets into a cross-layer knowledge graph, tracing any value across seven layers from a frontend component down to the exact database column, with file and line evidence on every hop.",
      "Architected a multi-agent system (LangGraph, LangChain) where a supervisor routes each question to parallel specialist agents for repositories, architecture, and datasets, invoking typed tools validated by Zod schemas.",
      "Cut hallucinations with a deliberately non-LLM verification agent that re-checks every claim against the static index before composing an answer, labeling any hop it cannot confirm as unverified rather than inventing it.",
      "Deployed to production on Google Cloud Run (Docker, Artifact Registry, Secret Manager) with Firebase authentication and per-user isolated workspaces, engineered safe by construction: a read-only single-SELECT SQL gate, read-only database connections, and sandboxed upload handling.",
    ],
    stack: [
      "Node.js",
      "React",
      "LangGraph",
      "LangChain",
      "Google Cloud Run",
      "Firebase",
      "Docker",
    ],
    metrics: [
      { value: "7", label: "layers traced end to end" },
      { value: "3", label: "parallel specialist agents" },
      { value: "0", label: "unverified hops passed as fact" },
    ],
    links: [
      {
        label: "Live demo",
        href: "https://systematlas-134802582349.us-central1.run.app/",
        primary: true,
      },
      {
        label: "View on GitHub",
        href: "https://github.com/data-groot/System-Atlas-AI",
      },
    ],
  },
  {
    id: "pipelinepulse",
    index: "02",
    title: "PipelinePulse",
    tag: "Multi-tenant ETL observability platform",
    blurb:
      "Real-time observability for data pipelines that catches bad data and failed runs before anyone downstream notices.",
    details: [
      "Built on a bronze → silver → gold medallion architecture with FastAPI, PostgreSQL, Airflow, and dbt, handling 10,000+ events per day at sub-200ms latency.",
      "Automated data-quality checks intercept bad records before they propagate; a live Next.js dashboard streams pipeline health over WebSockets and flags anomalies as they happen.",
      "Containerized with Docker and shipped through Kubernetes with GitHub Actions CI/CD, cutting failure detection from hours to under 10 seconds.",
    ],
    stack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Airflow",
      "dbt",
      "Docker",
      "Kubernetes",
    ],
    metrics: [
      { value: "10k+", label: "events / day" },
      { value: "<10s", label: "failure detection" },
      { value: "<200ms", label: "event latency" },
    ],
    links: [
      {
        label: "Live demo",
        href: "https://pipelinepulse-web-hdnfdhiheq-uc.a.run.app/",
        primary: true,
      },
      {
        label: "View on GitHub",
        href: "https://github.com/data-groot/PipelinePulse",
      },
    ],
  },
  {
    id: "pulsar",
    index: "03",
    title: "Pulsar Classification",
    tag: "ML research · Graduate Research Assistant",
    blurb:
      "Production-ready ML pipeline that finds real pulsars in radio telescope survey data drowning in noise.",
    details: [
      "End-to-end pipeline on the HTRU2 pulsar candidate dataset covering ingestion, feature engineering, and reproducible stratified evaluation with Python, scikit-learn, and Pandas, built as a Graduate Research Assistant at UMBC in coordination with Dr. Milton Halem, formerly of NASA.",
      "Tackled severe class imbalance with SMOTE, lifting pulsar recall from 82.3% to 89.6% at 0.97 ROC-AUC.",
      "Independently validated by astrophysicist Gnanesh (postdoctoral researcher) on unseen observational data, holding up at 91% accuracy outside the benchmark set.",
      "Shipped as a Streamlit app on a FastAPI backend, containerized with Docker for reproducible deployment.",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "SMOTE", "Streamlit", "FastAPI", "Docker"],
    metrics: [
      { value: "89.6%", label: "pulsar recall (from 82.3%)" },
      { value: "0.97", label: "ROC-AUC" },
      { value: "91%", label: "accuracy on independent data" },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/data-groot/pulsar-star-prediction-service",
      },
    ],
  },
  {
    id: "medical",
    index: "04",
    title: "Pneumonia Detection",
    tag: "Deep learning · chest X-ray classification",
    blurb:
      "Detecting pneumonia in chest X-rays with deep learning: a custom CNN baseline benchmarked against three transfer-learning backbones.",
    details: [
      "Trained on 5,000+ labeled chest X-ray scans to distinguish pneumonia-positive from healthy lungs; a custom 4-block CNN baseline with dropout regularization reached 97% accuracy and 0.9949 AUC-ROC.",
      "Benchmarking DenseNet121 (the architecture behind Stanford's CheXNet), EfficientNetB3, and ResNet50V2 via transfer learning, comparing the clinical metrics that matter: precision, recall, and AUC-ROC.",
      "Built with a reproducible training/evaluation pipeline: modular data loading with augmentation, training callbacks, and automated confusion-matrix and ROC reporting.",
    ],
    stack: [
      "Python",
      "TensorFlow/Keras",
      "OpenCV",
      "DenseNet121",
      "EfficientNetB3",
      "ResNet50V2",
    ],
    metrics: [
      { value: "97%", label: "baseline CNN accuracy" },
      { value: "0.9949", label: "AUC-ROC" },
      { value: "5k+", label: "chest X-rays" },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/data-groot/Pneumonia-Detection-Deep-Learning",
      },
    ],
  },
  {
    id: "ieee",
    index: "05",
    title: "Machine-Generated Text Detection",
    tag: "IEEE publication · ICEC 2024",
    blurb:
      "Published NLP research: an LSTM/BERT detector that separates machine-written text from human writing at 99.16% accuracy.",
    details: [
      "Tatavarthi, K. M., “Detection of Machine Generated Text Using LLMs,” IEEE International Conference on Electronics & Computing (ICEC), 2024.",
      "Designed and trained an LSTM/BERT detection model achieving 99.16% accuracy distinguishing machine-generated from human-written content, a defense-relevant capability as LLM output floods the web.",
      "The research also explored the network-security side of the same problem, applying ML-based classification to DDoS attack detection.",
    ],
    stack: ["Python", "PyTorch", "BERT", "LSTM", "NLP"],
    metrics: [{ value: "99.16%", label: "detection accuracy" }],
    links: [
      {
        label: "Read on IEEE Xplore",
        href: "https://ieeexplore.ieee.org/document/10837481",
        primary: true,
      },
    ],
  },
];

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
  stack: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "velociti",
    role: "Software Engineer Intern",
    company: "Velociti Inc.",
    location: "Phoenix, AZ",
    dates: "Feb 2026 – May 2026",
    bullets: [
      "Shipped 10+ production features for a customer-facing web app in React and TypeScript on Supabase and AWS CDK, improving reliability and user-facing performance by ~48%.",
      "Built agentic AI workflows with LangGraph, LangChain, and RAG over Gemini and OpenAI-compatible LLMs, generating structured product-strategy artifacts from unstructured input via Supabase Edge Functions and PostgreSQL RPCs.",
      "Enforced secure API design across the stack: authentication checks, input validation, and role-based access control.",
    ],
    stack: ["React", "TypeScript", "LangGraph", "Supabase", "AWS CDK"],
  },
  {
    id: "datemaroon",
    role: "Software Engineer Intern",
    company: "Date Maroon",
    location: "Florida, USA",
    dates: "Sep 2025 – Jan 2026",
    bullets: [
      "Built batch and streaming ETL/ELT pipelines on AWS (Athena, Glue, S3) with Python, SQL, and PySpark, turning raw data into analytics-ready tables stakeholders could trust.",
      "Rebuilt the slowest SQL behind Mode Analytics dashboards, making reports load 50% faster while doubling queryable history from 3 to 6 months.",
      "Integrated LLM-powered SQL generation (OpenAI API) into pipeline development, cutting exploratory query development time by 60%.",
    ],
    stack: ["Python", "PySpark", "AWS", "SQL", "Mode Analytics", "OpenAI API"],
  },
  {
    id: "gra",
    role: "Graduate Research Assistant",
    company: "UMBC",
    location: "Baltimore, MD",
    dates: "Jan 2025 – May 2025",
    bullets: [
      "Conducted pulsar candidate classification research on the HTRU2 radio telescope survey dataset in coordination with Dr. Milton Halem (formerly of NASA), building an end-to-end ML pipeline with SMOTE-based imbalance handling that lifted recall from 82.3% to 89.6% at 0.97 ROC-AUC.",
      "Validated the trained models beyond the benchmark dataset in collaboration with astrophysicist Gnanesh (postdoctoral researcher), who stress-tested them on independent observational data where the models held up at 91% accuracy.",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "SMOTE"],
  },
  {
    id: "salesforce",
    role: "Virtual Salesforce Developer",
    company: "Salesforce",
    location: "Hyderabad, India",
    dates: "Apr 2023 – Jun 2023",
    bullets: [
      "Built 3+ enterprise apps with Apex, REST APIs, and Lightning Web Components, automating manual workflows; earned Apex Specialist and Process Automation Specialist super badges.",
    ],
    stack: ["Apex", "REST APIs", "LWC"],
  },
];
