import type { Profile } from '../content/types'
import styles from './Contact.module.css'

interface ContactProps {
  contact: Profile['contact']
}

export function Contact({ contact }: ContactProps) {
  return (
    <section id="contato" aria-labelledby="contato-title" className={styles.wrapper}>
      <div className={styles.panel} data-reveal>
        <p className={styles.index}>06</p>
        <h2 id="contato-title" className={styles.title}>
          vamos conversar.
        </h2>
        <p className={styles.pitch}>{contact.pitch}</p>
        <a href={`mailto:${contact.email}`} className={styles.email}>
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
      </div>
    </section>
  )
}
