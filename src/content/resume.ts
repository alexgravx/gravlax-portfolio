/**
 * Single source of truth for the site.
 *
 * Two levels of detail, on purpose:
 *   - `summary`  — short. Used by the portfolio, which should NOT re-read as a resume.
 *   - `bullets`  — long.  Used only by /resume, which is the resume.
 *
 * Transcribed from public/resume_updated.pdf, plus older projects worth showing.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Education {
  school: string;
  degree: string;
  note?: string;
  location: string;
  date: string;
  /** Portfolio-level: one line. */
  summary: string;
  /** Resume-level. */
  coursework?: string[];
}

export interface Bullet {
  text: string;
  children?: string[];
}

export interface Role {
  org: string;
  title: string;
  location: string;
  start: string;
  end: string;
  href?: string;
  /** Portfolio-level: one or two lines. */
  summary: string;
  /** Resume-level. */
  bullets: Bullet[];
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  year: string;
  /** One line, shown on the overview card. */
  summary: string;
  /** A short paragraph, shown in the "about" card once selected. */
  about: string;
  repo?: string;
  links?: Link[];
  /** Private client work with nothing public to link to. */
  private?: boolean;
  stack: string[];
  /** Surfaced on /resume (the two the resume actually lists). */
  onResume?: boolean;
}

export const profile = {
  name: 'Alexandre Gravereaux',
  handle: 'gravlax',
  title: 'Software Engineer',
  location: 'New York, NY',
  // The updated resume deliberately omits an email address.
  links: [
    { label: 'github', href: 'https://github.com/alexgravx' },
    { label: 'linkedin', href: 'https://linkedin.com/in/alexandre-gravereaux' },
    { label: 'website', href: 'https://alexgravx.com' },
  ] satisfies Link[],
  bio:
    "I'm a Computer Science master's student at Cornell Tech, with an engineering background from " +
    'CentraleSupélec. I like optimizing processes and building powerful software tools — DevOps, ' +
    'full-stack and ML. I helped run the network infrastructure for my school’s student residences, ' +
    'built MVPs through the Paris Digital Lab incubator, and interned as a Software Engineer at ' +
    'Forvis Mazars.',
};

export const education: Education[] = [
  {
    school: 'Cornell Tech, Cornell University',
    degree: 'MEng in Computer Science',
    note: 'merit scholarship recipient',
    location: 'New York, NY',
    date: '2025 — 2026',
    summary:
      'Applied ML, ML engineering, trustworthy AI and algorithms. Working on content moderation: ' +
      'protecting minors online while keeping teens fairly heard.',
    coursework: [
      'Applied Machine Learning',
      'Machine Learning Engineering',
      'Trustworthy AI',
      'Algorithms for Applications',
    ],
  },
  {
    school: 'CentraleSupélec, Paris-Saclay University',
    degree: 'MSc in Engineering and Applied Mathematics',
    note: 'GPA 3.86/4',
    location: 'Paris, France',
    date: '2022 — 2025',
    summary:
      'Computer science (networks, security, distributed & cloud computing, databases) and applied ' +
      'mathematics (statistics, optimization, probability).',
    coursework: [
      'Statistics and Learning',
      'Optimization',
      'Object-oriented programming',
      'Network & Security',
      'Quantum Computing',
      'Cloud & Distributed Computing',
      'Web Data Intelligence',
    ],
  },
];

export interface Skill {
  name: string;
  /** simple-icons slug. Omitted where no brand mark exists (bash concepts, IaC…). */
  icon?: string;
}

