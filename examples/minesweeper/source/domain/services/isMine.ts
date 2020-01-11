import { Mine, Square } from '../model'

export const isMine = (square: Square): square is Mine => square.type === 'mine'
