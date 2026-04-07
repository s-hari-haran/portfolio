import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, ArrowRight, Download, Briefcase, GraduationCap, Trophy, Code, Brain, Cloud, Wrench, Phone, PhoneOff, Youtube } from 'lucide-react'
import './index.css'
import profileImage from './assets/profile.jpeg'

const VAPI_PUBLIC_KEY = '71df93ef-9aa7-4c1f-85a1-6c9f0acd7e2f'
const ASSISTANT_ID = 'f47dab8b-e5d7-4bca-a991-57abe4bb8415'

function useTypewriter(text: string, typeSpeed: number = 100, eraseSpeed: number = 50, pauseTime: number = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    if (isTyping) {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1))
        }, typeSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, pauseTime)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, eraseSpeed)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true)
        }, 500)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, text, typeSpeed, eraseSpeed, pauseTime])

  return { displayText, isTyping }
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
  {
    title: 'Cognitive Offload',
    description: 'Built a real-time B2B dashboard integrating LLM-based classification to process and organize unstructured workplace data with bi-directional real-time communication using WebSockets.',
    tags: ['React', 'Node.js', 'SQLite', 'Drizzle ORM', 'Socket.io'],
    href: 'https://github.com/s-hari-haran/cognitiveoffload',
    date: 'Jan 2026',
    isExternal: true,
  },
  {
    title: 'Agentic DevOps System',
    description: 'Engineered a Proof-of-Concept (PoC) event-driven platform using autonomous AI agents to simulate automated DevOps workflows and error resolution. Integrated Kubernetes monitoring and RabbitMQ.',
    tags: ['Python', 'Docker', 'Kubernetes', 'RabbitMQ', 'Qdrant'],
    href: 'https://github.com/s-hari-haran/devopscopilot',
    date: 'Mar 2025 – Dec 2025',
    isExternal: true,
  },
]

