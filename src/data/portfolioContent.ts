export interface ProjectCaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'GenAI & LLMs' | 'XR / Spatial Computing' | 'Distributed Systems' | 'Machine Learning';
  featured: boolean;
  tagline: string;
  problem: string;
  whyBuilt: string;
  architecture: string[];
  techStack: string[];
  challenges: { problem: string; solution: string }[];
  codeHighlight: {
    filename: string;
    language: string;
    code: string;
    explanation: string;
  };
  metrics: string[];
  timeline: string;
  lessonsLearned: string[];
  futureImprovements: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-Time';
  description: string[];
  technologies: string[];
  impactMetrics: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  details?: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Raja Diyavath",
    title: "Software & AI Engineer",
    degreeHeadline: "Automobile Engineering Graduate | VNR VJIET",
    location: "Hyderabad, India",
    email: "rajadyavath1103@gmail.com",
    phone: "+91 9618042395",
    github: "https://github.com/rajadyavath",
    linkedin: "https://linkedin.com/in/raja-diyavath",
    leetcode: "https://leetcode.com/u/rajadyavath",
    targetRoles: [
      "Software Engineering Intern 2026",
      "New Grad Software Engineer",
      "AI/ML Systems Engineer",
      "Backend Engineer"
    ],
    bio: "Automobile Engineering graduate from VNR VJIET (CGPA: 7.26) with hands-on experience building AI-powered applications, low-latency FastAPI backend services, LLM RAG pipelines, and VR tools.",
    tagline: "Bridging mechanical & automotive background with scalable AI systems, FastAPI backends, and spatial computing.",
    availability: "Open for Software Engineering Intern & New Grad Roles (2026)",
  },

  stats: [
    { label: "Breast Cancer Model Accuracy", value: "95%+", suffix: "Wisconsin Dataset" },
    { label: "Hyundai Service Delay Cut", value: "20%", suffix: "Data Analytics Insights" },
    { label: "Customer Satisfaction", value: "+15%", suffix: "Automotive Analytics" },
    { label: "VR Voice Commands", value: "10+", suffix: "Wit.ai + OpenXR" },
  ],

  storyNarrative: [
    {
      stage: "01. Engineering Roots",
      title: "Automobile Engineering at VNR VJIET",
      content: "I started my engineering education in Automobile Engineering at VNR VJIET, Hyderabad. Working with vehicle diagnostics, mechanical telemetry, and system data sparked my deep interest in software engineering and algorithms.",
    },
    {
      stage: "02. Transition to Software & AI",
      title: "Building FastAPI Backends & LLM RAG Systems",
      content: "I dedicated myself to mastering Data Structures & Algorithms, Python backend frameworks, and Generative AI. During my internship at CogFocus, I built Python backend microservices and FastAPI endpoints for real-time model inference and vector retrieval.",
    },
    {
      stage: "03. Real-World Applications",
      title: "Data Pipelines, VR & Machine Learning",
      content: "From analyzing Hyundai service datasets to cut delays by 20%, to fine-tuning LLaMA-2/Gemma models with FAISS vector search and developing VR voice assistant modules in Unity, I enjoy building software that solves practical problems.",
    }
  ],

  projects: [
    {
      id: "llm-rag-chatbot",
      title: "LLM Fine-Tuning & RAG Domain Chatbot",
      subtitle: "Domain Q&A system using LLaMA-2 & Gemma-2B models, FAISS vector search, and FastAPI",
      category: "GenAI & LLMs",
      featured: true,
      tagline: "Fine-tuned Gemma-2B & LLaMA-2 models paired with dense FAISS retrieval for low-latency domain Q&A.",
      problem: "General-purpose language models often struggle or hallucinate when asked questions about specialized domain documentation.",
      whyBuilt: "I wanted to build a domain-specific Q&A pipeline that combines fine-tuned open models (LLaMA-2 & Gemma-2B) with FAISS vector embeddings for fast, context-grounded responses.",
      architecture: [
        "Embeddings: Chunked domain docs and generated dense embeddings with Hugging Face transformers.",
        "FAISS Index: Stored vector embeddings for sub-second similarity search.",
        "RAG Pipeline: Augmented system prompts with top-k retrieved context chunks.",
        "FastAPI Service: Exposed an async REST API for real-time inference."
      ],
      techStack: ["Python", "PyTorch", "Hugging Face", "LLaMA-2", "Gemma-2B", "RAG", "FAISS", "NLP", "FastAPI"],
      challenges: [
        {
          problem: "High memory overhead and latency during multi-turn domain Q&A.",
          solution: "Quantized model weights (Gemma-2B) and optimized FAISS inner-product index search."
        },
        {
          problem: "Retrieval noise causing irrelevant context in system prompts.",
          solution: "Implemented similarity thresholding and top-k reranking before sending chunks to the LLM."
        }
      ],
      codeHighlight: {
        filename: "rag_pipeline.py",
        language: "python",
        code: `import faiss
import numpy as np
from fastapi import FastAPI
from transformers import AutoTokenizer, AutoModelForCausalLM

app = FastAPI(title="Domain RAG API")

class RAGPipeline:
    def __init__(self, model_path: str, index_path: str):
        self.tokenizer = AutoTokenizer.from_pretrained(model_path)
        self.model = AutoModelForCausalLM.from_pretrained(model_path, device_map="auto")
        self.index = faiss.read_index(index_path)

    async def query(self, prompt: str, top_k: int = 3):
        # Generate query embedding & retrieve top-k context
        q_vec = self.embed(prompt)
        distances, indices = self.index.search(np.array([q_vec]), top_k)
        
        # Build prompt & generate response
        context_prompt = self.format_context(prompt, indices[0])
        inputs = self.tokenizer(context_prompt, return_tensors="pt").to(self.model.device)
        outputs = self.model.generate(**inputs, max_new_tokens=256)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)`,
        explanation: "Production-ready async FastAPI route combining FAISS vector search with Hugging Face inference."
      },
      metrics: [
        "Sub-300ms vector search retrieval time",
        "Higher precision on domain-specific question answering",
        "Optimized inference using quantized Gemma-2B & LLaMA-2"
      ],
      timeline: "4 Weeks",
      lessonsLearned: [
        "Quality text chunking and vector embeddings dictate 80% of RAG accuracy.",
        "FastAPI async endpoints handle concurrent inference requests smoothly."
      ],
      futureImprovements: [
        "Add hybrid retrieval combining BM25 keyword search with FAISS dense vectors.",
        "Integrate vLLM engine for 3x faster token throughput."
      ],
      githubUrl: "https://github.com/rajadyavath",
    },
    {
      id: "ai-vr-assistant",
      title: "AI-Powered VR Assistant for Automotive Training",
      subtitle: "Proof-of-Concept built in Unity with Meta XR SDK, OpenXR, and Wit.ai Voice Control",
      category: "XR / Spatial Computing",
      featured: true,
      tagline: "Unity VR POC featuring 4 interactive assembly modules and hands-free AI voice assistance.",
      problem: "Industrial assembly training is often constrained by physical equipment availability and instructor time.",
      whyBuilt: "Built a hands-free VR training prototype where trainees can interact with virtual assembly components using controllers and 10+ Wit.ai voice commands.",
      architecture: [
        "VR Core: Unity engine with Meta XR SDK & OpenXR standards for cross-headset portability.",
        "Voice Assistant: Wit.ai speech recognition engine parsing 10+ custom voice commands.",
        "Training Modules: Event-driven state machine managing 4 interactive training scenarios.",
        "REST API: Transmitted trainee metrics to backend endpoints."
      ],
      techStack: ["Unity", "C#", "Meta XR SDK", "OpenXR", "Wit.ai", "REST APIs", "JSON"],
      challenges: [
        {
          problem: "Voice API network latency felt disruptive in VR.",
          solution: "Implemented optimistic local state feedback so component highlights trigger immediately."
        },
        {
          problem: "Duplicate code across 4 training module scenes.",
          solution: "Refactored scenes into modular ScriptableObjects and event channels."
        }
      ],
      codeHighlight: {
        filename: "VRAssistantManager.cs",
        language: "csharp",
        code: `using UnityEngine;

public class VRAssistantManager : MonoBehaviour 
{
    [SerializeField] private TrainingModule currentModule;

    public void OnVoiceCommand(string intent, string partName) 
    {
        switch(intent) 
        {
            case "HighlightPart":
                currentModule.HighlightAssemblyPart(partName);
                break;
            case "ExplainStep":
                currentModule.PlayAudioGuide(partName);
                break;
            case "NextStep":
                currentModule.AdvanceStep();
                break;
        }
    }
}`,
        explanation: "Modular C# event listener bridging Wit.ai voice triggers to 3D VR component objects."
      },
      metrics: [
        "4 Interactive VR Automotive Training Modules",
        "10+ Low-latency Voice Commands Integrated",
        "100% Modular ScriptableObject Architecture"
      ],
      timeline: "6 Weeks",
      lessonsLearned: [
        "Frame rate optimization (targeting 90fps) is essential for user comfort in VR.",
        "Decoupling voice triggers from 3D objects makes adding new modules seamless."
      ],
      futureImprovements: [
        "Add hand-tracking gestures alongside voice commands.",
        "Implement real-time multiplayer co-training."
      ],
      githubUrl: "https://github.com/rajadyavath",
    },
    {
      id: "realtime-event-pipeline",
      title: "Real-Time System Communication & Data Processing",
      subtitle: "Event-driven ingestion pipeline with live telemetry & web alerting dashboard",
      category: "Distributed Systems",
      featured: true,
      tagline: "Event-driven pipeline ingesting continuous signal streams, detecting alerts, and updating a web dashboard.",
      problem: "Continuous signal streams from telemetry sensors require real-time ingestion and alerting without UI lag.",
      whyBuilt: "Engineered a real-time data ingestion system demonstrating live signal streaming and instant threshold alerts.",
      architecture: [
        "Ingestion: Async Python event loops reading continuous signal packets.",
        "Stream Processor: Evaluated signal stream values against alert thresholds.",
        "Alerting Service: Dispatched instant notifications on anomaly detection.",
        "Dashboard UI: Web interface visualizing live signal trends."
      ],
      techStack: ["Python", "Data Pipelines", "Event-Driven Systems", "FastAPI", "Web Integration", "JavaScript"],
      challenges: [
        {
          problem: "Dashboard UI lagging under high-frequency signal updates.",
          solution: "Used non-blocking WebSocket channels and buffered signal updates."
        }
      ],
      codeHighlight: {
        filename: "signal_processor.py",
        language: "python",
        code: `import asyncio
import time

class SignalStreamProcessor:
    def __init__(self, threshold: float = 85.0):
        self.threshold = threshold

    async def ingest(self, stream_source):
        async for packet in stream_source:
            is_anomaly = packet['value'] > self.threshold
            yield {
                'id': packet['id'],
                'value': packet['value'],
                'anomaly': is_anomaly,
                'timestamp': time.time()
            }`,
        explanation: "Async Python generator handling continuous signal streams with threshold alerting logic."
      },
      metrics: [
        "Sub-50ms data ingestion processing",
        "Zero packet loss during continuous signal stream testing",
        "Responsive live web alerting dashboard"
      ],
      timeline: "3 Weeks",
      lessonsLearned: [
        "Async event loops prevent I/O bottlenecks during high-frequency packet streams.",
        "Decoupling ingestion from visualization ensures system stability."
      ],
      futureImprovements: [
        "Scale ingestion stream processing using Kafka or Redis Streams.",
        "Add time-series ML models for predictive anomaly alerts."
      ],
      githubUrl: "https://github.com/rajadyavath",
    },
    {
      id: "breast-cancer-prediction",
      title: "Breast Cancer Prediction Using Machine Learning",
      subtitle: "Classification models achieving 95%+ accuracy on the Wisconsin dataset",
      category: "Machine Learning",
      featured: false,
      tagline: "ML classification pipeline trained on Wisconsin Breast Cancer dataset with an interactive benign/malignant predictor.",
      problem: "Medical diagnostic tools require thorough feature selection and evaluation to minimize false negative errors.",
      whyBuilt: "Developed a machine learning classification pipeline achieving 95%+ accuracy to compare algorithms and deploy a live predictor.",
      architecture: [
        "Preprocessing: Data cleaning, feature scaling, and feature selection.",
        "Model Training: Evaluated Logistic Regression, Random Forest, and SVM models.",
        "Validation: Evaluated models using Stratified K-Fold cross-validation & ROC-AUC curves.",
        "Predictor App: Web interface for entering measurement inputs for real-time predictions."
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Machine Learning", "HTML/CSS/JS"],
      challenges: [
        {
          problem: "Feature multicollinearity skewing classification decision boundaries.",
          solution: "Applied correlation matrix analysis and principal feature selection."
        }
      ],
      codeHighlight: {
        filename: "ml_pipeline.py",
        language: "python",
        code: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

df = pd.read_csv('cancer_data.csv')
X = df.drop(columns=['id', 'diagnosis'])
y = df['diagnosis'].map({'M': 1, 'B': 0})

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

clf = RandomForestClassifier(n_estimators=100, max_depth=5, random_state=42)
clf.fit(X_train_scaled, y_train)

print(classification_report(y_test, clf.predict(X_test_scaled)))`,
        explanation: "Clean Scikit-learn preprocessing and Random Forest training script."
      },
      metrics: [
        "95%+ Classification Accuracy on test split",
        "High ROC-AUC Score with low false negative rate",
        "Interactive web application for real-time benign/malignant predictions"
      ],
      timeline: "2 Weeks",
      lessonsLearned: [
        "In healthcare datasets, minimizing false negatives is far more critical than raw accuracy.",
        "Standardizing feature scales prevents high-magnitude metrics from dominating."
      ],
      futureImprovements: [
        "Export model to ONNX format for browser-side edge inference.",
        "Add SHAP value plots to explain model predictions."
      ],
      githubUrl: "https://github.com/rajadyavath",
    }
  ] as ProjectCaseStudy[],

  experiences: [
    {
      id: "cogfocus",
      role: "AI/ML Engineer Intern",
      company: "CogFocus",
      location: "Hyderabad, India",
      period: "Mar 2026 – Present",
      type: "Internship",
      description: [
        "Developed Python-based backend services and AI applications using FastAPI.",
        "Designed scalable REST APIs for real-time model inference and data processing.",
        "Optimized backend workflows to improve application performance and maintainability."
      ],
      technologies: ["Python", "FastAPI", "REST APIs", "AI/ML Backend", "AsyncIO", "JSON"],
      impactMetrics: [
        "Sub-second Inference APIs",
        "Async FastAPI Architecture",
        "Scalable REST Microservices"
      ]
    },
    {
      id: "prakash-hyundai",
      role: "Automotive Data Analytics Intern – Automotive Insights",
      company: "Prakash Automotives – Hyundai",
      location: "Nizamabad, India",
      period: "May 2024 – Jul 2024",
      type: "Internship",
      description: [
        "Analyzed vehicle service datasets using Python to identify maintenance patterns and anomalies.",
        "Delivered data-driven insights that reduced service delays by 20% and improved customer satisfaction by 15%.",
        "Translated analytical findings into actionable recommendations for operational optimization."
      ],
      technologies: ["Python", "Data Analytics", "Pandas", "NumPy", "Data Visualization"],
      impactMetrics: [
        "20% Service Delay Reduction",
        "15% Customer Satisfaction Increase",
        "Operational Bottleneck Optimization"
      ]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech – Automobile Engineering",
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology (VNR VJIET)",
      location: "Hyderabad, India",
      period: "Nov 2022 – May 2026",
      score: "CGPA: 7.26",
      details: [
        "Specialized coursework in Automotive Electronics, Computing Principles, Object-Oriented Programming, and Telemetry.",
        "Active leader in student chapters and collegiate events."
      ]
    },
    {
      degree: "Senior Secondary Education (Class XII)",
      institution: "Kakatiya Junior College",
      location: "Nizamabad, India",
      period: "2019 – 2021",
      score: "CGPA: 86.7%",
      details: ["Mathematics, Physics, Chemistry concentration."]
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "Matrusri High School",
      location: "Nizamabad, India",
      period: "2019",
      score: "CGPA: 9.8 / 10",
      details: ["Academic excellence honors."]
    }
  ] as EducationItem[],

  skills: {
    programming: ["Python", "Java", "Data Structures & Algorithms", "Object-Oriented Programming", "Problem Solving", "SQL"],
    aiGenAI: ["Generative AI & LLMs", "RAG Pipelines", "Prompt Engineering", "Embeddings", "Vector Databases (FAISS)", "LangChain", "LLaMA-2", "Gemma-2B", "PyTorch", "Hugging Face", "Ollama", "OpenAI API", "NLP"],
    backendFrameworks: ["FastAPI", "REST APIs", "AsyncIO Python", "JSON Schemas", "Authentication", "Python Backend Development"],
    xrGraphics: ["Unity", "C#", "Meta XR SDK", "OpenXR", "Wit.ai Voice SDK"],
    databasesTools: ["SQL", "MongoDB", "FAISS", "Firebase", "Git", "GitHub"],
    frontend: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"]
  },

  achievements: [
    {
      title: "Non-Technical Head",
      organization: "IUCEE Student Chapter @ VNR VJIET",
      year: "Leadership",
      badge: "Leadership",
      description: "Led student workshops, engineering leadership initiatives, and cross-departmental events."
    },
    {
      title: "Second Prize Winner",
      organization: "Bug Bounty Event (Cyber Vigilant X 2K25)",
      year: "2025",
      badge: "Cybersecurity",
      description: "Discovered application security vulnerabilities during a competitive cybersecurity hackathon."
    },
    {
      title: "Fundamentals of Object-Oriented Programming",
      organization: "NPTEL National Certification",
      year: "Certified",
      badge: "Core CS",
      description: "Certified in object-oriented design principles and software modeling."
    },
    {
      title: "Python Programming (Py3)",
      organization: "Infosys Campus Connect",
      year: "Certified",
      badge: "Programming",
      description: "Certified in Python software development, data structures, and algorithmic logic."
    }
  ] as AchievementItem[],

  leetcodeStats: {
    username: "rajadyavath",
    problemsSolved: "200+",
    ranking: "Active Problem Solver",
    categories: [
      { name: "Arrays & Strings", count: 65 },
      { name: "Trees & Graphs", count: 45 },
      { name: "Dynamic Programming", count: 35 },
      { name: "Linked Lists & Stacks", count: 40 },
    ]
  },

  githubStats: {
    username: "rajadyavath",
    totalCommits: "450+",
    contributionsThisYear: "320+",
    topLanguages: ["Python", "C#", "JavaScript", "Java", "HTML/CSS"],
    repositoriesCount: "18+"
  }
};
