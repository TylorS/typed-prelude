import { fusebox, pluginReplace } from 'fuse-box'
import { join } from 'path'

const sourceDirectory = join(__dirname, 'source')
const isProduction = process.env.NODE_ENV === 'production'

const client = fusebox({
  entry: join(sourceDirectory, 'client.tsx'),
  devServer: !isProduction,
  hmr: !isProduction,
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

bundle().catch(error => {
  console.error(error)
  process.exit(1)
})

async function bundle() {
  if (isProduction) {
    await client.runProd({ screwIE: true })
  } else {
    await client.runDev()
  }
}
