import { Icon } from '../components/Icon'
import { Section } from '../components/Section'
import type { Profile } from '../content/types'
import styles from './Skills.module.css'

interface SkillsProps {
  profile: Pick<Profile, 'skills' | 'certifications'>
}

export function Skills({ profile }: SkillsProps) {
  return (
    <Section id="competencias" index="05" title="competências">
      <ul role="list" className={styles.grid}>
        {profile.skills.map((group) => (
          <li key={group.title} className={styles.card} data-reveal>
            <Icon name={group.icon} className={styles.icon} />
            <h3 className={styles.title}>{group.title}</h3>
            <ul role="list" className={styles.items}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <div className={styles.certs} data-reveal>
        <h3 className={styles.certsTitle}>Certificados</h3>
        <ul role="list">
          {profile.certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
