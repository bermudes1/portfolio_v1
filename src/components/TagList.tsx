import styles from './TagList.module.css'

interface TagListProps {
  items: string[]
  label: string
}

export function TagList({ items, label }: TagListProps) {
  return (
    <ul role="list" aria-label={label} className={styles.list}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
