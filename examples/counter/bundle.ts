import { makeBundle } from '../../tools/makeBundle'

makeBundle({
  cwd: __dirname,
  isServer: true,
  skipTypeCheck: true,
  entry: 'source/server.ts',
}).then(bundle => bundle.completed(proc => proc.start()))
// .then(() => makeBundle({ cwd: __dirname, entry: 'source/client.ts' }))
