export const ok = (bool: boolean) => {
  if (!bool) {
    throw new Error('Value is not true')
  }

  return bool
}
