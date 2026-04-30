import React from 'react'

interface RepositoryCardProps {
  name: string
  description: string
  tags: string[]
  href: string
}

export default function RepositoryCard({ name, description, tags, href }: RepositoryCardProps) {
  return (
    <article className="content-card h-full">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Repository</p>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">{name}</h3>
      <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">{description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tag-chip">
            {tag}
          </span>
        ))}
      </div>
      <a
        className="mt-6 inline-flex items-center text-sm font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
      </a>
    </article>
  )
}
