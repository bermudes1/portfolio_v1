import { useLocalTime } from './useLocalTime'

interface LocalTimeProps {
  label: string
  timeZone: string
  className?: string
}

export function LocalTime({ label, timeZone, className }: LocalTimeProps) {
  const time = useLocalTime(timeZone)

  return (
    <p className={className}>
      {label} <time>{time}</time>
    </p>
  )
}
