import { Entity } from './Entity'
import { Task } from './Task'

export class TimeTrack extends Entity {
  title: string = ''
  task: Task = null

  constructor (data: Partial<TimeTrack> = {}) {
    super()
    Object.assign(this, data)
  }
}
