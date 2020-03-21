// Capable of deriving a random integer between a min and max
export interface RandomIntEnv {
  readonly floor: typeof Math.floor
  readonly round: typeof Math.round
  readonly random: typeof Math.random
}
