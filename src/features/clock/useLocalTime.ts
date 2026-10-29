import { useEffect, useState } from 'react'
import { formatTime } from './formatTime'

/** Hora atual no fuso informado, atualizada na virada de cada minuto. */
export function useLocalTime(timeZone: string): string {
  const [time, setTime] = useState(() => formatTime(new Date(), timeZone))

  useEffect(() => {
    let timer: number

    const tick = () => {
      const now = new Date()
      setTime(formatTime(now, timeZone))
      timer = window.setTimeout(tick, 60_000 - (now.getTime() % 60_000))
    }

    tick()
    return () => window.clearTimeout(timer)
  }, [timeZone])

  return time
}
