import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ArrowRight, Download, Briefcase, GraduationCap, Trophy, Code, Brain, Cloud, Wrench } from 'lucide-react'
import './index.css'

function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    setDisplayText('')
    setIsComplete(false)

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return { displayText, isComplete }
}

interface Project {
  title: string
  description: string
  tags: string[]
  href: string
  date: string
  isExternal?: boolean
}

interface Skill {
  icon: typeof Code
  title: string
  items: string[]
}

interface Achievement {
  title: string
  event: string
  year: string
}

const projects: Project[] = [
  {
    title: 'Chokepoint',
    description: 'Critical Materials Risk Dashboard — Track supply chain vulnerabilities for strategic materials like lithium, cobalt, and rare earths. Computes explainable risk scores, maps industry dependencies, and flags geopolitical choke points.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Firecrawl'],
    href: '/projects/chokepoint',
    date: 'Jan 2026',
  },
  {
    title: 'DeedLens',
    description: 'AI-Powered Property Document Intelligence Platform. Built an end-to-end OCR + NER pipeline to structure unorganized Indian property deeds. Implemented semantic search using vector embeddings for contextual legal queries.',
    tags: ['Python', 'OCR', 'NLP', 'FAISS'],
    href: 'https://github.com/s-hari-haran/deedlens',
    date: 'Nov 2025 – Jan 2026',
    isExternal: true,
  },
  {
    title: 'GoPred',
    description: 'Stock Prediction & Portfolio Optimization System. Time-series forecasting using Prophet to predict next-day stock prices. Implemented Markowitz mean-variance optimization with interactive Streamlit dashboard.',
    tags: ['Python', 'Prophet', 'SciPy', 'Streamlit'],
    href: 'https://github.com/s-hari-haran/GoPred',
    date: '2025',
    isExternal: true,
  },
  {
    title: 'FreshTrack',
    description: 'Food Freshness Detection system using CNN-based image classification. Integrated OCR + LLM-based reasoning to extract expiry information from labels with real-time webcam inference.',
    tags: ['Python', 'TensorFlow', 'Flask', 'OCR'],
    href: 'https://github.com/s-hari-haran/food-expiry-tracker',
    date: 'Dec 2024 – Feb 2025',
    isExternal: true,
  },
  {
    title: 'Binance Futures Trading Bot',
    description: 'Algorithmic Trading & Strategy Engine. Modular, class-based trading engine for Binance USDT-M Futures with market/limit orders, position sizing, risk controls, and backtesting support.',
    tags: ['Python', 'Binance API', 'Algorithmic Trading'],
    href: 'https://github.com/s-hari-haran/Hari_Haran_S_binance_bot',
    date: 'Oct – Nov 2025',
    isExternal: true,
  },
]

const skills: Skill[] = [
  {
    icon: Code,
    title: 'Programming',
    items: ['Python', 'C', 'Java', 'TypeScript'],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    items: ['LLMs', 'RAG', 'TensorFlow', 'Scikit-learn', 'NLP', 'CNNs'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Databases',
    items: ['AWS', 'GCP', 'Azure', 'Firebase', 'Firestore'],
  },
  {
    icon: Wrench,
    title: 'Frameworks & Tools',
    items: ['React', 'Flask', 'Node.js', 'Git', 'Docker', 'Postman'],
  },
]

const achievements: Achievement[] = [
  { title: 'Winner', event: 'ThinkUp Ideathon', year: '2025' },
  { title: '2nd Place', event: 'Algo Arena Hackathon', year: '2025' },
  { title: '3rd Place', event: 'TerraQuest, Omnitricks, Hackfusion @ MIT Mysore', year: '2025' },
  { title: 'Finalist', event: "India's First Replit Hackathon", year: '2025' },
]

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/s-hari-haran',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/real-hari-haran',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:realhariharan@gmail.com',
    label: 'Email',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target={project.isExternal ? '_blank' : undefined}
      rel={project.isExternal ? 'noopener noreferrer' : undefined}
      className="group block border-4 border-black bg-white p-6 shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="font-mono text-xs text-gray-400 mt-1">{project.date}</p>
        </div>
        <ArrowRight className="h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
      </div>
      <p className="mt-2 text-gray-500">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="border-2 border-black bg-gray-100 px-2 py-1 font-mono text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon
  return (
    <div className="border-4 border-black bg-white p-4 shadow-brutal">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="h-5 w-5" />
        <h3 className="font-bold">{skill.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="border-2 border-black bg-gray-100 px-2 py-1 font-mono text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function App() {
  const { displayText, isComplete } = useTypewriter('Hari Haran S', 120)

  return (
    <div className="min-h-screen bg-stone-50">
      <main className="mx-auto max-w-3xl px-6 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Hi, I'm{' '}
            <span className="underline decoration-4 underline-offset-8 decoration-black">
              {displayText}
              <span className={`typewriter-cursor ${isComplete ? 'blink' : ''}`}>|</span>
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            <strong>4th-year Computer Science Engineering (AI/ML)</strong> student with strong experience in applied machine learning, backend systems, and full-stack development.
          </p>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            I focus on building <strong>scalable, real-world AI systems</strong> and <strong>data-driven products</strong> rather than experimental or toy projects.
          </p>
          
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1_MCKgDVHLPs_FwoE09J2n5FRfljqsb1d/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 border-4 border-black bg-black text-white px-6 py-3 font-bold shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            About Me
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <ul className="about-list">
              <li>
                AI/ML-focused engineer with hands-on experience in <strong>OCR, NLP, CNNs, semantic search, and algorithmic systems</strong>
              </li>
              <li>
                Interested in <strong>production-oriented AI</strong>, automation, and backend-aligned system design
              </li>
              <li>
                Comfortable working across <strong>ML pipelines, APIs, databases, and frontend integration</strong>
              </li>
              <li>
                Strong inclination toward <strong>problem-solving, system thinking, and execution</strong>
              </li>
            </ul>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            Experience
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <div className="flex items-start gap-3">
              <Briefcase className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">Operations Intern</h3>
                <p className="font-mono text-sm text-gray-500">Airlearn (Unacademy) • Bangalore, India • Aug 2025</p>
                <ul className="mt-3 space-y-2 text-gray-600">
                  <li>• Translated <strong>Figma design specifications</strong> into backend-aligned system logic</li>
                  <li>• Identified repetitive operational workflows and proposed <strong>automation improvements</strong></li>
                  <li>• Collaborated with cross-functional teams to improve <strong>execution efficiency</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            Achievements
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold">{achievement.title}</span>
                    <span className="text-gray-500"> — {achievement.event}</span>
                    <span className="font-mono text-xs text-gray-400 ml-2">({achievement.year})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            Education
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <div className="flex items-start gap-3">
              <GraduationCap className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold">AMC Engineering College</h3>
                <p className="font-mono text-sm text-gray-500">Bangalore, India • 2022 – 2026</p>
                <p className="mt-2 text-gray-600">
                  <strong>B.E. Computer Science Engineering (AI/ML)</strong>
                </p>
                <p className="mt-1 text-gray-600">
                  CGPA: <strong>8.23</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-black py-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="border-2 border-black p-3 transition-colors hover:bg-black hover:text-white"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="font-mono text-sm text-gray-500">
              © {new Date().getFullYear()} Hari Haran S
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
