import React from 'react'
import FadeIn from './FadeIn'

interface InfoSectionProps {
  eyebrow: string
  title: string
  children: React.ReactNode
  id?: string
}

export default function InfoSection({ eyebrow, title, children, id }: InfoSectionProps) {
  return (
    <section id={id} className="section-shell">
      <FadeIn>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 className="section-title">{title}</h2>
        <div className="section-copy">{children}</div>
      </FadeIn>
    </section>
  )
}
