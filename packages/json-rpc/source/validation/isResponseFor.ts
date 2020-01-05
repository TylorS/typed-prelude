import { Request, Response } from '../protocol'

export function isResponseFor(request: Request<any, any>, response: Response<any, any>) {
  return response.id === request.id
}
