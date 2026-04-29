import React from 'react'
import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

export default function Hero() {
  const heading = 'Hi, I am Jyzan.\nA student building with code.'

  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/blue_moon.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <header className="relative z-10 px-6 md:px-12 lg:px-16 pt-6">
        <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          <div className="text-2xl font-semibold tracking-tight">Jyzan</div>
          <nav className="hidden md:flex gap-8 text-sm text-gray-200">
            <a className="hover:text-gray-300" href="#about">About</a>
            <a className="hover:text-gray-300" href="#projects">Projects</a>
            <a className="hover:text-gray-300" href="#skills">Skills</a>
            <a className="hover:text-gray-300" href="#contact">Contact</a>
          </nav>
          <div>
            <a
              className="inline-flex bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100"
              href="#contact"
            >
              Say Hello
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-6 md:px-12 lg:px-16 flex flex-col min-h-[calc(100vh-4rem)]">
        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            <div id="about">
              <AnimatedHeading text={heading} />
              <FadeIn delay={800} duration={1000} className="text-base md:text-lg text-gray-300 mb-5">
                I am a student interested in software, design, and building practical projects that turn ideas into
                working products.
              </FadeIn>

              <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
                <a
                  className="inline-flex bg-white text-black px-8 py-3 rounded-lg font-medium"
                  href="#projects"
                >
                  View Projects
                </a>
                <a
                  className="inline-flex liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
                  href="#contact"
                >
                  Contact Me
                </a>
              </FadeIn>
            </div>

            <div className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end" id="skills">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-5 rounded-xl max-w-md">
                  <div className="text-xs uppercase tracking-[0.18em] text-gray-300 mb-3">Student Profile</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-light">Learning, shipping, and improving one project at a time.</div>
                  <div className="mt-4 text-sm text-gray-300 space-y-1" id="projects">
                    <p>Focus: Frontend, web development, and creative coding</p>
                    <p>Current goal: Build a portfolio that reflects real work and steady growth</p>
                  </div>
                  <div className="mt-4 text-sm text-gray-200" id="contact">
                    Email: you@example.com
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
