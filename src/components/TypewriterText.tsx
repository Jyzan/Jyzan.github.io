import React, { useEffect, useState } from 'react'

interface TypewriterTextProps {
  text: string
  className?: string
  delayMs?: number
  speedMs?: number
}

export default function TypewriterText({
  text,
  className = '',
  delayMs = 250,
  speedMs = 55,
}: TypewriterTextProps) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    let intervalId: number | undefined

    const startTimer = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleCount((current) => {
          if (current >= text.length) {
            if (intervalId !== undefined) {
              window.clearInterval(intervalId)
            }
            return current
          }
          return current + 1
        })
      }, speedMs)
    }, delayMs)

    return () => {
      window.clearTimeout(startTimer)
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
      }
    }
  }, [delayMs, speedMs, text])

  return (
    <span className={`typewriter-line ${className}`.trim()}>
      {text.slice(0, visibleCount)}
      <span className="typewriter-caret" aria-hidden>
        |
      </span>
    </span>
  )
}
