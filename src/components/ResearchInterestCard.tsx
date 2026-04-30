import React from 'react'

interface ResearchInterestCardProps {
  title: string
  description: string
}

export default function ResearchInterestCard({ title, description }: ResearchInterestCardProps) {
  return (
    <article className="content-card h-full">
      <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">{description}</p>
    </article>
  )
}
