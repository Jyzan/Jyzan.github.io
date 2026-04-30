import React from 'react'
import Hero from './components/Hero'
import InfoSection from './components/InfoSection'
import ResearchGrid from './components/ResearchGrid'
import ProjectsGrid from './components/ProjectsGrid'
import ContactStrip from './components/ContactStrip'

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text-main)]">
      <Hero />
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(19,60,92,0.32),transparent_42%),linear-gradient(180deg,#03111d_0%,#020617_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020617] via-[#020617]/70 to-transparent" />

        <InfoSection eyebrow="About Me" title="Student, researcher, and creator.">
          <p>
            I study Automation at Shanghai Jiao Tong University and spend a lot of time thinking about how software and
            intelligent systems can move beyond demos into practical, grounded work.
          </p>
          <p>
            Alongside research and coursework, I run a YouTube channel focused on football shorts. It keeps me close to
            storytelling, editing, and sharing ideas in a more lightweight format.
          </p>
        </InfoSection>

        <ResearchGrid />
        <ProjectsGrid />

        <InfoSection eyebrow="YouTube / Football Channel" title="@ManCITEA">
          <p>
            My channel is where I publish short football-related videos. It is a space for quick ideas, consistent
            output, and connecting with people who enjoy the game and short-form content.
          </p>
          <p>
            The mix of engineering, research, and football content is intentional. I like building in one area and
            communicating in another.
          </p>
          <p className="pt-2">
            <a
              className="inline-flex items-center text-[color:var(--accent)] transition hover:text-[color:var(--accent-strong)]"
              href="https://www.youtube.com/@ManCITEA"
              target="_blank"
              rel="noreferrer"
            >
              Visit the channel
            </a>
          </p>
        </InfoSection>

        <ContactStrip
          email="jyz366200@gmail.com"
          qqMail="3821355430@qq.com"
          youtubeUrl="https://www.youtube.com/@ManCITEA"
        />
      </div>
    </div>
  )
}
