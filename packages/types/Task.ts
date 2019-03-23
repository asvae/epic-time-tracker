import { Entity } from './Entity'

export class Task extends Entity {
  _key: string = null
  title: string = ''
  createdAt: Date = null

  constructor (data: Partial<Task> = {}) {
    super()
    Object.assign(this, data)
  }
}
