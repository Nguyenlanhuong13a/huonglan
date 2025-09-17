'use client'

import { useEffect } from 'react'

export function PreventZoom() {
  useEffect(() => {
    // Add additional meta tags to control zoom
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta')
        meta.name = name
        meta.content = content
        document.head.appendChild(meta)
      }
    }

    // Allow zoom but limit the range
    addMetaTag('viewport', 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=3, user-scalable=yes')
    
    // Additional iOS specific meta tags
    addMetaTag('format-detection', 'telephone=no')
    addMetaTag('apple-mobile-web-app-capable', 'yes')
    addMetaTag('apple-mobile-web-app-status-bar-style', 'default')
    addMetaTag('apple-mobile-web-app-title', 'Huong Lan Restaurant')

    // Prevent excessive zoom out (below 100%)
    const preventExcessiveZoomOut = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const distance = Math.sqrt(
          Math.pow(touch2.clientX - touch1.clientX, 2) + 
          Math.pow(touch2.clientY - touch1.clientY, 2)
        )
        
        // If pinch gesture is trying to zoom out too much, prevent it
        if (distance < 50) { // Threshold for zoom out
          e.preventDefault()
        }
      }
    }

    // Add event listener for pinch gestures
    document.addEventListener('touchmove', preventExcessiveZoomOut, { passive: false })

    // Cleanup
    return () => {
      document.removeEventListener('touchmove', preventExcessiveZoomOut)
    }
  }, [])

  return null
}
