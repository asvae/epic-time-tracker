import { Task } from '../../../types/Task'

export enum ServerResponseType {
  TASK_CREATED = 'TASK_CREATED',
  TASK_UPDATED = 'TASK_UPDATED',
  TASK_REMOVED = 'TASK_REMOVED',
  TASK_LIST = 'TASK_LIST',
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

export class TaskUpdated extends ServerResponse {
  readonly type = ServerResponseType.TASK_UPDATED
  readonly body: Task
}

export class TaskRemoved extends ServerResponse {
  readonly type = ServerResponseType.TASK_REMOVED
  readonly body: Task
}

export class TaskList extends ServerResponse {
  readonly type = ServerResponseType.TASK_LIST
  readonly body: Task[]
}