export const skills: Record<string, Skill[]> = {
  languages: [
    { name: 'Python', icon: 'python' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Java', icon: 'openjdk' },
    { name: 'Go', icon: 'go' },
    { name: 'Swift', icon: 'swift' },
  ],
  devops: [
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'Nginx', icon: 'nginx' },
    { name: 'GitLab CI/CD', icon: 'gitlab' },
    { name: 'Terraform', icon: 'terraform' },
    { name: 'Ansible', icon: 'ansible' },
    { name: 'bash', icon: 'gnubash' },
  ],
  'data-ml': [
    { name: 'Pandas', icon: 'pandas' },
    { name: 'scikit-learn', icon: 'scikitlearn' },
    { name: 'PyTorch', icon: 'pytorch' },
    { name: 'LangChain', icon: 'langchain' },
    { name: 'Celery', icon: 'celery' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Spark', icon: 'apachespark' },
  ],
  fullstack: [
    { name: 'Node.js', icon: 'nodedotjs' },
    { name: 'Express', icon: 'express' },
    { name: 'React', icon: 'react' },
    { name: 'Vue', icon: 'vuedotjs' },
    { name: 'Next.js', icon: 'nextdotjs' },
    { name: 'FastAPI', icon: 'fastapi' },
  ],
};

/** Flat list for the resume, which just wants comma-separated names. */
export const skillNames: Record<string, string[]> = Object.fromEntries(
  Object.entries(skills).map(([group, items]) => [group, items.map((s) => s.name)]),
);

export const experience: Role[] = [
  {
    org: 'Forvis Mazars',
    title: 'Software Engineer Intern',
    location: 'Paris, France',
    start: 'Sept 2024',
    end: 'Feb 2025',
    summary:
      'Software and data engineering on financial apps. Built a SAS-to-Python transpiler on top of ' +
      'ANTLR that translates 3× faster than an LLM, and with precision an LLM cannot reach.',
    bullets: [
      {
        text:
          'Developed new features on a full-stack cash-pooling app processing the financial data of ' +
          '50+ subsidiaries, using Python, SQLAlchemy and Alembic.',
        children: [
          'Added a new document format (Kyriba) layered above the existing Diapason format.',
          'Implemented a messaging system between the holding and its subsidiaries, including email notifications.',
        ],
      },
      {
        text:
          'Improved a full-stack accounting app for a $100b+ revenue firm, helping accountants find ' +
          'inconsistencies 60% faster. Optimized its integration into an SAP workflow via dedicated ' +
          'on-premise infrastructure.',
        children: [
          'Built the year-end reporting phase that finalizes financial data so accountants can close the books, using Python, Celery, Linux crontab and MongoDB.',
          'Deployed with zero downtime and scaled server resources so reporting could run concurrently with the new year’s first quarter.',
        ],
      },
      {
        text:
          'Designed and implemented a transpiler from SAS to R and Python, with both a CLI and a RESTful ' +
          'API. Increased translation speed 3× while holding a level of precision unreachable by LLMs, ' +
          'using ANTLR as lexer and parser to build an AST.',
      },
    ],
    stack: ['Python', 'SQLAlchemy', 'Celery', 'MongoDB', 'ANTLR'],
  },
  {
    org: 'Paris Digital Lab',
    title: 'Software Engineer',
    location: 'Paris, France',
    start: 'Feb 2024',
    end: 'Jul 2024',
    href: 'https://paris-digital-lab.com/',
    summary:
      'Prototyped tech for major corporations and start-ups: three MVPs in three 7-week cycles — ' +
      'Sencial, ElicCIR and Wiloki (see projects).',
    bullets: [
      {
        text:
          'Built 3 minimum viable products under 7-week constraints for real-world businesses at the ' +
          'Paris Digital Lab incubator, through a selective gap-year program with CentraleSupélec.',
      },
      {
        text:
          'Sencial — an iOS companion app helping hearing-impaired people hold conversations in noisy ' +
          'environments through AirPods, using real-time audio modulation. Improved voice perception ' +
          'for 89% of users. Built with Swift.',
      },
      {
        text:
          'ElicCIR — a tax credit filing tool on private infrastructure for Thales, using data parsing ' +
          'and LLMs with RAG, saving the company 300k€ and 3000 hours each year. Built with Python and ' +
          'HuggingFace TGI.',
      },
      {
        text:
          'Wiloki — optimized an EdTech game-based learning algorithm through A/B testing, simulating ' +
          'hundreds of student profiles with randomized knowledge and skill levels via RabbitMQ queueing ' +
          'inside a Kubernetes cluster. Built with Go, JavaScript and Python.',
      },
    ],
    stack: ['Swift', 'Python', 'Go', 'Kubernetes', 'RabbitMQ', 'LLMs'],
  },
  {
    org: 'ViaRézo',
    title: 'DevOps Engineer',
    location: 'Paris, France',
    start: 'Sept 2022',
    end: 'Jan 2024',
    href: 'https://viarezo.fr/en/',
    summary:
      'Internet for 2000+ residents on the Paris-Saclay campus, plus the websites and apps behind ' +
      'student life — on an OpenStack cluster and a Kubernetes cloud, backed up and monitored.',
    bullets: [
      {
        text:
          'Maintained the network infrastructure providing internet access to 2000+ campus residents ' +
          'over fiber and Wi-Fi.',
      },
      {
        text:
          'Managed a database of 10,000+ members and operated the websites and applications behind ' +
          'CentraleSupélec student life, running on an OpenStack virtualization cluster and a Kubernetes ' +
          'cloud infrastructure, monitored with Datadog.',
      },
      {
        text:
          'Helped organize TRACS, a nationwide cybersecurity and intelligence hackathon run with the ' +
          'French government — budgeting, equipment setup and staff scheduling.',
      },
    ],
    stack: ['OpenStack', 'Kubernetes', 'Datadog', 'Nginx', 'Ansible'],
  },
];

export const projects: Project[] = [
  {
    id: 'yzilog',
    name: 'B2B storage rental marketplace',
    year: '2025',
    summary: 'An Airbnb for warehouses — reservation, calendar and billing.',
    about:
      'A storage-space rental platform for professionals, similar to Airbnb, including reservation, ' +
      'calendar and billing. Deployed on AWS, with JWT authorization.',
    links: [{ label: 'yzilog.com', href: 'https://yzilog.com/' }],
    stack: ['TypeScript', 'Express', 'React', 'Mantine', 'AWS'],
    onResume: true,
  },
  {
    id: 'trading',
    name: 'Simulation trading platform',
    year: '2025',
    summary: 'A professional-style trading simulator with a real matching engine.',
    about:
      'A simulated trading platform with order placement, an order book, order matching and live ' +
      'market data charts. Built with FastAPI and the TradingView API, with AI agents trading against you.',
    links: [{ label: 'trading.alexgravx.com', href: 'https://trading.alexgravx.com/' }],
    stack: ['Python', 'FastAPI', 'TradingView API', 'AI agents'],
    onResume: true,
  },
  {
    id: 'sencial',
    name: 'Sencial — iOS audio companion',
    year: '2024',
    summary: 'Real-time audio modulation through AirPods for the hearing-impaired.',
    about:
      'An iOS companion app for hearing-impaired people. It pulls audiograms from Apple Health (or ' +
      'builds one with an experimental method), then modulates 10+ frequency bands of the surrounding ' +
      'environment in real time while you listen to music or talk to a colleague. Improved voice ' +
      'perception for 89% of users. Built at Paris Digital Lab.',
    repo: 'alexgravx/Swift-audio-utils',
    stack: ['Swift', 'AVAudioEngine'],
  },
  {
    id: 'eliccir',
    name: 'ElicCIR — tax credit companion',
    year: '2024',
    summary: 'RAG over private infrastructure for Thales. Saved 300k€ and 3000 hours a year.',
    about:
      'A tax credit filing tool running on private infrastructure for Thales, using data parsing and ' +
      'LLMs with RAG. Self-hosted inference with HuggingFace TGI, so no data ever leaves the building. ' +
      'Built at Paris Digital Lab.',
    private: true,
    stack: ['Python', 'LangChain', 'TGI', 'RAG'],
  },
  {
    id: 'wiloki',
    name: 'Wiloki — A/B testing platform',
    year: '2024',
    summary: 'Simulated hundreds of students to pick the best learning algorithm.',
    about:
      'An A/B testing platform for an EdTech game-based learning company. It massively simulates ' +
      'virtual student profiles with randomized knowledge and skill levels, queued through RabbitMQ ' +
      'inside a Kubernetes cluster, and reports detailed metrics so the best coaching algorithm wins. ' +
      'Built at Paris Digital Lab.',
    private: true,
    stack: ['Go', 'Docker', 'Kubernetes', 'Helm', 'RabbitMQ'],
  },
  {
    id: 'leaderboard',
    name: 'Drone race leaderboard',
    year: '2024',
    summary: 'Live timing and rankings for drone races.',
    about:
      'A desktop leaderboard for drone races: add participants, time them with numerical chronometers, ' +
      'and display a live ranking as the race unfolds.',
    private: true,
    stack: ['JavaScript', 'Electron'],
  },
  {
    id: 'soil',
    name: 'Satellite-based soil analysis',
    year: '2023',
    summary: 'Classifying terrain from satellite imagery — city, forest, field, water.',
    about:
      'An ML pipeline classifying soils by category (city, forest, field, water, …) from satellite ' +
      'imagery, comparing SVM, K-Means and deep neural networks.',
    repo: 'alexgravx/EI-Soil-Classification',
    stack: ['Python', 'scikit-learn', 'SVM', 'K-Means'],
  },
  {
    id: 'movies',
    name: 'Movie streaming platform',
    year: '2023',
    summary: 'A Netflix-like recommender, built in one week.',
    about:
      'A user-friendly streaming interface in the spirit of Netflix, making personalized ' +
      'recommendations. Built end-to-end in a single week.',
    repo: 'alexgravx/EI-Web-Design',
    stack: ['JavaScript', 'React', 'Express'],
  },
  {
    id: 'insults',
    name: 'Twitter insult detector',
    year: '2022',
    summary: 'A dashboard tracking abusive tweets, powered by a random forest.',
    about:
      'A dashboard tracking tweets containing insults. Data pipeline over the Twitter API with Pandas, ' +
      'then classification with a random forest and a keyword list.',
    repo: 'alexgravx/Coding-Week-2022',
    stack: ['Python', 'Pandas', 'Plotly', 'Dash'],
  },
];

/** Path to the downloadable PDF, served from public/. */
export const resumePdf = '/resume_updated.pdf';
