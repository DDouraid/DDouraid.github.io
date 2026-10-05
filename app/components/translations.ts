export type Lang = 'fr' | 'en'

const fr = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
  },
  hero: {
    badge: 'Software Engineer',
    badgeHonors: 'Majeur de classe',
    roles: [
      'AI & Full Stack Engineer',
      'Expert en systèmes multi-agents',
      'Intégration de LLMs',
      'Développeur Full-Stack',
    ],
    description:
      "Diplômé avec mention en génie informatique (ESPRIT), spécialisé dans l'orchestration multi-agents, l'intégration de LLMs et le développement full-stack. Passionné par la construction de produits IA de bout en bout.",
    location: 'Bizerte, Tunisie',
    discover: 'Découvrir plus',
  },
  about: {
    heading: 'À propos de moi',
    intro:
      "Majeur de classe (mention très bien) – Ingénieur logiciel diplômé d'ESPRIT, spécialisé dans l'orchestration multi-agents, l'intégration de LLMs et le développement full-stack. Expérience confirmée dans la livraison de fonctionnalités IA de bout en bout (agents, streaming temps réel, contrôle qualité, tableaux de bord, exports). Orienté résultats, avec une solide expérience côté FastAPI, React, Python et méthodes Agile.",
    cards: [
      {
        title: 'Majeur de Classe',
        desc: 'Diplômé Ingénieur Informatique – ESPRIT',
      },
      {
        title: 'AI & Full Stack Engineer',
        desc: 'Agents IA, LLMs, APIs et produits web/mobile',
      },
      {
        title: 'Multi-agents & LLM',
        desc: 'LangGraph, LangChain, CrewAI et orchestration',
      },
    ],
  },
  experience: {
    heading: 'Expérience',
    items: [
      {
        title: "Projet de fin d'études (PFE)",
        company: 'Talan Tunisie',
        role: 'Ingénieur Développement AI / Full Stack',
        period: '02/2026 – 07/2026',
        description: [
          "Syntrex : plateforme d'orchestration multi-agents (LangGraph, LangChain, FastAPI, React) transformant des briefs marketing en stratégie de marque, copy, visuels et posts sociaux.",
          "Pipeline de bout en bout avec agents spécialisés (Recherche, Stratégie, Contenu, Qualité/Critique), streaming temps réel (SSE), mémoire de marque, génération multimédia et tableau de bord avec exports (PDF, CSV, JSON).",
          'Architecture : API REST FastAPI, orchestration LangGraph, PostgreSQL, authentification JWT, intégration LLM OpenAI, veille marché (scraping) et revue human-in-the-loop.',
        ],
      },
      {
        title: "Stage d'ingénieur",
        company: 'Sofrecom Tunisie',
        role: 'Ingénieur développement AI/Mobile',
        period: '07/2025 – 09/2025',
        description: [
          "AgenticO AI App : conception et développement d'une application mobile multi‑agents pour les développeurs (génération de code depuis UI, refactoring, documentation automatique, tests, sécurité).",
          'Architecture : serveur MCP, intégration LangChain, authentification Firebase, support multi-langages.',
          'Technologie : Flutter, MCP, LangChain, Claude 3.5, APIs OpenAI, Firebase, LiteLLM.',
        ],
      },
      {
        title: "Stage d'immersion en entreprise",
        company: 'Sofrecom Tunisie : Équipe Recherche & Innovation',
        role: 'Ingénieur développement Full Stack Web',
        period: '07/2024 – 09/2024',
        description: [
          "Conception et développement d'une plateforme éducative pour la génération de contenu dédiée aux collaborateurs Orange (LLM, IA générative, VR).",
          'Technologie : Angular, Spring Boot, Swagger, Unity et LLMs.',
        ],
      },
      {
        title: "Stage de fin d'études",
        company: 'ArabSoft',
        role: 'Développeur Full Stack Web/Mobile',
        period: '02/2023 – 05/2023',
        description: [
          "Projet de fin d'études : conception et développement d'une application de chat (one-to-one et one-to-many) pour améliorer la communication interne.",
          'Technologie : Angular, Spring Boot, Flutter.',
        ],
      },
      {
        title: "Stage d'été",
        company: 'CYNAPSYS',
        role: 'Développeur Full Stack Web',
        period: '06/2022 – 07/2022',
        description: [
          "Conception et développement d'une application web RH gérant les candidatures et le recrutement interne.",
          'Technologie : SQL, J2EE.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projets & Réalisations',
    fork: 'Fork',
    view: 'Voir',
    requestAccess: "Demander l'accès",
    viewCode: 'Voir le code',
    items: [
      {
        title: 'Syntrex',
        description:
          "Plateforme d'orchestration multi-agents transformant des briefs marketing en stratégie de marque, copy, visuels et posts sociaux.",
        category: 'AI / Multi-agents',
        technologies: ['LangGraph', 'LangChain', 'FastAPI', 'React', 'PostgreSQL', 'SSE'],
      },
      {
        title: 'Recommandeur de contenu éducatif',
        description:
          'Système de recommandation de contenu éducatif basé sur le filtrage collaboratif et le Machine Learning.',
        category: 'ML / Full Stack',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Angular', 'Flask', 'Docker', 'Microservices'],
      },
      {
        title: 'TheraBot',
        description: "Application mobile de soutien psychologique basée sur l'IA générative.",
        category: 'Mobile / IA',
        technologies: ['Dart', 'Flutter', 'IA Générative'],
      },
      {
        title: 'Omnitrix',
        description: 'Outil IA puissant.',
        category: 'IA / Machine Learning',
        technologies: ['AI', 'Machine Learning'],
      },
      {
        title: 'Aawen_Devops',
        description: 'Projet Maven simple pour un pipeline DevOps.',
        category: 'DevOps',
        technologies: ['Docker', 'Maven', 'DevOps', 'CI/CD'],
      },
      {
        title: 'PiDev-AlphaNova',
        description: 'Projet de développement avec une architecture moderne.',
        category: 'Web Development',
        technologies: ['Java', 'Spring Boot'],
      },
      {
        title: 'JobBoard',
        description:
          "Projet académique conçu pour former les étudiants à l'architecture microservices via une application de gestion des offres d'emploi.",
        category: 'Web / Microservices',
        technologies: ['HTML', 'Microservices', 'Spring Boot', 'Angular'],
      },
      {
        title: 'GenAi-Powered-WebApp_Orange-GenLearning',
        description:
          "Conception et développement d'une plateforme éducative pour la génération de contenu dédiée aux collaborateurs Orange (LLM, IA générative, VR).",
        category: 'IA Générative / Web',
        technologies: ['AI', 'Web App', 'Generative AI'],
      },
      {
        title: 'AgenticAi-Powered-Flutter-AgenticoApp',
        description:
          "AgenticO AI App : conception et développement d'une application mobile multi‑agents pour les développeurs (génération de code depuis UI, refactoring, documentation automatique, tests, sécurité).",
        category: 'Mobile / IA Agentique',
        technologies: ['Flutter', 'Dart', 'Agentic AI'],
      },
      {
        title: 'PocAIPro',
        description: "Proof of Concept pour une application IA professionnelle.",
        category: 'IA / POC',
        technologies: ['AI', 'POC'],
      },
      {
        title: 'Douraid_5SAE9_DevMobile',
        description: 'Projet de développement mobile académique.',
        category: 'Mobile Development',
        technologies: ['Mobile', 'Flutter'],
      },
      {
        title: 'DDouraid',
        description: 'Répertoire principal.',
        category: 'Portfolio',
        technologies: ['Portfolio'],
      },
    ],
  },
  skills: {
    heading: 'Compétences',
    categories: [
      {
        title: 'IA & LLMs',
        skills: ['LangGraph', 'LangChain', 'CrewAI', 'Orchestration multi-agents', 'LLMs (OpenAI)', 'IA générative', 'Prompt engineering', 'MCP', 'LiteLLM'],
      },
      {
        title: 'Backend & APIs',
        skills: ['FastAPI', 'Spring Boot', 'Flask', 'REST', 'SSE', 'JWT', 'Pydantic', 'SQLAlchemy', 'Alembic', 'Uvicorn'],
      },
      {
        title: 'Frontend & Mobile',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular', 'Flutter'],
      },
      {
        title: 'Langages',
        skills: ['Python', 'Java', 'JavaScript/TypeScript', 'Dart', 'SQL'],
      },
      {
        title: 'Bases de données',
        skills: ['PostgreSQL', 'MySQL', 'Oracle', 'SQLite'],
      },
      {
        title: 'DevOps & Outils',
        skills: ['Git', 'CI/CD', 'Docker', 'Jenkins', 'Postman', 'BeautifulSoup (scraping)'],
      },
      {
        title: 'Autres',
        skills: ['Symfony', 'Unity', 'Firebase'],
      },
      {
        title: 'Méthodologies',
        skills: ['Agile (Scrum, Kanban)', 'TDD', 'Human-in-the-loop (HITL)'],
      },
      {
        title: "Systèmes d'exploitation",
        skills: ['Windows', 'Linux'],
      },
    ],
    certificates: {
      heading: 'Certificats',
      items: [
        'AWS Academy Graduate – Cloud Foundations (2025)',
        'Hashgraph Developer Certificate (2025)',
        'CCNA (2024)',
        'Anglais : IEUK (B2), BEC (B2)',
        'Français : B2',
      ],
    },
    languages: {
      heading: 'Langues parlées',
      items: [
        { name: 'Arabe', level: 'Natif' },
        { name: 'Français', level: 'B2' },
        { name: 'Anglais', level: 'B2' },
        { name: 'Italien', level: 'Intermédiaire' },
      ],
    },
  },
  contact: {
    heading: 'Contact',
    intro: "Intéressé par une collaboration ? N'hésitez pas à me contacter !",
    send: 'Envoyer un message',
    items: [
      { label: 'Email', value: 'Douraid.dridi@esprit.tn' },
      { label: 'Téléphone', value: '+216 58 861 240' },
      { label: 'Localisation', value: 'Bizerte, Tunisie' },
      { label: 'LinkedIn', value: '/in/0douraid/' },
      { label: 'GitHub', value: 'github.com/DDouraid' },
    ],
  },
  footer: {
    madeWith: 'Fait avec ❤ par Douraid Dridi',
    rights: 'Tous droits réservés.',
  },
}

const en: typeof fr = {
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    badge: 'Software Engineer',
    badgeHonors: 'High Honors',
    roles: [
      'AI & Full Stack Engineer',
      'Multi-agent systems expert',
      'LLM integration',
      'Full-Stack Developer',
    ],
    description:
      'Computer engineering graduate with honors (ESPRIT), specializing in multi-agent orchestration, LLM integration, and full-stack development. Passionate about building end-to-end AI products.',
    location: 'Bizerte, Tunisia',
    discover: 'Discover more',
  },
  about: {
    heading: 'About me',
    intro:
      'Top of class (graduated with high honors) — Software engineer and ESPRIT graduate, specializing in multi-agent orchestration, LLM integration, and full-stack development. Proven experience delivering end-to-end AI features (agents, real-time streaming, quality control, dashboards, exports). Results-driven, with strong expertise in FastAPI, React, Python, and Agile methods.',
    cards: [
      {
        title: 'High Honors',
        desc: 'Computer Engineering Graduate – ESPRIT',
      },
      {
        title: 'AI & Full Stack Engineer',
        desc: 'AI agents, LLMs, APIs and web/mobile products',
      },
      {
        title: 'Multi-agent & LLM',
        desc: 'LangGraph, LangChain, CrewAI and orchestration',
      },
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        title: 'Final-Year Project (Capstone)',
        company: 'Talan Tunisia',
        role: 'AI / Full Stack Development Engineer',
        period: '02/2026 – 07/2026',
        description: [
          'Syntrex: multi-agent orchestration platform (LangGraph, LangChain, FastAPI, React) turning marketing briefs into brand strategy, copy, visuals, and social posts.',
          'End-to-end pipeline with specialized agents (Research, Strategy, Content, Quality/Critic), real-time streaming (SSE), brand memory, multimedia generation, and results dashboard with exports (PDF, CSV, JSON).',
          'Architecture: FastAPI REST API, LangGraph orchestration, PostgreSQL, JWT auth, OpenAI LLM integration, market monitoring (scraping), human-in-the-loop review.',
        ],
      },
      {
        title: 'Engineering Internship',
        company: 'Sofrecom Tunisia',
        role: 'AI / Mobile Development Engineer',
        period: '07/2025 – 09/2025',
        description: [
          'AgenticO AI App: design and development of a multi-agent mobile app for developers (UI-to-code generation, refactoring, auto documentation, tests, security).',
          'Architecture: MCP server, LangChain integration, Firebase auth, multi-language support.',
          'Tech: Flutter, MCP, LangChain, Claude 3.5, OpenAI APIs, Firebase, LiteLLM.',
        ],
      },
      {
        title: 'Corporate Immersion Internship',
        company: 'Sofrecom Tunisia: Research & Innovation Team',
        role: 'Full Stack Web Developer',
        period: '07/2024 – 09/2024',
        description: [
          'Design and development of an educational content-generation platform for Orange employees (LLM, generative AI, VR).',
          'Tech: Angular, Spring Boot, Swagger, Unity, and LLMs.',
        ],
      },
      {
        title: "Bachelor's Final Internship",
        company: 'ArabSoft',
        role: 'Full Stack Web/Mobile Developer',
        period: '02/2023 – 05/2023',
        description: [
          'Final-year project: design and development of a one-to-one and one-to-many chatroom app to improve internal communication.',
          'Tech: Angular, Spring Boot, Flutter.',
        ],
      },
      {
        title: 'Summer Internship',
        company: 'CYNAPSYS',
        role: 'Full Stack Web Developer',
        period: '06/2022 – 07/2022',
        description: [
          'Design and development of an HR web app for job applications and internal recruitment.',
          'Tech: SQL, J2EE.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projects & Work',
    fork: 'Fork',
    view: 'View',
    requestAccess: 'Request access',
    viewCode: 'View code',
    items: [
      {
        title: 'Syntrex',
        description:
          'Multi-agent orchestration platform turning marketing briefs into brand strategy, copy, visuals, and social posts.',
        category: 'AI / Multi-agents',
        technologies: ['LangGraph', 'LangChain', 'FastAPI', 'React', 'PostgreSQL', 'SSE'],
      },
      {
        title: 'Educational content recommender',
        description:
          'Educational content recommendation system based on collaborative filtering and Machine Learning.',
        category: 'ML / Full Stack',
        technologies: ['Python', 'Pandas', 'Scikit-learn', 'Angular', 'Flask', 'Docker', 'Microservices'],
      },
      {
        title: 'TheraBot',
        description: 'Generative-AI mental health support mobile app.',
        category: 'Mobile / AI',
        technologies: ['Dart', 'Flutter', 'Generative AI'],
      },
      {
        title: 'Omnitrix',
        description: 'Powerful AI tool.',
        category: 'AI / Machine Learning',
        technologies: ['AI', 'Machine Learning'],
      },
      {
        title: 'Aawen_Devops',
        description: 'Simple Maven project for a DevOps pipeline.',
        category: 'DevOps',
        technologies: ['Docker', 'Maven', 'DevOps', 'CI/CD'],
      },
      {
        title: 'PiDev-AlphaNova',
        description: 'Development project with modern architecture.',
        category: 'Web Development',
        technologies: ['Java', 'Spring Boot'],
      },
      {
        title: 'JobBoard',
        description:
          'Academic project designed to teach microservices architecture through a job-offers management app.',
        category: 'Web / Microservices',
        technologies: ['HTML', 'Microservices', 'Spring Boot', 'Angular'],
      },
      {
        title: 'GenAi-Powered-WebApp_Orange-GenLearning',
        description:
          'Design and development of an educational content-generation platform for Orange employees (LLM, generative AI, VR).',
        category: 'Generative AI / Web',
        technologies: ['AI', 'Web App', 'Generative AI'],
      },
      {
        title: 'AgenticAi-Powered-Flutter-AgenticoApp',
        description:
          'AgenticO AI App: design and development of a multi-agent mobile app for developers (UI-to-code generation, refactoring, auto docs, tests, security).',
        category: 'Mobile / Agentic AI',
        technologies: ['Flutter', 'Dart', 'Agentic AI'],
      },
      {
        title: 'PocAIPro',
        description: 'Proof of Concept for a professional AI application.',
        category: 'AI / POC',
        technologies: ['AI', 'POC'],
      },
      {
        title: 'Douraid_5SAE9_DevMobile',
        description: 'Academic mobile development project.',
        category: 'Mobile Development',
        technologies: ['Mobile', 'Flutter'],
      },
      {
        title: 'DDouraid',
        description: 'Main repository.',
        category: 'Portfolio',
        technologies: ['Portfolio'],
      },
    ],
  },
  skills: {
    heading: 'Skills',
    categories: [
      {
        title: 'AI & LLMs',
        skills: ['LangGraph', 'LangChain', 'CrewAI', 'Multi-agent orchestration', 'LLMs (OpenAI)', 'Generative AI', 'Prompt engineering', 'MCP', 'LiteLLM'],
      },
      {
        title: 'Backend & APIs',
        skills: ['FastAPI', 'Spring Boot', 'Flask', 'REST', 'SSE', 'JWT', 'Pydantic', 'SQLAlchemy', 'Alembic', 'Uvicorn'],
      },
      {
        title: 'Frontend & Mobile',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Angular', 'Flutter'],
      },
      {
        title: 'Languages',
        skills: ['Python', 'Java', 'JavaScript/TypeScript', 'Dart', 'SQL'],
      },
      {
        title: 'Databases',
        skills: ['PostgreSQL', 'MySQL', 'Oracle', 'SQLite'],
      },
      {
        title: 'DevOps & Tools',
        skills: ['Git', 'CI/CD', 'Docker', 'Jenkins', 'Postman', 'BeautifulSoup (scraping)'],
      },
      {
        title: 'Other',
        skills: ['Symfony', 'Unity', 'Firebase'],
      },
      {
        title: 'Methodologies',
        skills: ['Agile (Scrum, Kanban)', 'TDD', 'Human-in-the-loop (HITL)'],
      },
      {
        title: 'Operating Systems',
        skills: ['Windows', 'Linux'],
      },
    ],
    certificates: {
      heading: 'Certificates',
      items: [
        'AWS Academy Graduate – Cloud Foundations (2025)',
        'Hashgraph Developer Certificate (2025)',
        'CCNA (2024)',
        'English: IEUK (B2), BEC (B2)',
        'French: B2',
      ],
    },
    languages: {
      heading: 'Spoken languages',
      items: [
        { name: 'Arabic', level: 'Native' },
        { name: 'French', level: 'B2' },
        { name: 'English', level: 'B2' },
        { name: 'Italian', level: 'Intermediate' },
      ],
    },
  },
  contact: {
    heading: 'Contact',
    intro: 'Interested in working together? Feel free to reach out!',
    send: 'Send a message',
    items: [
      { label: 'Email', value: 'Douraid.dridi@esprit.tn' },
      { label: 'Phone', value: '+216 58 861 240' },
      { label: 'Location', value: 'Bizerte, Tunisia' },
      { label: 'LinkedIn', value: '/in/0douraid/' },
      { label: 'GitHub', value: 'github.com/DDouraid' },
    ],
  },
  footer: {
    madeWith: 'Made with ❤ by Douraid Dridi',
    rights: 'All rights reserved.',
  },
}

export const translations = { fr, en }
