import rimraf from 'rimraf'

export async function deleteDirectory(path: string) {
  return new Promise<void>((resolve, reject) => {
    rimraf(path, err => (err ? reject(err) : resolve()))
  })
}
