export function arrayBufferToString(buffer: ArrayBuffer) {
  return String.fromCodePoint.call(null, ...new Uint16Array(buffer))
}
