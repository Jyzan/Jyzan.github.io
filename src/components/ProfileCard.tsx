import React from 'react'

interface ProfileCardProps {
  email: string
  qqMail: string
  schoolUrl: string
  youtubeUrl: string
}

function Item({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">{label}</p>
      {href ? (
        <a
          className="text-sm leading-7 text-[color:var(--text-main)] transition hover:text-[color:var(--accent)]"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      ) : (
        <p className="text-sm leading-7 text-[color:var(--text-main)]">{value}</p>
      )}
    </div>
  )
}

export default function ProfileCard({ email, qqMail, schoolUrl, youtubeUrl }: ProfileCardProps) {
  return (
    <aside className="glass-card w-full max-w-[460px]" id="contact">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--text-muted)]">
        Student Profile
      </p>
      <h2 className="mt-4 max-w-[12ch] font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[color:var(--text-main)]">
        Embodied intelligence, AI agents, and student-built projects.
      </h2>

      <div className="mt-8 space-y-6">
        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Education</h3>
          <Item label="School" value="Shanghai Jiao Tong University" href={schoolUrl} />
          <Item label="Major" value="Automation" />
        </section>

        <section className="space-y-3 border-t border-white/10 pt-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Research</h3>
          <p className="text-sm leading-7 text-[color:var(--text-main)]">Embodied intelligence and AI agents</p>
        </section>

        <section className="space-y-3 border-t border-white/10 pt-6">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">Contact</h3>
          <Item label="Email" value={email} href={`mailto:${email}`} />
          <Item label="QQ" value={qqMail} href={`mailto:${qqMail}`} />
          <Item label="YouTube" value="@ManCITEA" href={youtubeUrl} />
        </section>
      </div>
    </aside>
  )
}
