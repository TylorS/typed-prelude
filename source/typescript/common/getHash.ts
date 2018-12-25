export const getHash = () =>
  Math.random()
    .toString(32)
    .slice(6)
