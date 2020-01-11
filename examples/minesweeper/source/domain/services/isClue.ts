import { Clue, Square } from '../model'

export const isClue = (square: Square): square is Clue => square.type === 'clue'
