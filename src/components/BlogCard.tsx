import React from 'react'

interface BlogCardProps {
  title: string
  description: string
  meta: string
}

export default function BlogCard({ title, description, meta }: BlogCardProps) {
  return (
    <article className="content-card h-full">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">{meta}</p>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">{title}</h3>
      <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">{description}</p>
    </article>
  )
}
