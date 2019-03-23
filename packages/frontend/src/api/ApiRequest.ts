import nanoid from 'nanoid'

export class ApiRequest {
  readonly id = nanoid()
  action: 'string'
  body: any = ''
}
