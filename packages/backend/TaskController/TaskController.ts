import { Task } from '../../types/Task/Task'
import { Controller } from '../core/Controller'

export class TaskController extends Controller {
  async createTask (task: Task): Promise<Task> {
    const taskCollection = this.db.collection('tasks')
    task.createdAt = new Date()
    await taskCollection.save(task)
    return task
  }

  async updateTask (task: Task): Promise<Task> {
    const taskCollection = this.db.collection('tasks')
    await taskCollection.update(task, {
      title: task.title,
    })
    return task
  }

  async getList (): Promise<Task[]> {
    const taskCollection = this.db.collection('tasks')
    const cursor = await taskCollection.all()
    const tasks = await cursor.all()
    return tasks as Task[]
  }

  async removeTask (task: Task): Promise<Task> {
    const taskCollection = this.db.collection('tasks')
    await taskCollection.remove(task)
    return task
  }
}
