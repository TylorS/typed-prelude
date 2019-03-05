import { describe, given, it } from '@typed/test'
import { getMachineId } from './getMachineId'

const originalPattern = {
  darwin: /^[0-9,A-z]{8}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{12}$/,
  win32: /^[0-9,A-z]{8}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{12}$/,
  linux: /^[0-9,A-z]{32}$/,
  freebsd: /^[0-9,A-z]{8}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{4}-[0-9,A-z]{12}$/,
}
const hashPattern = /^[0-9,A-z]{64}$/

const platform = process.platform as keyof typeof originalPattern

export const test = describe(`getMachineId`, [
  it(`returns machine id`, ({ ok }) => {
    const id = getMachineId()
    const pattern = originalPattern[platform]

    ok(pattern.test(id))
  }),

  given(`false`, [
    it(`returns hash of machine id`, ({ ok }) => {
      const id = getMachineId(false)

      ok(hashPattern.test(id))
    }),
  ]),
])
