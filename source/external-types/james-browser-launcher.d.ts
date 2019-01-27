declare module '@james-proxy/james-browser-launcher' {
  import { ChildProcess } from 'child_process'
  import { Readable } from 'stream'

  namespace factory {
    export type LauncherFactory = {
      (error: Error, launcher: undefined): void
      (error: null, launcher: Launcher): void
    }

    export type Launcher = (url: string, options: BrowserOptions, cb: InstanceCallback) => void

    export type BrowserOptions = {
      browser: Browsers
      options?: string[]
      detached?: boolean
      headless?: boolean
    }

    export type Browsers = 'chrome' | 'firefox' | 'safari' | 'ie' | 'opera' | 'phantomjs'

    export type InstanceCallback = {
      (error: Error, instance: undefined): void
      (error: null, instance: Instance): void
    }

    export type Instance = {
      command: string
      args: string[]
      image: string
      processName: string
      process: ChildProcess
      pid: number
      stdout: Readable
      stderr: Readable
    }
  }

  const factory: factory.LauncherFactory

  export = factory
}
