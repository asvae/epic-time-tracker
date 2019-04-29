import { Database, aql } from 'arangojs'
import { Task } from '../../types/Task/Task'
import { prepareEntity } from '../../types/entity-functions'

const DB_NAME = 'epic-time-tracker'

async function databaseExists(db: Database, name: string): Promise<boolean> {
  const databases = await db.listDatabases()
  return databases.includes(name)
}

async function reCreateDatabase(db: Database, name: string) {
  if (await databaseExists(db, name)) {
    await db.dropDatabase(name)
  }
  await db.createDatabase(name)
}

export const db = new Database()

;(async function() {
  await reCreateDatabase(db, DB_NAME)
  db.useDatabase(DB_NAME)
  const taskCollection = db.collection('tasks')
  await taskCollection.create()
  await taskCollection.save(prepareEntity(new Task({
    title: 'Test task',
    createdAt: new Date(),
  })))
})()


