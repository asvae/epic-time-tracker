import { Task } from '../Task'
import { generateId } from '../../helpers/id-helpers'
import { createTodayTimeTrack } from '../../TimeTrack/__demo__/TimeTrack-factories'

export function getTask (): Task {
  const id = generateId()

  return new Task({
    _key: id,
    title: `Task ${id}`,
    timeTracks: [],
    createdAt: new Date(),
  })
}

export function getTaskWithLongTitle (): Task {
  const task = getTask()
  task.title = `Title long long long long long long long long long long long long ${task._key}`
  return task
}

export function getTaskWithTimeTrack (): Task {
  const task = getTask()
  task.timeTracks = [createTodayTimeTrack()]
  return task
}

