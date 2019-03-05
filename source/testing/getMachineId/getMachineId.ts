import { execSync } from 'child_process'
import { createHash } from 'crypto'

const win32RegBinPath = {
  '': '',
  native: '%windir%\\System32',
  mixed: '%windir%\\sysnative\\cmd.exe /c %windir%\\System32',
}
const guid = {
  darwin: 'ioreg -rd1 -c IOPlatformExpertDevice',
  win32:
    `${win32RegBinPath[isWindowsProcessMixedOrNativeArchitecture()]}\\REG ` +
    'QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography ' +
    '/v MachineGuid',
  linux:
    '( cat /var/lib/dbus/machine-id /etc/machine-id 2> /dev/null || hostname ) | head -n 1 || :',
  freebsd: 'kenv -q smbios.system.uuid',
}

const platform = process.platform as keyof typeof guid

export function getMachineId(original: boolean = true): string {
  const id: string = expose(execSync(guid[platform]).toString())

  return original ? id : hash(id)
}

function isWindowsProcessMixedOrNativeArchitecture(): keyof typeof win32RegBinPath {
  // detect if the node binary is the same arch as the Windows OS.
  // or if this is 32 bit node on 64 bit windows.
  if (process.platform !== 'win32') {
    return ''
  }

  if (process.arch === 'ia32' && process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432')) {
    return 'mixed'
  }

  return 'native'
}

function hash(guid: string): string {
  return createHash('sha256')
    .update(guid)
    .digest('hex')
}

function expose(result: string): string {
  switch (platform) {
    case 'darwin':
      return result
        .split('IOPlatformUUID')[1]
        .split('\n')[0]
        .replace(/\=|\s+|\"/gi, '')
        .toLowerCase()
    case 'win32':
      return result
        .toString()
        .split('REG_SZ')[1]
        .replace(/\r+|\n+|\s+/gi, '')
        .toLowerCase()
    case 'linux':
      return result
        .toString()
        .replace(/\r+|\n+|\s+/gi, '')
        .toLowerCase()
    case 'freebsd':
      return result
        .toString()
        .replace(/\r+|\n+|\s+/gi, '')
        .toLowerCase()
    default:
      throw new Error(`Unsupported platform: ${process.platform}`)
  }
}
