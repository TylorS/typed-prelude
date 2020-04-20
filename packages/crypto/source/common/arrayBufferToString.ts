export function arrayBufferToString(buffer: ArrayBuffer) {
  return String.fromCharCode.call(null, ...new Uint16Array(buffer))
}
