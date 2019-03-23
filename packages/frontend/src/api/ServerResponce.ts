import { Task } from '../../../types/Task'

export enum ServerResponseType {
  TASK_CREATED = 'TASK_CREATED'
}

export class ServerResponse {
  readonly type: ServerResponseType
  constructor (public body: any) {
  }
}

export class TaskCreated extends ServerResponse {
  readonly type = ServerResponseType.TASK_CREATED
  readonly body: Task
}
