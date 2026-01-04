import { useState, useEffect } from 'react'

type Direction = 'up' | 'down'

export default function useScrollDirection(threshold = 0) {
  const [scrollDirection, setScrollDirection] = useState<Direction>('up')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) return

      if (scrollY > lastScrollY && scrollY > 70) {
        setScrollDirection('down')
      } else if (scrollY < lastScrollY) {
        setScrollDirection('up')
      }

      setLastScrollY(scrollY > 0 ? scrollY : 0)
    }

    window.addEventListener('scroll', updateScrollDirection)

    return () => {
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [lastScrollY])

  return scrollDirection
}