const skills: Skill[] = [
  {
    icon: Code,
    title: 'Programming',
    items: ['Python', 'JavaScript', 'Java', 'C', 'TypeScript'],
  },
  {
    icon: Brain,
    title: 'AI & Data',
    items: ['Prompt Engineering', 'RAG', 'FAISS', 'Qdrant', 'TensorFlow', 'Pandas', 'NLP'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    items: ['Docker', 'Kubernetes', 'RabbitMQ', 'GCP', 'Firebase', 'AWS'],
  },
  {
    icon: Wrench,
    title: 'Backend & Tools',
    items: ['Node.js', 'Flask', 'React.js', 'Socket.io', 'Drizzle ORM', 'Git', 'Postman'],
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
  {
    icon: Youtube,
    href: 'https://wa.me/919538133265?text=You%20lost%20a%20subscriber%2C%20tell%20me%20your%20youtube%20channel.',
    label: 'YouTube',
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
  const { displayText } = useTypewriter('Hari Haran S', 120, 60, 2000)
  const [isCallActive, setIsCallActive] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [vapiReady, setVapiReady] = useState(false)
  const vapiRef = useRef<any>(null)

  useEffect(() => {
    let mounted = true
    
    // Dynamic import to handle CommonJS/ESM interop
    const initVapi = async () => {
      try {
        const vapiModule: any = await import('@vapi-ai/web')
        // Handle double-wrapped default export from CommonJS module
        let VapiClass = vapiModule.default
        if (VapiClass && typeof VapiClass !== 'function' && VapiClass.default) {
          VapiClass = VapiClass.default
        }
        
        if (!mounted || typeof VapiClass !== 'function') return
        
        const vapi = new VapiClass(VAPI_PUBLIC_KEY)
        vapiRef.current = vapi

        vapi.on('call-start', () => {
          setIsConnecting(false)
          setIsCallActive(true)
        })
        
        vapi.on('call-end', () => {
          setIsCallActive(false)
          setIsConnecting(false)
        })
        
        setVapiReady(true)
      } catch (error) {
        console.error('Failed to initialize Vapi:', error)
      }
    }
    
    initVapi()

    return () => {
      mounted = false
      if (vapiRef.current) {
        vapiRef.current.stop()
      }
    }
  }, [])

  const toggleCall = async () => {
    if (!vapiRef.current) return
    
    if (isCallActive) {
      vapiRef.current.stop()
    } else {
      setIsConnecting(true)
      try {
        await vapiRef.current.start(ASSISTANT_ID)
      } catch (error) {
        console.error('Failed to start call:', error)
        setIsConnecting(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <main className="mx-auto max-w-3xl px-6 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
                Hi, I'm{' '}
                <span className="underline decoration-4 underline-offset-8 decoration-black">
                  {displayText}
                  <span className="typewriter-cursor blink">|</span>
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                <strong>4th-year Computer Science Engineering (AI/ML)</strong> student with strong experience in applied machine learning, backend systems, and full-stack development.
              </p>
              <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                I focus on building <strong>scalable, real-world AI systems</strong> and <strong>data-driven products</strong> that can have impact.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="/hari_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-4 border-black bg-black text-white px-6 py-3 font-bold shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm min-w-[200px]"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
                <button
                  onClick={toggleCall}
                  disabled={isConnecting || !vapiReady}
                  className={`inline-flex items-center justify-center gap-2 border-4 border-black px-6 py-3 font-bold shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm min-w-[200px] ${
                    isCallActive 
                      ? 'bg-red-500 text-white border-red-500' 
                      : isConnecting || !vapiReady
                        ? 'bg-gray-300 text-gray-600 cursor-wait'
                        : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {isCallActive ? (
                    <><PhoneOff className="h-5 w-5" /> End Call</>
                  ) : isConnecting ? (
                    <><Phone className="h-5 w-5 animate-pulse" /> Connecting...</>
                  ) : !vapiReady ? (
                    <><Phone className="h-5 w-5" /> Loading...</>
                  ) : (
                    <><Phone className="h-5 w-5" /> Talk to Hari</>
                  )}
                </button>
              </div>
            </div>
            
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={profileImage}
                alt="Hari Haran S"
                className="profile-image"
              />
            </div>
          </div>
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
          <div className="space-y-6">
            <div className="border-4 border-black bg-white p-6 shadow-brutal">
              <div className="flex items-start gap-3">
                <Briefcase className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Prompt Engineering Intern</h3>
                  <p className="font-mono text-sm text-gray-500">Samora AI (YC W26) • Remote • Jan 2026 – Present</p>
                  <ul className="mt-3 experience-list">
                    <li>Worked on production LLM systems, focusing on <strong>prompt optimization</strong>, edge-case handling, and improving response reliability in AI voice agents</li>
                    <li>Collaborated with engineering teams to analyze failures, <strong>reduce hallucinations</strong>, and improve consistency in real-world AI applications</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-4 border-black bg-white p-6 shadow-brutal">
              <div className="flex items-start gap-3">
                <Briefcase className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold">Operations Intern</h3>
                  <p className="font-mono text-sm text-gray-500">Airlearn (Unacademy) • Bangalore, India • Aug 2025</p>
                  <ul className="mt-3 experience-list">
                    <li>Translated <strong>Figma design specifications</strong> into backend-aligned system logic</li>
                    <li>Identified repetitive operational workflows and proposed <strong>automation improvements</strong></li>
                    <li>Collaborated with cross-functional teams to improve <strong>execution efficiency</strong></li>
                  </ul>
                </div>
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

        {/* Contact/CTA Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            Let's Connect
          </h2>
          <div className="border-4 border-black bg-white p-8 shadow-brutal">
            <div className="text-center">
              <div className="inline-block border-2 border-black bg-black text-white px-4 py-1 mb-4 font-mono text-sm">
                🟢 Open to Opportunities
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Looking for AI/ML & Backend Roles
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                I'm actively seeking roles in applied AI, ML engineering, and backend systems. 
                If you're building something interesting, let's talk.
              </p>
              <a
                href="mailto:realhariharan@gmail.com"
                className="inline-flex items-center gap-2 border-4 border-black bg-black text-white px-6 py-3 font-bold shadow-brutal transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm"
              >
                <Mail className="h-5 w-5" />
                realhariharan@gmail.com
              </a>
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
