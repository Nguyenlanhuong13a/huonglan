'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animationType?: 'gentle-slide-up' | 'gentle-scale' | 'image-reveal' | 'text-slide-in' | 'content-fade-in'
  delay?: number
  threshold?: number
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  animationType = 'gentle-slide-up',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay, threshold])

  return (
    <div 
      ref={ref}
      className={`${animationType} ${isVisible ? 'animate' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
