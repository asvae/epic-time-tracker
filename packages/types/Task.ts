export class Task {
  _id: string = null
  _order: number = null
  title: string = ''

  constructor (data: Partial<Task> = {}) {
    Object.assign(this, data)
  }
}
