import { format, formatDistance, addMilliseconds, differenceInCalendarDays, subDays } from 'date-fns'

export function formatDate (date: Date): string {
  return format(date, 'h:mm')
}

export function readableInterval (intervalMs: number): string {
  const start = new Date()
  return formatDistance(start, addMilliseconds(start, intervalMs))
}

export function readableDistanceInDays (date: Date): string {
  const now = new Date()
  const dayDifference = differenceInCalendarDays(date, now)
  return formatDistance(now, subDays(now, dayDifference), {addSuffix: true})
}
