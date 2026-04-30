import React from 'react'
import { siteMeta } from '../data/siteData'

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[1280px] px-5 pb-10 pt-12 text-sm text-[color:var(--text-muted)] sm:px-6 lg:px-16">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
        <p>{siteMeta.name} • Personal research portfolio</p>
        <div className="flex flex-wrap gap-4">
          <a className="hover:text-[color:var(--accent)]" href={siteMeta.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-[color:var(--accent)]" href={siteMeta.openReviewUrl} target="_blank" rel="noreferrer">
            OpenReview
          </a>
          <a className="hover:text-[color:var(--accent)]" href={siteMeta.youtubeUrl} target="_blank" rel="noreferrer">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}
