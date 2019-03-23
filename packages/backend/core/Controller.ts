import { Database } from 'arangojs'
import { Socket } from 'socket.io'

export class Controller  {
  constructor (public db: Database, public socket: Socket) {
    
  }
}
