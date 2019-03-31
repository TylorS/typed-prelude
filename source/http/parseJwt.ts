export function parseJwt<A>(token: string): A {
  return JSON.parse(
    b64DecodeUnicode(
      token
        .split('.')[1]
        .replace('-', '+')
        .replace('_', '/'),
    ),
  )
}

function b64DecodeUnicode(token: string) {
  return decodeURIComponent(
    Array.prototype.map
      .call(atob(token), (c: string) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join(''),
  )
}
