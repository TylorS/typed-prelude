export function preferEsModule(pkg: any): any {
  const m = pkg.module
  const jsnext = pkg['jsnext:main']

  if (m) {
    pkg.main = m
  } else if (jsnext) {
    pkg.main = jsnext
  }

  return pkg
}
