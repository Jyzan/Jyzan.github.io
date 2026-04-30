import React from 'react'
import { quickLinks } from '../data/siteData'

interface ProfileCardProps {
  email: string
  openReviewUrl: string
  qqMail: string
  schoolUrl: string
  youtubeUrl: string
}

function Item({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="space-y-0.5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">{label}</p>
      {href ? (
        <a
          className="text-sm leading-6 text-[color:var(--text-main)] transition hover:text-[color:var(--accent)]"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm leading-6 text-[color:var(--text-main)]">{value}</p>
      )}
    </div>
  )
}

export default function ProfileCard({ email, openReviewUrl, qqMail, schoolUrl, youtubeUrl }: ProfileCardProps) {
  return (
    <aside className="glass-card compact-glass-card w-full max-w-[420px]" id="contact">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
        Student Profile
      </p>
      <h2 className="mt-3 max-w-[13ch] font-display text-[clamp(1.55rem,2.4vw,2.2rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[color:var(--text-main)]">
        Embodied intelligence, AI agents, and student-built projects.
      </h2>

      <div className="mt-6 space-y-4">
        <section className="space-y-2.5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Education</h3>
          <Item label="School" value="Shanghai Jiao Tong University" href={schoolUrl} />
          <Item label="Major" value="Automation" />
        </section>

        <section className="space-y-2.5 border-t border-white/10 pt-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Research</h3>
          <p className="text-sm leading-7 text-[color:var(--text-main)]">
            Embodied intelligence, AI agents, and multimodal interaction
          </p>
        </section>

        <section className="space-y-2.5 border-t border-white/10 pt-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Contact</h3>
          <Item label="Email" value={email} href={`mailto:${email}`} />
          <Item label="QQ" value={qqMail} href={`mailto:${qqMail}`} />
          <Item label="YouTube" value="@ManCITEA" href={youtubeUrl} />
        </section>

        <section className="space-y-2.5 border-t border-white/10 pt-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Links</h3>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                className="link-card"
                href={link.label === 'OpenReview' ? openReviewUrl : link.href}
                target={link.href.startsWith('#') ? undefined : '_blank'}
                rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                  {link.label}
                </span>
                <span className="mt-2 block text-sm text-[color:var(--text-main)]">{link.value}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}
