import { Entity } from '../Entity'
import { TimeTrack } from '../TimeTrack/TimeTrack'

export class Task extends Entity {
  _key: string = null
  title: string = ''
  timeTracks: TimeTrack[] = []
  createdAt: Date = null

  constructor (data: Partial<Task> = {}) {
    super()
    Object.assign(this, data)
  }
}
