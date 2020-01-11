import * as React from 'react'
import Flagged from './flagged.png'

export function PuzzleFlag({}: PuzzleFlagProps) {
  return <img src={Flagged} alt="Flagged" />
}

export type PuzzleFlagProps = {}
