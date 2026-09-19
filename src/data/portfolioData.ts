import type { ProjectItem, SkillCategory, HackathonBuild, TimelineMilestone, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Supratik Sinha",
  headline: "Hi, I'm Supratik.",
  secondaryHeading: "Building intelligent digital experiences.",
  shortIntro: "I'm an IT student and developer focused on AI-powered applications, full-stack systems, intelligent automation, and experimental technology.",
  role: "B.Tech IT Student | AI/ML & Full-Stack Developer | Hackathon Builder",
  college: "JIS College of Engineering, Kalyani",
  currentStatus: "2nd Year, 3rd Semester",
  email: "sinhatumpa84@gmail.com",
  socials: {
    github: "https://github.com/sinhatumpa84-rgb",
    linkedin: "https://www.linkedin.com/in/supratik-sinha-923ba637b",
    instagram: "https://www.instagram.com/supratiksinha052",
    email: "mailto:sinhatumpa84@gmail.com",
  },
  footerTagline: "Building, breaking, learning, repeating.",
  year: 2026,
};

export const FOCUS_AREAS = [
  { title: "Artificial Intelligence", description: "Deep learning models, predictive intelligence, and neural architectures.", tag: "AI" },
  { title: "Machine Learning", description: "Signal processing, classification pipelines, and real-time inference.", tag: "ML" },
  { title: "Full-Stack Development", description: "Modern responsive web apps with end-to-end type safety and APIs.", tag: "Web" },
  { title: "AI-Powered Applications", description: "Integrating intelligent agents and ML workflows into user interfaces.", tag: "App" },
  { title: "LLM Automation", description: "Autonomous workflows, prompt orchestration, and intelligent extraction.", tag: "LLM" },
  { title: "Data-Driven Systems", description: "Scalable databases, state persistence, and analytical queries.", tag: "Data" },
  { title: "Recruitment/HR Tech", description: "Smart applicant ranking, candidate evaluation, and automated matching.", tag: "HR" },
  { title: "Intelligent Dashboards", description: "Real-time metrics, interactive visualizations, and decision analytics.", tag: "Dash" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming",
    description: "Core languages for systems, scripting, and logic",
    accent: "kraft",
    skills: [
      { name: "C", level: "Core Systems", note: "Pointers & low-level memory", iconName: "Terminal" },
      { name: "Python", level: "AI/ML & Scripts", note: "Scientific & Automation", iconName: "Code" },
      { name: "JavaScript", level: "Modern ES6+", note: "Asynchronous runtime", iconName: "FileCode" },
      { name: "TypeScript", level: "Typed Web", note: "Strict compile-time types", iconName: "Layers" },
    ],
  },
  {
    category: "Frontend",
    description: "Component architecture and expressive UI",
    accent: "blue",
    skills: [
      { name: "React", level: "UI Library", note: "Hooks, state & components", iconName: "Atom" },
      { name: "HTML", level: "Semantic Markup", note: "Accessible structure", iconName: "Layout" },
      { name: "CSS", level: "Styling & Motion", note: "Custom animations & layouts", iconName: "Palette" },
      { name: "Tailwind CSS", level: "Utility-First", note: "Design systems & tokens", iconName: "Wind" },
    ],
  },
  {
    category: "Backend",
    description: "Server runtimes, APIs, and microservices",
    accent: "emerald",
    skills: [
      { name: "Node.js", level: "Runtime", note: "Event-driven architecture", iconName: "Server" },
      { name: "Express", level: "API Framework", note: "RESTful endpoints & middlewares", iconName: "Cpu" },
    ],
  },
  {
    category: "AI/ML",
    description: "Intelligence, embeddings, and machine learning",
    accent: "amber",
    skills: [
      { name: "Machine Learning", level: "Supervised / Unsupervised", note: "Model training & evaluation", iconName: "Brain" },
      { name: "LLMs", level: "Language Models", note: "Prompting, RAG & agentic flows", iconName: "Sparkles" },
      { name: "AI APIs", level: "Integration", note: "Cloud AI inference & vision", iconName: "Workflow" },
    ],
  },
  {
    category: "Database",
    description: "Relational persistence and real-time backends",
    accent: "purple",
    skills: [
      { name: "SQL", level: "Relational Queries", note: "Schemas, joins, and indexing", iconName: "Database" },
      { name: "Supabase", level: "Postgres & Auth", note: "Row Level Security & real-time", iconName: "Zap" },
    ],
  },
  {
    category: "Tools & DevOps",
    description: "Developer tooling, containers, and collaboration",
    accent: "coral",
    skills: [
      { name: "Git", level: "Version Control", note: "Branching, rebasing & PRs", iconName: "GitBranch" },
      { name: "GitHub", level: "Collaboration", note: "Actions & open-source", iconName: "GitPullRequest" },
      { name: "VS Code", level: "Primary IDE", note: "Configured developer environment", iconName: "Monitor" },
      { name: "Docker", level: "Containerization", note: "Consistent build environments", iconName: "Box" },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "bonetalk",
    title: "BONEtalk",
    subtitle: "Assistive Speech Vibration Technology",
    tagline: "Empowering non-verbal vocalization through neck muscle signals",
    description: "Assistive communication technology designed to help people with speech disabilities communicate using muscle and vibration signals captured around the neck.",
    category: "Assistive Tech",
    technologies: ["AI/ML", "Signal Processing", "Python", "Hardware Sensors", "React UI"],
    problemSolved: "Traditional speech prosthetics are either prohibitively expensive or require intrusive surgical implants. Non-verbal individuals or vocal cord injury patients need non-invasive, affordable assistive speech synthesis.",
    keyFeatures: [
      "Surface neck transducer reading subtle laryngeal/muscular vibrations",
      "Signal noise filtering pipeline to isolate intentional vocal attempts",
      "Machine learning phoneme classification engine",
      "Real-time text-to-speech audio rendering via companion app interface",
      "Low-latency response designed for conversational fluency"
    ],
    architecture: "Sensor Neckband → Analog Conditioning Unit → Signal Filter (Bandpass) → ML Classification Model → Speech Synthesis Engine → Bluetooth / Web Interface",
    results: "Prototype successfully detects repeatable micro-vibrations with distinct phonetic signature mapping in controlled tests.",
    githubUrl: "https://github.com/sinhatumpa84-rgb/Bonetalk",
    liveDemoUrl: "https://github.com/sinhatumpa84-rgb/Bonetalk",
    sketchIcon: "Volume2",
    colorTheme: "amber",
    handwrittenNote: "Neck muscle vibration mapping ✦ non-invasive!",
  },
  {
    id: "moojyatra",
    title: "Moojyatra",
    subtitle: "Smart Travel & Experience Platform",
    tagline: "AI-curated destination discovery and dynamic local travel itineraries",
    description: "A smart travel platform focused on destination discovery, local experiences, intelligent travel planning, and personalized recommendations.",
    category: "Full-Stack",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "Supabase"],
    problemSolved: "Travelers waste hours sifting through fragmented blogs and tourist traps. Moojyatra unifies itinerary scheduling, hidden local experiences, and dynamic multi-day routing into an intuitive planner.",
    keyFeatures: [
      "Intelligent multi-day itinerary generator based on travel personality & budget",
      "Curated local hidden gems and community-submitted cultural spots",
      "Interactive map visualizer with dynamic waypoint reordering",
      "Live trip budgeting calculator with expense estimation",
      "Responsive, touch-optimized itinerary cards with offline export"
    ],
    architecture: "React + Tailwind Client → REST API (Express) → Routing & Recommendation Engine → Supabase (Auth, User Trips & Geolocation Data)",
    results: "Streamlined end-to-end trip creation down to under 2 minutes with interactive timeline scheduling.",
    githubUrl: "https://github.com/sinhatumpa84-rgb",
    liveDemoUrl: "https://github.com/sinhatumpa84-rgb",
    sketchIcon: "Compass",
    colorTheme: "blue",
    handwrittenNote: "Local spots > tourist traps. Built for backpackers!",
  },
  {
    id: "healthvision",
    title: "HealthVision",
    subtitle: "AI-Powered Healthcare Intelligence",
    tagline: "Clinical assistance & intelligent diagnostic support for digital health",
    description: "An AI-powered healthcare-related project focused on intelligent diagnostic support, symptom triaging, and health metrics monitoring.",
    category: "AI/ML",
    technologies: ["Python", "Machine Learning", "FastAPI", "React", "Medical Vision"],
    problemSolved: "Patients and rural health workers lack quick, automated first-pass screening and triaging tools to understand symptoms and prioritize urgent medical intervention.",
    keyFeatures: [
      "AI-assisted clinical triaging pipeline for primary health indicators",
      "Interactive health dashboard for patient telemetry & medical history",
      "Secure data handling adhering to patient privacy standards",
      "Explainable AI outputs highlighting potential risk indicators for clinicians",
      "Clean, high-contrast accessible interface designed for clinical workflows"
    ],
    architecture: "React Healthcare Portal → Encrypted API Gateway → ML Inference Model (Vision/Tabular) → Diagnostic Report Generator",
    results: "Validated on benchmark health indicator datasets, providing intuitive risk scoring and triage guidance.",
    githubUrl: "https://github.com/sinhatumpa84-rgb",
    liveDemoUrl: "https://github.com/sinhatumpa84-rgb",
    sketchIcon: "HeartPulse",
    colorTheme: "rose",
    handwrittenNote: "Accessible AI triage for primary healthcare.",
  },
  {
    id: "sih-headset",
    title: "SIH Defence Hearing Headset",
    subtitle: "Smart India Hackathon Defence System",
    tagline: "AI/ML-enabled adaptive noise cancellation for extreme defence environments",
    description: "AI/ML-enabled adaptive noise cancellation system designed for extreme defence environments while maintaining critical speech intelligibility.",
    category: "Embedded / Systems",
    technologies: ["Machine Learning", "Adaptive DSP", "Python", "Audio Processing", "C / Embedded"],
    problemSolved: "In high-noise combat scenarios (artillery, aviation, engine bays), standard hearing protection dampens sound indiscriminately, muffling essential radio commands and situational awareness. SIH Defence Headset cancels extreme noise spikes while isolating and amplifying human speech.",
    keyFeatures: [
      "Adaptive spectral subtraction and neural noise suppression",
      "Extreme decibel impulse dampening (gunfire, blast acoustic wave isolation)",
      "Vocal formant preservation algorithm to keep team radio chatter clear",
      "Low latency real-time DSP pipeline (<15ms)",
      "Ruggedized operational logic designed for extreme noise environments"
    ],
    architecture: "Dual Microphone Array (Ambient + Throat/Boom) → ADC & Pre-amp → Real-Time Neural Filter Engine → DAC → Tactical Earcups",
    results: "Significantly enhances speech-to-noise ratio (SNR) in simulated 110dB+ industrial and defence noise profiles.",
    githubUrl: "https://github.com/sinhatumpa84-rgb",
    liveDemoUrl: "https://github.com/sinhatumpa84-rgb",
    sketchIcon: "ShieldAlert",
    colorTheme: "emerald",
    handwrittenNote: "High-decibel defence dampening + crisp speech intelligibility!",
  }
];

