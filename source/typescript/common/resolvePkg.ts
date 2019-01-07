import resolveAsync = require('resolve')

export type ResolveOptions = { basedir: string; extensions: string[] }

export async function resolvePkg(id: string, options: ResolveOptions): Promise<string> {
  return new Promise((resolve, reject) => {
    resolveAsync(id, options, (err, path) => (err ? reject(err) : resolve(path)))
  })
}
