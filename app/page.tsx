import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
// import ProjectsCarousel from "@/components/ProjectsCarousel";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import TechnicalSkills from "@/components/TechnicalSkills";
import EducationPanel from "@/components/EducationPanel";
import ExperienceTimelineVertical from "@/components/ExperienceTimelineVertical";
import Button from "@/components/Button";
import { EXPERIENCE, HERO, PROJECTS, SOCIALS, EDUCATION, CERTIFICATIONS, CONTACT } from "@/lib/data";
import HeroTypewriter from "@/components/HeroTypewriter";
import CertificatesCarousel from "@/components/CertificatesCarousel";

export default function Page() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      {/* Full viewport hero (minus sticky navbar height) */}
      <section id="hero" className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 pt-8 pb-12 text-center">
        <p className="text-lg md:text-xl tracking-wide font-medium text-accent">{HERO.headline}</p>
        <h1 className="mt-2 font-display text-5xl font-semibold tracking-tight md:text-6xl">
          {HERO.name}
        </h1>
        <HeroTypewriter />
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects"><Button>View Projects</Button></a>
          <a href="#contact"><Button variant="ghost">Contact Me</Button></a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-sm underline underline-offset-4"> Resume</a>
        </div>
        {/* <div className="mt-6 flex items-center justify-center gap-3 text-sm">
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300">GitHub</a>
          <span className="text-slate-400">•</span>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300">LinkedIn</a>
          <span className="text-slate-400">•</span>
          <a href={SOCIALS.email} className="text-slate-600 dark:text-slate-300">Email</a>
        </div> */}
      </section>

      {/* About */}
      <Section id="about" title="About Me" className="text-center">
        <p className="mx-auto mb-10 max-w-3xl text-center text-slate-600 dark:text-slate-300">
          Driven by curiosity and a love for building meaningful systems, I&apos;m passionate about using technology to solve real-world problems across data, software, and AI domains.
        </p>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-left md:grid-cols-2">
          <div className="space-y-5 max-w-prose md:max-w-none">
            <h3 className="mb-2 font-display text-2xl">
              <span className="text-slate-300 dark:text-slate-300">The </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Beginning</span>
            </h3>
            <p>
              I am a Computer Science graduate who loves building systems that blend clean engineering with thoughtful, user-centered design. From full-stack development to data engineering and cloud deployment, I have worked across the stack to create reliable, scalable, and intuitive software. I enjoy transforming complex problems into simple, elegant solutions - whether that&apos;s crafting APIs, optimizing databases, or bringing interfaces to life with modern frontend frameworks.
            </p>
            <p>
              My experience spans Spring Boot, Node.js, React, PostgreSQL, Docker, AWS, and AI-driven workflows, and I am continuously exploring new ways to build better, faster, and smarter. I am looking for opportunities where I can contribute to impactful products, grow within a collaborative engineering culture, and deepen my expertise in platform-oriented full-stack development.
            </p>
          </div>
          <div className="space-y-6">
            <EducationPanel items={EDUCATION} />
          </div>
        </div>
      </Section>

      {/* Projects (Grid Showcase) */}
      <Section id="projects" title="Projects" className="text-center">
        <ProjectsShowcase projects={PROJECTS} />
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" className="text-left" titleClassName="text-center">
        <ExperienceTimelineVertical />
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical Skills" className="text-center">
        <TechnicalSkills />
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications" className="text-center">
        <CertificatesCarousel items={CERTIFICATIONS} />
      </Section>

      {/* Contact */}
      <Section id="contact" title="Let's Connect" className="" titleClassName="text-center">
        <p className="mx-auto mb-8 max-w-3xl text-slate-700 dark:text-slate-300">
          Interested in building scalable data solutions or AI-powered applications together? Let&rsquo;s discuss how we can turn your data challenges and AI requirements into opportunities.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          {/* Left: Info list */}
          <div className="space-y-6 pl-4 md:pl-8">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                {/* Mail icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>
                  <path d="m22 6-10 7L2 6"/>
                </svg>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Gmail</div>
                <a className="text-primary underline-offset-4 hover:underline" href={SOCIALS.email}>
                  {SOCIALS.email.replace(/^mailto:/, "")}
                </a>
              </div>
            </div>
            {/* Phone (optional) */}
            {CONTACT?.phone && (
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  {/* Phone icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.77.55 2.61a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.56-1.25a2 2 0 0 1 2.11-.45c.84.25 1.71.43 2.61.55A2 2 0 0 1 22 16.92Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a className="text-primary hover:underline underline-offset-4" href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`}>{CONTACT.phone}</a>
                </div>
              </div>
            )}
            {/* Location (optional) */}
            {CONTACT?.location && (
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  {/* Map pin icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-slate-700 dark:text-slate-300">{CONTACT.location}</div>
                </div>
              </div>
            )}
          </div>

          {/* Right: Social buttons */}
          <div className="space-y-4">
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-primary dark:bg-slate-800">
                {/* LinkedIn icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.04h.05c.53-1 1.84-2.04 3.78-2.04 4.04 0 4.79 2.66 4.79 6.12V23h-4v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8z" />
                </svg>
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                {/* GitHub icon */}
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58V21.3c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.63-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
              </div>
              <span className="font-medium">GitHub</span>
            </a>
            <a href={SOCIALS.email} className="flex items-center gap-4 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-primary dark:bg-slate-800">
                {/* Mail icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>
                  <path d="m22 6-10 7L2 6"/>
                </svg>
              </div>
              <span className="font-medium">Gmail</span>
            </a>
          </div>
        </div>
      </Section>
      <footer className="pb-12 text-center text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} NNSwaroopa. All rights reserved.</footer>
    </>
  );
}
