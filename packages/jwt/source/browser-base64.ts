const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

export function encode(input: string) {
  let output = ''
  // tslint:disable-next-line:one-variable-per-declaration
  let chr1, chr2, chr3, enc1, enc2, enc3, enc4
  let i = 0

  input = utf8Encode(input)

  while (i < input.length) {
    chr1 = input.charCodeAt(i++)
    chr2 = input.charCodeAt(i++)
    chr3 = input.charCodeAt(i++)

    enc1 = chr1 >> 2
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
    enc4 = chr3 & 63

    if (isNaN(chr2)) {
      enc3 = enc4 = 64
    } else if (isNaN(chr3)) {
      enc4 = 64
    }

    output = output + KEYS.charAt(enc1) + KEYS.charAt(enc2) + KEYS.charAt(enc3) + KEYS.charAt(enc4)
  }

  return output
}

export function decode(input: string) {
  let output = ''
  // tslint:disable-next-line:one-variable-per-declaration
  let chr1, chr2, chr3
  // tslint:disable-next-line:one-variable-per-declaration
  let enc1, enc2, enc3, enc4

  let i = 0

  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')

  while (i < input.length) {
    enc1 = KEYS.indexOf(input.charAt(i++))
    enc2 = KEYS.indexOf(input.charAt(i++))
    enc3 = KEYS.indexOf(input.charAt(i++))
    enc4 = KEYS.indexOf(input.charAt(i++))

    chr1 = (enc1 << 2) | (enc2 >> 4)
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
    chr3 = ((enc3 & 3) << 6) | enc4

    output = output + String.fromCharCode(chr1)

    if (enc3 !== 64) {
      output = output + String.fromCharCode(chr2)
    }

    if (enc4 !== 64) {
      output = output + String.fromCharCode(chr3)
    }
  }

  return utf8Decode(output)
}

function utf8Encode(input: string) {
  input = input.replace(/\r\n/g, '\n')

  let utfText = ''

  for (let n = 0; n < input.length; n++) {
    const c = input.charCodeAt(n)

    if (c < 128) {
      utfText += String.fromCharCode(c)
    } else if (c > 127 && c < 2048) {
      utfText += String.fromCharCode((c >> 6) | 192)
      utfText += String.fromCharCode((c & 63) | 128)
    } else {
      utfText += String.fromCharCode((c >> 12) | 224)
      utfText += String.fromCharCode(((c >> 6) & 63) | 128)
      utfText += String.fromCharCode((c & 63) | 128)
    }
  }

  return utfText
}

function utf8Decode(utfText: string) {
  let str = ''
  let i = 0
  // tslint:disable-next-line:one-variable-per-declaration
  let c1, c2
  let c = (c1 = 0)

  while (i < utfText.length) {
    c = utfText.charCodeAt(i)

    if (c < 128) {
      str += String.fromCharCode(c)

      i++
    } else if (c > 191 && c < 224) {
      c1 = utfText.charCodeAt(i + 1)

      str += String.fromCharCode(((c & 31) << 6) | (c1 & 63))

      i += 2
    } else {
      c1 = utfText.charCodeAt(i + 1)

      c2 = utfText.charCodeAt(i + 2)

      str += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63))

      i += 3
    }
  }

  return str
}
