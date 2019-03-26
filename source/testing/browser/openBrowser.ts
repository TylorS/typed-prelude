import { ChildProcess } from 'child_process'
import { TestEvironment } from '../cli'
// tslint:disable-next-line:no-var-requires
const launcher: JamesBrowserLauncher = require('james-browser-launcher')

export function getLauncher(): Promise<BrowserStart> {
  return new Promise((resolve, reject) => {
    launcher((err, launch) => {
      if (err) {
        return reject(err)
      }

      resolve(launch)
    })
  })
}

export function testEnvironmentToBrowser(environment: TestEvironment): Browsers {
  switch (environment) {
    case TestEvironment.ChromeHeadless:
      return 'chrome-headless'
    case TestEvironment.Chrome:
      return 'chrome'
    case TestEvironment.Chromium:
      return 'chromium'
    case TestEvironment.Firefox:
      return 'firefox'
    case TestEvironment.IE:
      return 'ie'
    case TestEvironment.Opera:
      return 'opera'
    case TestEvironment.Safari:
      return 'safari'
  }

  return 'chrome-headless'
}

export async function openBrowser(
  environment: TestEvironment,
  url: string,
  keepAlive: boolean,
  launch: BrowserStart,
): Promise<BrowserInstance> {
  return new Promise<BrowserInstance>((resolve, reject) => {
    const browser = testEnvironmentToBrowser(environment)
    const args = browser === 'chrome-headless' ? ['--disable-gpu', '--headless'] : ['--disable-gpu']
    launch(url, { browser, options: args, detached: keepAlive }, (error, instance) => {
      if (error) {
        return reject(error)
      }

      if (keepAlive) {
        instance.process.unref()
      } else {
        process.on('exit', () => tryStopInstance(instance))
      }

      resolve(instance)
    })
  })
}

function tryStopInstance(browser: BrowserInstance) {
  try {
    browser.stop()
  } catch {
    return void 0
  }
}

export type Browsers =
  | 'chrome-headless'
  | 'chrome'
  | 'chromium'
  | 'firefox'
  | 'opera'
  | 'safari'
  | 'ie'

type JamesBrowserLauncher = (cb: (error: Error | null, launch: BrowserStart) => void) => void

export type BrowserStart = (
  uri: string,
  options: StartOption,
  cb: (err: Error | null, instance: BrowserInstance) => void,
) => void

export type StartOption = {
  browser: Browsers
  version?: string
  proxy?: string
  options?: string[]
  skipDefaults?: boolean
  detached?: boolean
  noProxy?: boolean
  headless?: boolean
}

export type BrowserInstance = {
  command: string
  args: string[]
  image: string
  processName: string
  pid: number
  process: ChildProcess
  stdout: ChildProcess['stdout']
  stderr: ChildProcess['stderr']
  stop: () => void
}
