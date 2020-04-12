import { or } from '@typed/logic'
import { Message } from '../../model'
import { isBatchRequest } from './isBatchRequest'
import { isBatchResponse } from './isBatchResponse'
import { isNotification } from './isNotification'
import { isRequest } from './isRequest'
import { isResponse } from './isResponse'

export const isMessage: (x: unknown) => x is Message = or(
  isNotification,
  or(isRequest, or(isResponse, or(isBatchRequest, isBatchResponse))),
)
