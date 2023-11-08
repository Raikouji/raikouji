'use client'
import React from 'react'

function GetScrollBarWidth({ children }: { children: React.ReactNode }) {
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight)
  React.useEffect(() => {
    const doc = document.documentElement // html tag
    if (window.innerWidth !== doc.clientWidth) {
      doc.style.setProperty(
        '--scroll-bar-width',
        `${window.innerWidth - doc.clientWidth}px`,
      )
    }
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight)
    })
  }, [windowHeight])

  return <>{children}</>
}

export default GetScrollBarWidth
