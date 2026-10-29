import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import type { Profile } from '../content/types'
import styles from './Hero.module.css'

interface HeroProps {
  profile: Pick<Profile, 'name' | 'role' | 'status' | 'intro'>
}

export function Hero({ profile }: HeroProps) {
  const [first, ...rest] = profile.name.split(' ')
  const root = useRef<HTMLElement>(null)

  // Entrada do nome ao carregar a página: cada linha sobe um pouco, uma depois da outra.
  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(`.${styles.line}`, {
          yPercent: 35,
          autoAlpha: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.1,
        })
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="inicio" aria-label="Apresentação" className={styles.hero}>
      <p className={styles.role} data-reveal>
        {profile.role}
      </p>
      <h1 className={styles.name}>
        <span className={styles.line}>{first}</span>{' '}
        <span className={styles.line}>{rest.join(' ')}</span>
      </h1>
      <div className={styles.footer}>
        <p className={styles.status}>
          <span className={styles.dot} aria-hidden="true" />
          {profile.status}
        </p>
        <p className={styles.intro} data-reveal>
          {profile.intro}
        </p>
      </div>
    </section>
  )
}
