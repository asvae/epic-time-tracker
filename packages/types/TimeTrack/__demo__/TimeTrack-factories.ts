import { TimeTrack } from '../TimeTrack'
import { startOfDay, addHours } from 'date-fns'

export function createTodayTimeTrack () {
  const start = startOfDay(new Date())

  return new TimeTrack({
    start,
    end: addHours(start, 4),
  })
}
