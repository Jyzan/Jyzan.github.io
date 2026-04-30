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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#051321_100%)]">
      <div className="relative z-10 mx-auto flex min-h-[84vh] w-full max-w-[1440px] flex-col px-5 pb-4 pt-5 sm:px-6 md:px-10 lg:px-16">
        <Navbar
          email={siteMeta.email}
          githubUrl={siteMeta.githubUrl}
          openReviewUrl={siteMeta.openReviewUrl}
          youtubeUrl={siteMeta.youtubeUrl}
        />

        <main className="relative mt-3 flex flex-1 items-start overflow-hidden pb-10 pt-7 md:mt-4 md:pb-12 md:pt-8 lg:pb-14 lg:pt-10">
          <video
            className="hero-media absolute bottom-0 left-2 right-2 top-0 h-full w-auto rounded-[24px] object-cover object-[72%_46%] sm:left-3 sm:right-3 md:left-4 md:right-4 lg:left-6 lg:right-6"
            src="/blue_moon.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="hero-overlay absolute bottom-0 left-2 right-2 top-0 rounded-[24px] sm:left-3 sm:right-3 md:left-4 md:right-4 lg:left-6 lg:right-6" />

          <div id="about" className="relative z-10 max-w-[660px]">
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
        </main>
      </div>
    </section>
  )
}
