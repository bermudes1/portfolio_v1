import { LocalTime } from '../features/clock/LocalTime'
import styles from './Header.module.css'

export interface NavItem {
  href: string
  label: string
}

interface HeaderProps {
  name: string
  nav: NavItem[]
  location: { label: string; timeZone: string }
}

export function Header({ name, nav, location }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a href="#inicio" className={styles.mark}>
        {name}
      </a>
      <nav aria-label="Seções" className={styles.nav}>
        <ul role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <LocalTime label={location.label} timeZone={location.timeZone} className={styles.clock} />
    </header>
  )
}
