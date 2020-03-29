export function stringToArrayBuffer(str: string): ArrayBuffer {
  const buffer = new ArrayBuffer(str.length * 2) // 2 bytes for each char
  const view = new Uint16Array(buffer)

  for (let i = 0; i < str.length; i++) {
    view[i] = str.charCodeAt(i)
  }

  return buffer
}
