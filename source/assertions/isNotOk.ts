export const isNotOk = (bool: boolean) => {
  if (bool) {
    throw new Error('Value was expected to be false')
  }

  return bool
}
