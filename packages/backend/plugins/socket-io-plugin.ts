import http from 'http'
import { default as socketIo, Socket } from 'socket.io'
import { Action } from '../../frontend/src/api/Action'
import { Task } from '../../types/Task/Task'
import { TaskController } from '../TaskController/TaskController'
import {
  ServerResponseType,
  TaskCreated,
  TaskUpdated,
  TaskRemoved,
  TaskList,
} from '../../frontend/src/api/ServerResponce'
import { Database } from 'arangojs'
import { Express } from 'express'

const db = new Database()
db.useDatabase('epic-time-tracker')

export const socketIoPlugin = (app: Express) => {
  const server = http.createServer(app)
  const io = socketIo(server)
  io.origins('*:*')
  io.on('connection', (socket: Socket) => {
    socket.on(Action.TASK_CREATE, async (task: Task) => {
      const taskCreated = await new TaskController(db, socket).createTask(task)
      socket.emit(ServerResponseType.TASK_CREATED, new TaskCreated(taskCreated))
    })
    socket.on(Action.TASK_UPDATE, async (task: Task) => {
      const taskUpdated = await new TaskController(db, socket).updateTask(task)
      socket.emit(ServerResponseType.TASK_UPDATED, new TaskUpdated(taskUpdated))
    })
    socket.on(Action.TASK_REMOVE, async (task: Task) => {
      const taskRemoved = await new TaskController(db, socket).removeTask(task)
      socket.emit(ServerResponseType.TASK_REMOVED, new TaskRemoved(taskRemoved))
    })
    socket.on(Action.TASK_LIST, async () => {
      const taskList = await new TaskController(db, socket).getList()
      socket.emit(ServerResponseType.TASK_LIST, new TaskList(taskList))
    })
  })

  server.listen(3000)
  console.log('Running a Socket.io at localhost:3000/connection')
}
