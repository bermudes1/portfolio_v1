import { useEffect, useState } from 'react'

/** true depois que a página rolou mais que `offset` pixels. */
export function useScrolledPast(offset: number): boolean {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const update = () => setPast(window.scrollY > offset)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [offset])

  return past
}
