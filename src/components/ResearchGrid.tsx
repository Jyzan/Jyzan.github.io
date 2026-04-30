import React from 'react'
import FadeIn from './FadeIn'

const items = [
  {
    title: 'Embodied Intelligence',
    body: 'Exploring how intelligent systems ground perception and decision-making in interaction with the physical world.',
  },
  {
    title: 'AI Agents',
    body: 'Interested in agents that plan, reason, and collaborate effectively across open-ended tasks and environments.',
  },
  {
    title: 'Robotics / Automation',
    body: 'Connecting theory with implementation through automation workflows, control systems, and practical engineering work.',
  },
]

export default function ResearchGrid() {
  return (
    <section className="section-shell" id="research">
      <FadeIn>
        <p className="section-eyebrow">Research Interests</p>
        <h2 className="section-title">Areas I want to keep building in.</h2>
      </FadeIn>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <FadeIn key={item.title} delay={index * 120} duration={700}>
            <article className="content-card h-full">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">{item.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
