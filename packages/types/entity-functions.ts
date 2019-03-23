import nanoid from 'nanoid'
import { Entity } from './Entity'

export function prepareEntity<T extends Entity> (entity: T): T {
  entity._key = nanoid()
  return entity
}
