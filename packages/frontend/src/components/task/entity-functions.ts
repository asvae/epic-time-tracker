import nanoid from 'nanoid'
import { Entity } from '../../../../types/Entity'

export function prepareEntity<T extends Entity> (entity: T): T {
  entity._id = nanoid()
  return entity
}
