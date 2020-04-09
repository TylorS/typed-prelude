/**
 * Creates a promise that waits a given number of milliseconds.
 * @param ms :: number
 * @returns :: Promise void
 */
export const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms))
