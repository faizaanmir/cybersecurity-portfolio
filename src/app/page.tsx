"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { BackToTop } from "@/components/BackToTop";
import { CertificationCard } from "@/components/CertificationCard";
import { ContactCard } from "@/components/ContactCard";
import { Footer } from "@/components/Footer";
import { HeroButtons } from "@/components/HeroButtons";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { RotatingTitle } from "@/components/RotatingTitle";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "@/components/SkillCard";
import { Timeline } from "@/components/Timeline";
import { certifications } from "@/data/certifications";
import { experiences } from "@/data/experience";
import { personal } from "@/data/personal";
import { projects, type Project } from "@/data/projects";
import { skillCategories } from "@/data/skills";

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black text-green-50">
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      <main>
        <section
          id="home"
          className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8"
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.22),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(16,185,129,0.16),transparent_24%),linear-gradient(135deg,#000000_0%,#031109_48%,#020403_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-black to-transparent" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-green-300">
                Enterprise Cybersecurity / {personal.location}
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-white md:text-7xl">
                {personal.name}
              </h1>
              <p className="mt-5 text-xl md:text-2xl">
                <RotatingTitle titles={personal.titles} />
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-green-100/80 md:text-lg">
                {personal.tagline}
              </p>
              <div className="mt-8">
                <HeroButtons />
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-lg border border-green-400/20 bg-black/75 p-6 shadow-2xl shadow-green-950/30 backdrop-blur"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12 }}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-green-300">
                    Security Operating View
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">
                    Detection-first analyst profile
                  </h2>
                </div>
                <span className="rounded-md border border-green-400/30 bg-green-400/10 px-3 py-1.5 font-mono text-xs text-green-200">
                  Active
                </span>
              </div>

              <div className="grid gap-4">
                {personal.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-green-400/15 bg-green-950/20 p-5 transition hover:border-green-300/40 hover:bg-green-900/20"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-3xl font-semibold text-white">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-sm text-green-100/75">
                          {metric.label}
                        </p>
                      </div>
                      <span className="h-2 w-24 overflow-hidden rounded-full bg-green-950">
                        <motion.span
                          className="block h-full rounded-full bg-gradient-to-r from-green-600 to-green-300"
                          initial={{ width: "0%" }}
                          animate={{ width: "78%" }}
                          transition={{ duration: 0.9, delay: 0.35 }}
                        />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-green-300/20 bg-green-400/[0.08] p-4">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-green-300">
                  Current Signal
                </p>
                <p className="mt-2 text-sm leading-6 text-green-50/85">
                  Turning noisy telemetry into tuned detections, repeatable hunts,
                  and cleaner incident response handoffs.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.a
            href="#about"
            aria-label="Scroll to about section"
            className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full border border-green-400/20 bg-green-950/20 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-green-100/75 backdrop-blur transition hover:border-green-300/40 hover:text-green-100 md:inline-flex"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll
          </motion.a>
        </section>

        <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="About"
              title="Security operations with an engineering mindset"
              description={personal.summary}
            />
            <div className="grid gap-4 md:grid-cols-2">
              {personal.profileHighlights.map((highlight, index) => (
                <motion.article
                  key={highlight}
                  className="rounded-lg border border-green-400/15 bg-green-950/15 p-5 text-green-50/85 shadow-xl shadow-green-950/20"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  {highlight}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Experience"
            title="Operational cybersecurity work"
            description="Hands-on security operations, incident response, SIEM administration, and detection improvement."
          />
          <Timeline items={experiences} />
        </section>

        <section id="skills" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Skills"
              title="Tools, platforms, and analyst workflows"
              description="A practical toolkit for monitoring, hunting, investigation, automation, and response."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {skillCategories.map((category, index) => (
                <SkillCard
                  key={category.title}
                  category={category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Projects"
              title="Detection, hunting, and automation work"
              description="Security projects focused on repeatable operations, clearer investigations, and stronger detection coverage."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpen={setActiveProject}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Certifications"
              title="Validated security learning"
              description="Credentials and training aligned with security operations, SIEM use, and cyber defense fundamentals."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {certifications.map((certification, index) => (
                <CertificationCard
                  key={certification.name}
                  certification={certification}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Contact"
              title="Let us connect"
              description="Open to security operations, detection engineering, threat hunting, and incident response opportunities."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {personal.contactCards.map((card, index) => (
                <ContactCard key={card.label} card={card} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
