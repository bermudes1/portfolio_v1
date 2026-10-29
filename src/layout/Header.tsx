import { LocalTime } from '../features/clock/LocalTime'
import { useScrolledPast } from '../hooks/useScrolledPast'
import styles from './Header.module.css'

export interface NavItem {
  href: string
  label: string
}

interface HeaderProps {
  monogram: string
  nav: NavItem[]
  location: { label: string; timeZone: string }
}

export function Header({ monogram, nav, location }: HeaderProps) {
  // Sobre o gradiente o cabeçalho fica transparente; depois ganha fundo escuro.
  const solid = useScrolledPast(24)

  return (
    <header className={styles.header} data-solid={solid}>
      <a href="#inicio" className={styles.mark} aria-label="Início">
        {monogram}
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
