import React from 'react'
import FadeIn from './FadeIn'

interface ContactStripProps {
  email: string
  qqMail: string
  youtubeUrl: string
}

export default function ContactStrip({ email, qqMail, youtubeUrl }: ContactStripProps) {
  return (
    <section className="section-shell pb-16" id="connect">
      <FadeIn>
        <div className="content-card flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-title !mt-3">Open to research, AI, football, and interesting collaborations.</h2>
            <p className="mt-4 text-base leading-7 text-[color:var(--text-muted)]">
              Reach out if you want to discuss embodied intelligence, AI agents, engineering projects, or football ideas
              for short-form content.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-[color:var(--text-main)] sm:grid-cols-2">
            <a className="contact-chip" href={`mailto:${email}`}>
              {email}
            </a>
            <a className="contact-chip" href={`mailto:${qqMail}`}>
              {qqMail}
            </a>
            <a className="contact-chip sm:col-span-2" href={youtubeUrl} target="_blank" rel="noreferrer">
              YouTube: @ManCITEA
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
