import { fusebox, pluginReplace } from 'fuse-box'
import { join } from 'path'

const sourceDirectory = join(__dirname, 'source')

const client = fusebox({
  entry: join(sourceDirectory, 'client.ts'),
  devServer: true,
  hmr: true,
  target: 'browser',
  webIndex: {
    enabled: true,
    template: join(sourceDirectory, 'index.html'),
  },
  plugins: [
    pluginReplace({
      [`typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined'`]: true,
      [`typeof window !== 'undefined' && typeof document !== 'undefined'`]: true,
      [`typeof crypto !== 'undefined'`]: true,
    }),
  ],
})

client.runDev().catch(error => {
  console.error(error)
  process.exit(1)
})
