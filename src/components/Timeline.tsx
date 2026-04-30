import React from 'react'

interface TimelineItem {
  period: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative mt-10 grid gap-5">
      {items.map((item) => (
        <article key={item.title} className="timeline-item">
          <div className="timeline-marker" aria-hidden />
          <div className="content-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">{item.period}</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}
