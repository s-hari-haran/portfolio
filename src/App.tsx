import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import './index.css'

interface Project {
  title: string
  description: string
  tags: string[]
  href: string
  isExternal?: boolean
}

const projects: Project[] = [
  {
    title: 'Chokepoint',
    description: 'Critical Materials Risk Dashboard — Track supply chain vulnerabilities for strategic materials like lithium, cobalt, and rare earths.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    href: '/projects/chokepoint',
  },
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
    href: 'mailto:realhariaharan@gmail.com',
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
          <p className="mt-6 text-lg text-gray-500">
            I build things for the web. Currently exploring supply chain intelligence and data visualization.
          </p>
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

        {/* About Section */}
        <section className="mb-20">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-gray-500">
            About
          </h2>
          <div className="border-4 border-black bg-white p-6 shadow-brutal">
            <p className="text-gray-600 leading-relaxed">
              I'm a developer passionate about building tools that make complex data accessible. 
              When I'm not coding, you'll find me reading about geopolitics, supply chains, and emerging technologies.
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
