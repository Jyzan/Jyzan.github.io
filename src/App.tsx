import React from 'react'
import Hero from './components/Hero'
import BlogCard from './components/BlogCard'
import FigureCard from './components/FigureCard'
import Footer from './components/Footer'
import RepositoryCard from './components/RepositoryCard'
import ResearchInterestCard from './components/ResearchInterestCard'
import SectionTitle from './components/SectionTitle'
import Timeline from './components/Timeline'
import {
  blogPosts,
  featuredRepositories,
  researchFigures,
  researchInterests,
  researchUpdates,
  siteMeta,
} from './data/siteData'

export default function App() {
  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text-main)]">
      <Hero />
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(19,60,92,0.32),transparent_42%),linear-gradient(180deg,#03111d_0%,#020617_100%)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#020617] via-[#020617]/70 to-transparent" />

        <section className="section-shell">
          <SectionTitle
            description="I study Automation at Shanghai Jiao Tong University and care about research directions that connect intelligent reasoning with action in the real world."
            eyebrow="About Me"
            title="Student, researcher, and creator."
          />
          <div className="section-copy">
            <p>
              My current interests focus on embodied intelligence, AI agents, and the kinds of systems that can perceive,
              reason, and interact beyond narrow demos.
            </p>
            <p>
              Outside research and study, I run a YouTube channel about football short videos. It gives me a creative
              outlet and a way to keep publishing consistently.
            </p>
            <p>
              I&apos;m open to communication, collaboration, and conversations about research, AI, football, and
              interesting projects.
            </p>
          </div>
        </section>

        <section className="section-shell" id="research">
          <SectionTitle
            description="These are the research areas I want this portfolio to grow around over time."
            eyebrow="Research Interests"
            title="What I want to keep exploring."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {researchInterests.map((item) => (
              <ResearchInterestCard key={item.title} description={item.description} title={item.title} />
            ))}
          </div>
        </section>

        <section className="section-shell" id="updates">
          <SectionTitle
            description="A lightweight timeline for ongoing reading, exploration, and project preparation."
            eyebrow="Research Updates"
            title="Current activity and direction."
          />
          <Timeline items={researchUpdates} />
        </section>

        <section className="section-shell" id="figures">
          <SectionTitle
            description="Placeholder slots for future paper figures, research diagrams, and project visuals."
            eyebrow="Selected Research Figures"
            title="Visual material for papers and notes."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {researchFigures.map((figure) => (
              <FigureCard
                key={figure.title}
                description={figure.description}
                href={figure.href}
                linkLabel={figure.linkLabel}
                title={figure.title}
              />
            ))}
          </div>
        </section>

        <section className="section-shell" id="repositories">
          <SectionTitle
            description="Placeholder repository cards for coursework, experiments, and project write-ups."
            eyebrow="Featured Repositories"
            title="Repos I want this homepage to surface clearly."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredRepositories.map((repo) => (
              <RepositoryCard
                key={repo.name}
                description={repo.description}
                href={repo.href}
                name={repo.name}
                tags={repo.tags}
              />
            ))}
          </div>
        </section>

        <section className="section-shell" id="blog">
          <SectionTitle
            description="This section is intentionally structured so it can later be backed by Markdown files, GitHub Issues, or an external CMS."
            eyebrow="Blog"
            title="Notes, reading logs, and project writing."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} description={post.description} meta={post.meta} title={post.title} />
            ))}
          </div>
        </section>

        <section className="section-shell pb-16" id="connect">
          <div className="content-card flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <SectionTitle
                description="Reach out if you want to discuss embodied intelligence, AI agents, engineering work, football, or potential collaboration."
                eyebrow="Contact"
                title="Let&apos;s stay in touch."
              />
            </div>
            <div className="grid gap-4 text-sm text-[color:var(--text-main)] sm:grid-cols-2">
              <a className="contact-chip" href={`mailto:${siteMeta.email}`}>
                {siteMeta.email}
              </a>
              <a className="contact-chip" href={`mailto:${siteMeta.qqMail}`}>
                {siteMeta.qqMail}
              </a>
              <a className="contact-chip" href={siteMeta.openReviewUrl} target="_blank" rel="noreferrer">
                OpenReview Profile
              </a>
              <a className="contact-chip" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
              <a className="contact-chip sm:col-span-2" href={siteMeta.youtubeUrl} target="_blank" rel="noreferrer">
                YouTube: @ManCITEA
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
