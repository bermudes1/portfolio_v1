import { Section } from '../components/Section'
import type { Profile } from '../content/types'
import styles from './Contact.module.css'

interface ContactProps {
  contact: Profile['contact']
}

export function Contact({ contact }: ContactProps) {
  return (
    <Section id="contato" index="06" title="Contato">
      <p className={styles.pitch} data-reveal>
        {contact.pitch}
      </p>
      <a href={`mailto:${contact.email}`} className={styles.email} data-reveal>
        {contact.email}
      </a>
      <ul role="list" className={styles.links}>
        {contact.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
              <span className="visually-hidden"> (abre em nova aba)</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
