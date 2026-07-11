/**
 * Single source of truth for every piece of content on the site.
 * Transcribed from public/resume_updated.pdf — keep the two in sync.
 */

export interface Link {
  label: string;
  href: string;
}

export interface Education {
  school: string;
  detail: string;
  degree: string;
  note?: string;
  location: string;
  date: string;
  coursework?: string[];
}

export interface Role {
  org: string;
  title: string;
  location: string;
  start: string;
  end: string;
  href?: string;
  /** Top-level bullets; each may carry nested sub-bullets. */
  bullets: Bullet[];
  stack: string[];
}

export interface Bullet {
  text: string;
  children?: string[];
}

export interface Project {
  name: string;
  blurb: string;
  href?: string;
  hrefLabel?: string;
  stack: string[];
}

export const profile = {
  name: 'Alexandre Gravereaux',
  handle: 'alexgravx',
  title: 'Software Engineer',
  location: 'New York, NY',
  // The updated resume deliberately omits an email address.
  links: [
    { label: 'github', href: 'https://github.com/alexgravx' },
    { label: 'linkedin', href: 'https://linkedin.com/in/alexandre-gravereaux' },
    { label: 'website', href: 'https://alexgravx.com' },
  ] satisfies Link[],
  bio:
    "MEng Computer Science student at Cornell Tech with an engineering background from " +
    "CentraleSupélec. I like optimizing processes and building software that removes drudgery — " +
    "DevOps, full-stack, and applied ML. Previously kept 2000+ students online as a sysadmin, " +
    "shipped MVPs through the Paris Digital Lab incubator, and built a SAS-to-Python transpiler " +
    "at Forvis Mazars.",
};

export const education: Education[] = [
  {
    school: 'Cornell Tech, Cornell University',
    detail: 'Cornell Tech',
    degree: 'Master of Engineering in Computer Science',
    note: 'merit scholarship recipient',
    location: 'New York, NY',
    date: 'May 2026',
    coursework: [
      'Applied Machine Learning',
      'Machine Learning Engineering',
      'Trustworthy AI',
      'Algorithms for Applications',
    ],
  },
  {
    school: 'CentraleSupélec, Paris-Saclay University',
    detail: 'CentraleSupélec',
    degree: 'Master of Science in Engineering and Applied Mathematics',
    note: 'GPA 3.86/4',
    location: 'Paris, France',
    date: 'May 2025',
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
  {
    school: 'Collège Stanislas',
    detail: 'Collège Stanislas',
    degree: 'Classes préparatoires — Math, Computer Science, Physics',
    location: 'Paris, France',
    date: 'May 2022',
    coursework: [
      'Intensive preparation for the highly competitive entrance exams to the French Grandes Écoles',
    ],
  },
];

export const skills = {
  Languages: ['Python', 'JavaScript', 'Java', 'Go', 'Swift'],
  DevOps: [
    'Docker',
    'Kubernetes',
    'Nginx',
    'GitLab CI/CD',
    'TGI',
    'Terraform',
    'Ansible',
    'IaC',
    'bash',
    'sysadmin',
  ],
  'Data & ML': [
    'Pandas',
    'scikit-learn',
    'PyTorch',
    'LangChain',
    'Celery',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Spark',
  ],
  Fullstack: ['Node.js', 'Express', 'React', 'Vue', 'Next.js', 'Vercel'],
} satisfies Record<string, string[]>;

export const experience: Role[] = [
  {
    org: 'Forvis Mazars',
    title: 'Software Engineer Intern',
    location: 'Paris, France',
    start: 'Sept 2024',
    end: 'Feb 2025',
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
    title: 'Software Engineer Student',
    location: 'Paris, France',
    start: 'Feb 2024',
    end: 'Jul 2024',
    href: 'https://paris-digital-lab.com/',
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
];

export const projects: Project[] = [
  {
    name: 'B2B storage space rental marketplace',
    blurb:
      'A storage-space rental platform for professionals — an Airbnb for warehouses — with ' +
      'reservation, calendar and billing.',
    href: 'https://yzilog.com/',
    hrefLabel: 'yzilog.com',
    stack: ['TypeScript', 'Express', 'Mantine', 'AWS', 'JWT'],
  },
  {
    name: 'Simulation trading platform',
    blurb:
      'A professional-style simulated trading platform with order placement, an order book, order ' +
      'matching and live market data charts.',
    href: 'https://trading.alexgravx.com/',
    hrefLabel: 'trading.alexgravx.com',
    stack: ['Python', 'FastAPI', 'TradingView API', 'AI agents'],
  },
];

export const clubs: Role[] = [
  {
    org: 'ViaRézo',
    title: 'DevOps',
    location: 'Paris, France',
    start: 'Sept 2022',
    end: 'Jan 2024',
    href: 'https://viarezo.fr/en/',
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

/** Path to the downloadable PDF, served from public/. */
export const resumePdf = '/resume_updated.pdf';
