import {
  ArrowDownToLine,
  ArrowRight,
  CircuitBoard,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Send,
  ShieldCheck,
  Terminal
} from "lucide-react";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { MotionArticle, MotionDiv, MotionSection } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { TypingConsole } from "@/components/TypingConsole";
import {
  certifications,
  contactLinks,
  experience,
  metrics,
  navItems,
  projects,
  skills
} from "@/lib/data";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 }
};

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 bg-radial-grid bg-[length:100%_100%,42px_42px,42px_42px] opacity-55" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-px bg-gradient-to-r from-transparent via-cyan to-transparent animate-pulseLine" />

      <header className="fixed inset-x-0 top-0 z-30 border-b border-cyan/10 bg-void/75 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between gap-4" aria-label="Primary navigation">
          <a href="#home" className="shrink-0 font-mono text-sm font-semibold text-white">
            <span className="text-cyan">&lt;</span>VR<span className="text-neon">/cloud</span>
            <span className="text-cyan">&gt;</span>
          </a>
          <div className="hidden items-center gap-6 text-xs font-medium uppercase text-muted md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-neon">
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 border border-neon/30 px-3 py-2 font-mono text-xs text-neon transition hover:bg-neon/10"
          >
            <Terminal size={14} aria-hidden="true" />
            connect
          </a>
        </nav>
        <div className="border-t border-cyan/10 md:hidden">
          <div className="section-shell flex gap-4 overflow-x-auto py-3 text-xs font-medium uppercase text-muted">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="shrink-0 transition hover:text-neon">
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      <section id="home" className="section-shell flex min-h-screen scroll-mt-24 items-center pb-20 pt-28">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionDiv {...fadeIn}>
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan/20 bg-cyan/5 px-3 py-2 font-mono text-xs text-cyan">
              <CircuitBoard size={14} aria-hidden="true" />
              CLOUD OPS SIGNAL: ENTERPRISE READY
            </div>
            <h1 className="text-5xl font-semibold tracking-normal text-white md:text-7xl">Vishal Rao</h1>
            <p className="mt-5 max-w-3xl text-xl font-medium text-cyan md:text-2xl">
              Cloud Solutions Consultant | Azure | DevOps | Linux | Automation
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Computer Engineer focused on building resilient Azure platforms, secure cloud networking,
              Linux and Windows operations, DevOps automation, disaster recovery, and enterprise systems
              that stay observable when the pressure is real.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-neon px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan"
              >
                View Projects <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-cyan/40 px-5 py-3 text-sm font-semibold text-cyan transition hover:bg-cyan/10"
              >
                Contact Me <Mail size={16} aria-hidden="true" />
              </a>
              <a
                href="/Vishal_Rao_devops.pdf"
                download
                className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-neon/60 hover:text-neon"
              >
                Download Resume <ArrowDownToLine size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="border border-cyan/15 bg-black/25 px-4 py-4">
                  <p className="font-mono text-xs text-muted">{metric.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </MotionDiv>
          <MotionDiv {...fadeIn} transition={{ duration: 0.65, delay: 0.1 }}>
            <TypingConsole />
          </MotionDiv>
        </div>
      </section>

      <MotionSection className="section-shell py-16" {...fadeIn}>
        <SectionHeader
          id="about"
          eyebrow="About"
          title="Infrastructure thinking across cloud, networks, systems, and automation."
          description="A concise operator profile for serious production environments."
        />
        <div className="terminal-edge circuit-panel rounded-md p-6 md:p-8">
          <p className="text-lg leading-9 text-slate-100">
            Vishal Rao is a Cloud Solutions Consultant and Computer Engineer with a strong foundation in cloud
            computing, software engineering, networking, virtualization, infrastructure hardware, monitoring,
            security, and automation. His work sits where Azure architecture, Linux administration, Windows Server,
            Active Directory, DevOps tooling, and cloud-native operations meet: designing reliable systems,
            troubleshooting deeply, and turning repeatable operational work into scripts, pipelines, and platform
            patterns.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="section-shell py-16" {...fadeIn}>
        <SectionHeader
          id="skills"
          eyebrow="Skills"
          title="Technical stack organized by operational layer."
          description="Glowing where it should, grounded where it matters."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <MotionArticle
                key={group.title}
                className="terminal-edge circuit-panel rounded-md p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center border border-neon/30 bg-neon/10 text-neon shadow-green">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="font-mono text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="border border-cyan/15 bg-cyan/5 px-3 py-2 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </MotionArticle>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="section-shell py-16" {...fadeIn}>
        <SectionHeader
          id="experience"
          eyebrow="Experience"
          title="Enterprise roles with hands-on cloud and systems responsibility."
          description="A vertical timeline built around infrastructure outcomes, not job-title padding."
        />
        <div className="relative pl-5 before:absolute before:bottom-0 before:left-2 before:top-0 before:w-px before:bg-gradient-to-b before:from-cyan before:via-neon/50 before:to-transparent md:pl-8">
          {experience.map((role, index) => (
            <MotionArticle
              key={`${role.role}-${role.company}`}
              className="relative mb-6 ml-4 rounded-md border border-cyan/15 bg-black/25 p-5 md:p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <span className="absolute -left-[33px] top-7 h-4 w-4 border border-neon bg-void shadow-green" />
              <p className="font-mono text-xs uppercase text-cyan">{role.company}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{role.role}</h3>
              <p className="mt-2 text-sm text-neon">{role.focus}</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </MotionArticle>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="section-shell py-16" {...fadeIn}>
        <SectionHeader
          id="projects"
          eyebrow="Projects"
          title="Architecture-driven case studies."
          description="Built to read like real engineering work: challenge, architecture, stack, and outcome."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="terminal-edge circuit-panel rounded-md p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center border border-cyan/30 bg-cyan/10 text-cyan shadow-glow">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-2 text-muted">
                    <a aria-label={`${project.title} GitHub`} href="#contact" className="transition hover:text-neon">
                      <Github size={18} />
                    </a>
                    <a aria-label={`${project.title} details`} href="#contact" className="transition hover:text-cyan">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
                <div className="space-y-4 text-sm leading-7 text-muted">
                  <p>
                    <span className="font-mono text-neon">challenge:</span> {project.challenge}
                  </p>
                  <p>
                    <span className="font-mono text-cyan">architecture:</span> {project.architecture}
                  </p>
                  <p>
                    <span className="font-mono text-neon">outcome:</span> {project.outcome}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="border border-white/10 bg-white/[0.03] px-2.5 py-1.5 font-mono text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </MotionSection>

      <InteractiveTerminal />

      <MotionSection className="section-shell py-16" {...fadeIn}>
        <SectionHeader
          id="certifications"
          eyebrow="Certifications"
          title="Signals of cloud, security, and system administration depth."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <article key={cert.title} className="border border-cyan/15 bg-black/30 p-5 transition hover:border-neon/40 hover:bg-neon/5">
                <Icon className="mb-4 h-7 w-7 text-neon" aria-hidden="true" />
                <h3 className="text-base font-semibold leading-7 text-white">{cert.title}</h3>
              </article>
            );
          })}
        </div>
      </MotionSection>

      <MotionSection className="section-shell py-16" {...fadeIn}>
        <SectionHeader
          id="contact"
          eyebrow="Contact"
          title="Ready for serious cloud, systems, and platform conversations."
          description="Use the direct channels or send a short project note."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className="terminal-edge circuit-panel flex items-center gap-4 rounded-md p-5 transition hover:border-neon/50">
                  <span className="grid h-11 w-11 place-items-center border border-cyan/25 bg-cyan/10 text-cyan">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-xs text-muted">{item.label}</span>
                    <span className="block text-sm font-semibold text-white">{item.value}</span>
                  </span>
                </a>
              );
            })}
            <div className="flex gap-3 pt-2">
              <a href="https://www.linkedin.com/in/vishurao06" aria-label="LinkedIn" className="border border-cyan/25 p-3 text-cyan transition hover:bg-cyan/10">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/acevishu" aria-label="GitHub" className="border border-cyan/25 p-3 text-cyan transition hover:bg-cyan/10">
                <Github size={20} />
              </a>
              <a href="mailto:ecavishu@gmail.com" aria-label="Email" className="border border-cyan/25 p-3 text-cyan transition hover:bg-cyan/10">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <form className="terminal-edge circuit-panel rounded-md p-6">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-xs text-muted">Name</span>
                <input className="w-full border border-cyan/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-neon" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-xs text-muted">Email</span>
                <input type="email" className="w-full border border-cyan/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-neon" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-2 block font-mono text-xs text-muted">Subject</span>
              <input className="w-full border border-cyan/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-neon" placeholder="Cloud architecture / consulting / platform work" />
            </label>
            <label className="mt-4 block">
              <span className="mb-2 block font-mono text-xs text-muted">Message</span>
              <textarea className="min-h-36 w-full resize-y border border-cyan/15 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-neon" placeholder="Tell me what needs to be designed, automated, recovered, secured, or debugged." />
            </label>
            <button className="mt-5 inline-flex items-center gap-2 bg-neon px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan" type="submit">
              Send Message <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      </MotionSection>

      <footer className="section-shell border-t border-cyan/10 py-8 text-center font-mono text-xs text-muted">
        <p>Vishal Rao // Azure, Linux, DevOps, Networking, Automation // {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
