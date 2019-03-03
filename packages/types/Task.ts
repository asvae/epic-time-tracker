export class Task {
  _id: string
  _order: number
  title: string = ''

  constructor (data: Partial<Task> = {}) {
    Object.assign(this, data)
  }
}
