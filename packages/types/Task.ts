import { Entity } from './Entity'

export class Task extends Entity {
  _id: string = null
  _order: number = null
  title: string = ''

  constructor (data: Partial<Task> = {}) {
    super()
    Object.assign(this, data)
  }
}
