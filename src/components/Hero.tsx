import React from 'react'
import { heroButtons, siteMeta } from '../data/siteData'
import FadeIn from './FadeIn'
import LinkButton from './LinkButton'
import Navbar from './Navbar'
import ProfileCard from './ProfileCard'

function Accent({ children }: { children: React.ReactNode }) {
  return <span className="text-[color:var(--accent)]">{children}</span>
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="hero-media absolute inset-0 h-full w-full object-cover object-center"
        src="/blue_moon.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-10 pt-5 sm:px-6 md:px-10 lg:px-16">
        <Navbar
          email={siteMeta.email}
          githubUrl={siteMeta.githubUrl}
          openReviewUrl={siteMeta.openReviewUrl}
          youtubeUrl={siteMeta.youtubeUrl}
        />

        <main className="grid flex-1 items-center gap-10 pt-14 md:pt-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,460px)] lg:gap-20 lg:pt-24">
          <div id="about" className="max-w-[700px]">
            <FadeIn delay={150} duration={700}>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--text-muted)]">
                Personal Homepage
              </p>
            </FadeIn>

            <FadeIn delay={260} duration={800}>
              <h1 className="font-display text-[clamp(2.8rem,6vw,5.8rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[color:var(--text-main)]">
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

          <div className="flex justify-start lg:justify-end lg:pt-24">
            <FadeIn delay={680} duration={950}>
              <ProfileCard
                email={siteMeta.email}
                openReviewUrl={siteMeta.openReviewUrl}
                qqMail={siteMeta.qqMail}
                schoolUrl={siteMeta.schoolUrl}
                youtubeUrl={siteMeta.youtubeUrl}
              />
            </FadeIn>
          </div>
        </main>
      </div>
    </section>
  )
}
