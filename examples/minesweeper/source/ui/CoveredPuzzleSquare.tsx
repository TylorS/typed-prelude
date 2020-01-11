import * as React from 'react'
import { classNames } from './classNames'

export function CoveredPuzzleSquare({}: CoveredPuzzleSquareProps) {
  return <section className={classNames('bg-black-80', 'w-100', 'h-100', 'ba', 'b--near-white')} />
}

export type CoveredPuzzleSquareProps = {}
