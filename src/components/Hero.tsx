import React from 'react'
import AnimatedHeading from './AnimatedHeading'
import FadeIn from './FadeIn'

export default function Hero() {
  const heading = 'Hi, I am Jyzan.\nAutomation undergraduate.'
  const githubUrl = 'https://github.com/Jyzan'
  const youtubeUrl = 'https://www.youtube.com/@ManCITEA'
  const email = 'jyz366200@gmail.com'
  const qqMail = '3821355430@qq.com'
  const schoolUrl = 'https://www.sjtu.edu.cn/'

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
            <a className="hover:text-gray-300" href={youtubeUrl} target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a className="hover:text-gray-300" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-gray-300" href={`mailto:${email}`}>
              Email
            </a>
          </nav>
          <div>
            <a
              className="inline-flex bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-6 md:px-12 lg:px-16 flex flex-col min-h-[calc(100vh-4rem)]">
        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            <div id="about">
              <AnimatedHeading text={heading} />
              <FadeIn delay={800} duration={1000} className="max-w-3xl text-base md:text-lg text-gray-200 mb-5 space-y-4">
                <p>
                  I&apos;m an undergraduate student at{' '}
                  <a className="text-white underline underline-offset-4 hover:text-gray-300" href={schoolUrl} target="_blank" rel="noreferrer">
                    Shanghai Jiao Tong University
                  </a>
                  , majoring in Automation.
                </p>
                <p>
                  My research interests focus on embodied intelligence and AI agents. I am passionate about exploring
                  how intelligent systems can perceive, reason, and interact with the real world.
                </p>
                <p>
                  Outside of research and study, I run my own YouTube channel, where I mainly create short videos about
                  football. I enjoy sharing ideas, learning from others, and connecting with people who have similar
                  interests.
                </p>
                <p>
                  Feel free to reach out if you would like to discuss research, AI, football, or anything interesting.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000} className="flex flex-wrap gap-4">
                <a
                  className="inline-flex bg-white text-black px-8 py-3 rounded-lg font-medium"
                  href={youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube Channel
                </a>
                <a
                  className="inline-flex liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition"
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Me
                </a>
              </FadeIn>
            </div>

            <div className="mt-8 lg:mt-0 flex items-end justify-start lg:justify-end" id="skills">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-5 rounded-xl max-w-md">
                  <div className="text-xs uppercase tracking-[0.18em] text-gray-300 mb-3">Student Profile</div>
                  <div className="text-lg md:text-xl lg:text-2xl font-light">
                    Embodied intelligence, AI agents, and student-built projects.
                  </div>
                  <div className="mt-4 text-sm text-gray-300 space-y-1" id="projects">
                    <p>School: Shanghai Jiao Tong University</p>
                    <p>Major: Automation</p>
                    <p>Research: Embodied intelligence and AI agents</p>
                  </div>
                  <div className="mt-4 text-sm text-gray-200" id="contact">
                    <p>Email: {email}</p>
                    <p className="mt-1">QQ: {qqMail}</p>
                    <p className="mt-1">
                      YouTube:{' '}
                      <a className="hover:text-white" href={youtubeUrl} target="_blank" rel="noreferrer">
                        @ManCITEA
                      </a>
                    </p>
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
