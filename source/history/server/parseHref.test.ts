import { describe, given, it, Test } from '../../test'
import { ParsedHref, parseHref } from './parseHref'

export const test: Test = describe(`parseHref`, [
  given(`an href`, [
    it(`parses it`, ({ equal }) => {
      const href = `https://video.google.co.uk:80/videoplay?docid=-72496927612831078230&hl=en#00h02m30s`

      const expected: ParsedHref = {
        href: 'https://video.google.co.uk:80/videoplay?docid=-72496927612831078230&hl=en#00h02m30s',
        protocol: 'https:',
        host: 'video.google.co.uk:80',
        userInfo: '',
        username: '',
        password: '',
        hostname: 'video.google.co.uk',
        port: '80',
        relative: '/videoplay?docid=-72496927612831078230&hl=en#00h02m30s',
        pathname: '/videoplay',
        directory: '/',
        file: 'videoplay',
        search: '?docid=-72496927612831078230&hl=en',
        hash: '#00h02m30s',
      }

      equal(expected, parseHref(href))
    }),
  ]),
])
