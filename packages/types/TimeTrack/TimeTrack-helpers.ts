import { TimeTrack } from './TimeTrack'
import {startOfDay, endOfDay, isBefore, differenceInMilliseconds} from 'date-fns'

/**
 * Get the time track distance in day.
 * F.i. if you worked 2 hours yesterday and 1 hour tomorrow in one session
 * the function will give 1 hour distance (in ms)
 */
export function timeInDay(timeTrack: TimeTrack, date: Date): number {
  const dayStart = startOfDay(date)
  const dayEnd = endOfDay(date)
  let start = timeTrack.start
  let end = timeTrack.end

  if (isBefore(start, dayStart)) {
    start = dayStart
  }

  if (isBefore(dayEnd, end)) {
    end = dayEnd
  }

  return differenceInMilliseconds(end, start)
}
