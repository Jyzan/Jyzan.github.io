import React from 'react'
import { heroButtons, siteMeta } from '../data/siteData'
import FadeIn from './FadeIn'
import LinkButton from './LinkButton'
import Navbar from './Navbar'

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-[color:var(--accent)]">{children}</span>
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#020617_0%,#051321_100%)]">
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-10 pt-5 sm:px-6 md:px-10 lg:px-16">
        <Navbar
          email={siteMeta.email}
          githubUrl={siteMeta.githubUrl}
          openReviewUrl={siteMeta.openReviewUrl}
          youtubeUrl={siteMeta.youtubeUrl}
        />

        <main className="grid flex-1 items-start gap-10 pt-8 md:pt-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,520px)] lg:gap-16 lg:pt-14">
          <div id="about" className="max-w-[660px]">
            <FadeIn delay={150} duration={700}>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                Personal Homepage
              </p>
            </FadeIn>

            <FadeIn delay={260} duration={800}>
              <h1 className="font-display text-[clamp(2.35rem,5vw,4.8rem)] font-extrabold leading-[0.97] tracking-[-0.04em] text-[color:var(--text-main)]">
                <span className="block">Hi, I&apos;m {siteMeta.name}.</span>
                <span className="block">Automation Undergraduate</span>
                <span className="block">at Shanghai Jiao Tong University.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={420} duration={850}>
              <div className="mt-7 max-w-[640px] space-y-4 text-[1.05rem] leading-[1.75] text-[color:var(--text-muted)]">
                <p>
                  I&apos;m an undergraduate student at{' '}
                  <a
                    className="font-semibold text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
                    href={siteMeta.schoolUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Shanghai Jiao Tong University
                  </a>
                  , majoring in Automation. My research interests include <Accent>embodied intelligence</Accent> and{' '}
                  <Accent>AI agents</Accent>. I also create <Accent>football</Accent> short videos on YouTube.
                </p>
                <p className="text-[color:var(--text-main)]">
                  I&apos;m always open to learning, collaboration, and meaningful conversations.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={560} duration={900} className="mt-9 flex flex-wrap gap-4">
              {heroButtons.map((button) => (
                <LinkButton
                  key={button.label}
                  className={button.label === 'Blog' ? 'min-w-[118px]' : ''}
                  external={button.external}
                  href={button.href}
                  label={button.label}
                  variant={button.variant}
                />
              ))}
            </FadeIn>
          </div>

          <div className="flex w-full justify-start lg:justify-end">
            <FadeIn delay={680} duration={950}>
              <div className="relative w-full max-w-[500px] overflow-hidden rounded-[28px] border border-[rgba(148,211,255,0.22)] bg-[rgba(8,25,40,0.32)] shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-sm">
                <video
                  className="block h-[420px] w-full object-cover object-[58%_50%] md:h-[500px] lg:h-[560px]"
                  src="/blue_moon.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.22)_100%)]" />
              </div>
            </FadeIn>
          </div>
        </main>
      </div>
    </section>
  )
}
