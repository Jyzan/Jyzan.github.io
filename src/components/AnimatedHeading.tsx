import React, { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
}

export default function AnimatedHeading({ text }: AnimatedHeadingProps) {
  const [start, setStart] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStart(true), 200)
    return () => clearTimeout(t)
  }, [])

  const lines = text.split('\n')
  const charDelay = 30

  return (
    <h1 className="font-normal mb-4 leading-tight" style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, li) => (
        <div key={li}>
          {Array.from(line).map((ch, ci) => {
            const lineLength = line.length
            const delay = 200 + li * lineLength * charDelay + ci * charDelay
            const style: React.CSSProperties = {
              display: 'inline-block',
              transform: start ? 'translateX(0)' : 'translateX(-18px)',
              opacity: start ? 1 : 0,
              transitionProperty: 'opacity, transform',
              transitionDuration: '500ms',
              transitionDelay: `${delay}ms`,
            }

            const char = ch === ' ' ? '\u00A0' : ch
            return (
              <span aria-hidden key={ci} style={style}>
                {char}
              </span>
            )
          })}
        </div>
      ))}
    </h1>
  )
}
