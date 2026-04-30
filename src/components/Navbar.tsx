import React from 'react'

interface NavbarProps {
  email: string
  githubUrl: string
  youtubeUrl: string
}

export default function Navbar({ email, githubUrl, youtubeUrl }: NavbarProps) {
  return (
    <header className="glass-nav sticky top-4 z-20 h-16 rounded-[22px] px-4 sm:px-5">
      <div className="flex h-full items-center justify-between gap-4">
        <a className="font-display text-2xl font-bold tracking-[-0.03em] text-[color:var(--text-main)]" href="#about">
          Jyzan
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[color:var(--text-muted)] md:flex">
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href={youtubeUrl} target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a className="nav-link" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="nav-link" href={`mailto:${email}`}>
            Email
          </a>
        </nav>

        <a
          className="primary-button px-4 py-2 text-sm sm:px-6"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub Profile
        </a>
      </div>
    </header>
  )
}
