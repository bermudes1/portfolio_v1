import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import type { Profile } from '../content/types'
import styles from './Hero.module.css'

interface HeroProps {
  profile: Pick<Profile, 'name' | 'greeting' | 'headline' | 'intro' | 'status' | 'heroImage'>
}

export function Hero({ profile }: HeroProps) {
  const [first, ...rest] = profile.name.toLowerCase().split(' ')
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .from(`.${styles.photo}`, { yPercent: 6, autoAlpha: 0, duration: 1.1 })
          .from(`.${styles.line}`, { yPercent: 40, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, 0.1)
          .from(`.${styles.fade}`, { y: 16, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.45)
      })
    },
    { scope: root },
  )

  return (
    <section ref={root} id="inicio" aria-label="Apresentação" className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <img
        className={styles.photo}
        src={profile.heroImage.src}
        alt={profile.heroImage.alt}
        width={523}
        height={903}
        fetchPriority="high"
      />

      <div className={styles.content}>
        <p className={`${styles.greeting} ${styles.fade}`}>{profile.greeting}</p>
        <h1 className={styles.name}>
          <span className={styles.line}>{first}</span>{' '}
          <span className={styles.line}>{rest.join(' ')}</span>
        </h1>

        <div className={styles.details}>
          <p className={`${styles.headline} ${styles.fade}`}>{profile.headline}</p>
          <p className={`${styles.intro} ${styles.fade}`}>{profile.intro}</p>
          <div className={`${styles.actions} ${styles.fade}`}>
            <a href="#projetos" className={styles.primary}>
              Ver projetos
            </a>
            <a href="#contato" className={styles.secondary}>
              Vamos conversar
            </a>
          </div>
          <p className={`${styles.status} ${styles.fade}`}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.status}
          </p>
        </div>
      </div>
    </section>
  )
}
