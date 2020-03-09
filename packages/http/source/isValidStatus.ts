import { HttpResponse } from './types'

export function isValidStatus({ status }: HttpResponse<any>) {
  return status >= 200 && status < 300
}
