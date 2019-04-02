import { Entity } from './Entity'
import { Task } from './Task'

export class TimeTrack extends Entity {
  task: Task = null
  start: Date = null
  end: Date = null

  constructor (data: Partial<TimeTrack> = {}) {
    super()
    Object.assign(this, data)
  }

  static createAtNow () {
    return new TimeTrack({
      start: new Date(),
      end: new Date(),
    })
  }
}
