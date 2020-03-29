export function arrayBufferToString(buffer: ArrayBuffer) {
  return String.fromCharCode.apply(null, Array.from(new Uint16Array(buffer)))
}
