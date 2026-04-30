import React from 'react'

interface NavbarProps {
  email: string
  githubUrl: string
  openReviewUrl: string
  theme: 'dark' | 'light'
  toggleTheme: () => void
  youtubeUrl: string
}

export default function Navbar({ email, githubUrl, openReviewUrl, theme, toggleTheme, youtubeUrl }: NavbarProps) {
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
          <a className="nav-link" href={openReviewUrl} target="_blank" rel="noreferrer">
            OpenReview
          </a>
          <a className="nav-link" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="nav-link" href={`mailto:${email}`}>
            Email
          </a>
        </nav>

        <button
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
          className="theme-toggle"
          onClick={toggleTheme}
          type="button"
        >
          <span className="theme-toggle-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
          <span className={`theme-toggle-track ${theme === 'light' ? 'is-light' : ''}`}>
            <span className="theme-toggle-thumb" />
          </span>
        </button>
      </div>
    </header>
  )
}
