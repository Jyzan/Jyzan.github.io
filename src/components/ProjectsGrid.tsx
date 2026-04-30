import React from 'react'
import FadeIn from './FadeIn'

const projects = [
  {
    title: 'Embedded Systems Labs',
    description: 'Course and lab work around hardware-software integration, controller behavior, and practical experimentation.',
  },
  {
    title: 'Image Processing Projects',
    description: 'Projects focused on visual data, algorithmic analysis, and building intuition for machine perception tasks.',
  },
  {
    title: 'Motor Control and HMI Design',
    description: 'Work on control logic, operator interaction, and translating technical requirements into usable interfaces.',
  },
]

export default function ProjectsGrid() {
  return (
    <section className="section-shell" id="projects">
      <FadeIn>
        <p className="section-eyebrow">Featured Projects</p>
        <h2 className="section-title">A few directions that define my current portfolio.</h2>
      </FadeIn>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 120} duration={700}>
            <article className="content-card h-full">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Project {index + 1}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">{project.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
