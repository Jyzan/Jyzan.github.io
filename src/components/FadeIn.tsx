import React, { useEffect, useState } from 'react'

interface FadeInProps {
  delay?: number
  duration?: number
  children: React.ReactNode
  className?: string
}

export default function FadeIn({ delay = 0, duration = 500, children, className = '' }: FadeInProps) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
