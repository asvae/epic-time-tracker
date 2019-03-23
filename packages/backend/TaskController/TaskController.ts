import { Task } from '../../types/Task'
import { Controller } from '../core/Controller'

export class TaskController extends Controller {
  async createTask (task: Task): Promise<Task> {
    const taskCollection = this.db.collection('tasks')
    task.createdAt = new Date()
    await taskCollection.save(task.createdAt)
    return task
  }
  async updateTask (task: Task): Promise<Task> {
    const taskCollection = this.db.collection('tasks')
    await taskCollection.save(task.createdAt)
    return task
  }
  async removeTask (task: Task): Promise<Task> {
    const taskCollection = this.db.collection('tasks')
    await taskCollection.save(task.createdAt)
    return task
  }
}