export const HACKATHON_BUILDS: HackathonBuild[] = [
  {
    id: "gfg-hackfest",
    event: "GFG Hackfest",
    projectBuilt: "High-Impact AI / Tech Solution",
    role: "Team Lead & Core Developer",
    badge: "Special Mention",
    timeframe: "36-Hour Sprint",
    problem: "Developing an innovative, scalable tech solution addressing real-world pain points under strict time constraints.",
    solution: "Architected a full-stack prototype integrating intelligent backend workflows, clean UI, and rapid data pipelines.",
    takeaway: "Rapid prototyping, agile team delegation, and delivering a functional MVP under competitive pressure.",
    skillsDemonstrated: ["Team Leadership", "Rapid Prototyping", "Full-Stack Architecture", "Competitive Pitching"],
  },
  {
    id: "sih-internal",
    event: "Smart India Hackathon (SIH)",
    projectBuilt: "SIH Defence Hearing Headset",
    role: "AI/ML & Systems Lead",
    badge: "Defence Innovation",
    timeframe: "National Hackathon Initiative",
    problem: "Extreme noise defence environments causing acoustic trauma and mission miscommunication.",
    solution: "Built adaptive machine-learning noise suppression pipeline isolating human voice frequencies.",
    takeaway: "Tackling national-scale hard engineering problems requiring intersection of hardware, DSP, and AI.",
    skillsDemonstrated: ["Adaptive Noise Filtering", "Problem Solving", "Defence Tech", "Interdisciplinary Systems"],
  },
  {
    id: "crazybuild-events",
    event: "CrazyBuild / College Coding Events",
    projectBuilt: "Experimental Full-Stack Builds",
    role: "Builder & Hacker",
    badge: "Hackathon Builder",
    timeframe: "24-Hour Hackathons",
    problem: "Fast-paced algorithmic and product challenges requiring building usable tools from scratch overnight.",
    solution: "Iterative feature development, clean code practices, and working software delivered before final buzzer.",
    takeaway: "Comfortable in the code trenches when time is short and standards are high.",
    skillsDemonstrated: ["High-Velocity Coding", "Collaboration", "Debugging under Fire", "Product Thinking"],
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "Current",
    title: "B.Tech in Information Technology",
    event: "JIS College of Engineering, Kalyani",
    category: "milestone",
    description: "Currently in 2nd Year, 3rd Semester. Deep diving into AI/ML, distributed systems, full-stack development, and data structures.",
    badgeText: "Academic & Tech Focus",
    handwrittenComment: "2nd Year, 3rd Sem — actively building & hacking!",
  },
  {
    year: "Hackathons",
    title: "GFG Hackfest",
    event: "GeeksforGeeks Hackathon",
    category: "hackathon",
    description: "Awarded Special Mention for outstanding project architecture and rapid prototyping in a competitive multi-team hackathon.",
    badgeText: "Special Mention",
    handwrittenComment: "36 hrs of coffee, code, and a proud Special Mention!",
  },
  {
    year: "Quiz & Tech",
    title: "JIS Tech Quiz Competition",
    event: "JIS College of Engineering",
    category: "competition",
    description: "Secured 2nd Place testing comprehensive computer science fundamentals, emerging technology trends, and systems knowledge.",
    badgeText: "2nd Place",
    handwrittenComment: "2nd Place 🥈 CS fundamentals & tech trivia",
  },
  {
    year: "Community",
    title: "Team Leadership & Hackathon Experience",
    event: "College Coding & Tech Events",
    category: "leadership",
    description: "Led development squads in CrazyBuild and campus hackathons. Orchestrated git workflows, code reviews, and product pitches.",
    badgeText: "Team Lead",
    handwrittenComment: "Empowering teammates & shipping projects together.",
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "JIS College of Engineering, Kalyani",
    location: "Kalyani, West Bengal",
    degree: "B.Tech in Information Technology",
    statusOrYear: "2nd Year, 3rd Semester (Ongoing)",
    details: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, Computer Networks, Operating Systems, Database Management.",
      "Practical Focus: Machine Learning algorithms, Full-Stack web architecture, and collaborative engineering.",
      "Active participant in technical symposiums, hackathons, and developer clubs."
    ],
    handwrittenAnnotation: "Active IT undergrad ✦ Engineering modern intelligent systems",
  },
  {
    institution: "Ramakrishna Vivekananda Mission",
    location: "Barrackpore, West Bengal",
    degree: "Higher Secondary / Secondary Education",
    statusOrYear: "Schooling Foundation",
    details: [
      "Rigorous science and mathematics curriculum establishing strong analytical thinking.",
      "Active participation in school science exhibitions, academic quizzes, and computing basics."
    ],
    handwrittenAnnotation: "Where the curiosity for science, math & computing began.",
  }
];
