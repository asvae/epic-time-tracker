import http from "http"
import { default as socketIo, Socket } from 'socket.io'
import { Action } from '../../frontend/src/api/Action'
import { Task } from '../../types/Task'
import { TaskController } from '../TaskController/TaskController'
import {
  ServerResponseType,
  TaskCreated,
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
    socket.on(Action.CREATE_TASK, async (task: Task) => {
      const taskCreated = await new TaskController(db, socket).createTask(task)
      socket.emit(ServerResponseType.TASK_CREATED, new TaskCreated(taskCreated))
    })
  })

  server.listen(3000)
  console.log('Running a Socket.io at localhost:3000/connection')
}
