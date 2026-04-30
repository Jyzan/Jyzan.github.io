import React from 'react'
import figureImage from '../../assets/images/TodoEvolve.jpg'

interface FigureCardProps {
  title: string
  description: string
  href?: string
  linkLabel?: string
}

export default function FigureCard({ title, description, href, linkLabel }: FigureCardProps) {
  return (
    <article className="content-card h-full overflow-hidden p-0">
      <div className="figure-placeholder">
        <img alt={title} className="h-full w-full object-cover" src={figureImage} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[color:var(--text-main)]">{title}</h3>
        <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">{description}</p>
        {href && linkLabel ? (
          <a
            className="mt-5 inline-flex items-center text-sm font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
            href={href}
            target={href.startsWith('#') ? undefined : '_blank'}
            rel={href.startsWith('#') ? undefined : 'noreferrer'}
          >
            {linkLabel}
          </a>
        ) : null}
      </div>
    </article>
  )
}
