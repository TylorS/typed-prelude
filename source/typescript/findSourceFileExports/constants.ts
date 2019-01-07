import { Tuple } from '../../tuple'

export const MODULE_EXPORTS = /^module\.exports/
export const EXPORTS = /(exports\.)(.+)/

export const moduleExport: Tuple<string> = ['module', 'export']
export const defaultExport: Tuple<string> = ['default', 'default']
