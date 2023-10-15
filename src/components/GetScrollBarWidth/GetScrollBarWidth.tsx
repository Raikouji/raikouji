'use client'
import React from 'react'

function GetScrollBarWidth() {
  React.useEffect(() => {
    const doc = document.documentElement // html tag
    if (window.innerWidth !== doc.clientWidth) {
      doc.classList.add('has-scrollbar')
      doc.style.setProperty(
        '--scroll-bar-width',
        `${window.innerWidth - doc.clientWidth}px`,
      )
    }
  }, [])

  return <></>
}

export default GetScrollBarWidth
