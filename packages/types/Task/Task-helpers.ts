import { Task } from './Task'
import { isSameDay, formatRelative } from 'date-fns'
import { timeInDay } from '../TimeTrack/TimeTrack-helpers'
import {
  readableInterval,
  readableDistanceInDays,
} from '../helpers/date-helpers'

export function getLastDayRelativeReadable (task: Task): string {
  const lastDayTrack = getLastDayTrack(task)
  console.log('lastDayTrack', lastDayTrack)
  return readableDistanceInDays(lastDayTrack)
}

export function getLastDayTrack (task: Task): Date {
  if (!task.timeTracks.length) {
    throw new Error(`No time tracks for task "${task.title}" (${task._key})`)
  }

  return task.timeTracks[0].end
}

export function getLastDayTimeReadable (task: Task): string {
  const lastDayTrack = getLastDayTrack(task)
  const timeMs = task.timeTracks
    .filter(timeTrack => isSameDay(lastDayTrack, timeTrack.end))
    .reduce((previous: number, current) => {
      return timeInDay(current, lastDayTrack)
    }, 0)
  return readableInterval(timeMs)
}
