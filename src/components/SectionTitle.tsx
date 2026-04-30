import React from 'react'
import FadeIn from './FadeIn'

interface SectionTitleProps {
  eyebrow: string
  title: string
  description?: string
}

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <FadeIn>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </FadeIn>
  )
}
