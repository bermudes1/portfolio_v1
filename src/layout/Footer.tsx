import styles from './Footer.module.css'

const YEAR = new Date().getFullYear()

interface FooterProps {
  name: string
  repositoryUrl: string
}

export function Footer({ name, repositoryUrl }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p>
        {name}, {YEAR}
      </p>
      <p>
        Código aberto no{' '}
        <a href={repositoryUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
    </footer>
  )
}
