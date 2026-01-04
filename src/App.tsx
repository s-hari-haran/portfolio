import { Github, Linkedin, Mail, ArrowRight, Cpu, Database, Cloud, Code, Brain, Zap } from 'lucide-react'
import './index.css'

interface Project {
  title: string
  description: string
  tags: string[]
  href: string
  isExternal?: boolean
}

interface Skill {
  icon: typeof Cpu
  title: string
  items: string[]
}

const projects: Project[] = [
  {
    title: 'Chokepoint',
    description: 'Critical Materials Risk Dashboard — Track supply chain vulnerabilities for strategic materials like lithium, cobalt, and rare earths. Computes explainable risk scores, maps industry dependencies, and flags geopolitical choke points.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind', 'Firecrawl'],
    href: '/projects/chokepoint',
  },
]

const skills: Skill[] = [
  {
    icon: Code,
    title: 'Programming',
    items: ['Python', 'TypeScript', 'SQL', 'Git', 'Docker'],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    items: ['LLMs', 'RAG', 'NLP', 'Prompt Engineering', 'Whisper'],
  },
  {
    icon: Database,
    title: 'Data & Systems',
    items: ['ETL Pipelines', 'Risk Models', 'Graph Thinking', 'Scraping'],
  },
  {
    icon: Cloud,
    title: 'Infrastructure',
    items: ['GCP', 'AWS', 'Supabase', 'Firebase', 'Linux'],
  },
]

const interests = [
  'Supply Chain Intelligence',
  'Critical Materials',
  'Semiconductors',
  'Energy Systems',
  'Geopolitics',
  'Market Structure',
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
        <h3 className="text-xl font-bold">{project.title}</h3>
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
  return (
    <div className="min-h-screen bg-stone-50">
      <main className="mx-auto max-w-3xl px-6 py-20">
        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
            Hi, I'm{' '}
            <span className="underline decoration-4 underline-offset-8 decoration-black">
              Hari Haran
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed">
            CS Engineering (AI/ML) student obsessed with systems, infrastructure, and how power flows in the real world.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            I don't just build features — I build <strong>models of reality</strong>: supply chains, risk systems, automation pipelines, and AI tools that sit between software, policy, and physical infrastructure.
          </p>
        </section>

        {/* What I Focus On */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            What I Focus On
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-gray-600"><strong>Critical materials & supply-chain risk</strong> — understanding what breaks first when systems fail</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-gray-600"><strong>AI systems that explain, not hallucinate</strong> — useful AI that plugs into real workflows</p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-gray-600"><strong>Automation over dashboards</strong> — building things decision-makers actually use</p>
              </div>
            </div>
            <p className="mt-6 font-mono text-sm text-gray-500 border-t-2 border-black pt-4">
              I care more about <strong>clarity than hype</strong> and more about <strong>leverage than vanity metrics</strong>.
            </p>
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
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            Interests
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="border-2 border-black bg-gray-100 px-3 py-2 font-mono text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How I Think Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            How I Think
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <div className="grid grid-cols-2 gap-4 font-mono text-sm">
              <div className="border-2 border-black p-3 text-center">
                <span className="font-bold">Systems</span>
                <span className="text-gray-400"> &gt; </span>
                <span className="text-gray-500">Tools</span>
              </div>
              <div className="border-2 border-black p-3 text-center">
                <span className="font-bold">Structure</span>
                <span className="text-gray-400"> &gt; </span>
                <span className="text-gray-500">Prediction</span>
              </div>
              <div className="border-2 border-black p-3 text-center">
                <span className="font-bold">Clarity</span>
                <span className="text-gray-400"> &gt; </span>
                <span className="text-gray-500">Complexity</span>
              </div>
              <div className="border-2 border-black p-3 text-center">
                <span className="font-bold">Leverage</span>
                <span className="text-gray-400"> &gt; </span>
                <span className="text-gray-500">Effort</span>
              </div>
            </div>
            <p className="mt-4 text-gray-600 text-center">
              I'm more interested in <strong>why things fail</strong> than why they work.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            About
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a Computer Science Engineering student specializing in AI/ML, but my real focus is on systems that matter — infrastructure, energy, supply chains, and the hidden dependencies that make modern technology possible.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              When I'm not coding, you'll find me reading about semiconductors, rare earth minerals, financial market structure, and the psychology of decision-making.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm looking for <strong>research roles</strong>, <strong>infrastructure/climate/policy-adjacent startups</strong>, and environments where people care about second-order effects.
            </p>
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
              © {new Date().getFullYear()} Hari Haran
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
