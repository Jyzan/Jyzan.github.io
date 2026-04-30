import React from 'react'

interface LinkButtonProps {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
  external?: boolean
  className?: string
}

export default function LinkButton({
  href,
  label,
  variant = 'secondary',
  external = false,
  className = '',
}: LinkButtonProps) {
  const baseClass = variant === 'primary' ? 'primary-button' : 'secondary-button'

  return (
    <a
      className={`${baseClass} ${className}`.trim()}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
    >
      {label}
    </a>
  )
}
