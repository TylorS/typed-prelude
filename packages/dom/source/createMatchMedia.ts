export function createMatchMedia(window: Window, mediaType: string = 'screen') {
  const basic = require('basichtml')
  const mediaQuery = require('css-mediaquery')

  return (query: string) => {
    const getMatches = (): boolean =>
      mediaQuery(query, {
        type: mediaType,
        height: window.innerHeight,
        width: window.innerWidth,
      })

    const mediaQueryList = {
      matches: getMatches(),
      media: query,
    }

    basic.EventTarget.init(mediaQueryList)

    let listeners = 0
    const originalAddEventListener = (mediaQueryList as any).addEventListener.bind(mediaQueryList)
    ;(mediaQueryList as any).addEventListener = (...args: any[]) => {
      listeners++
      manageResizeListener()

      return originalAddEventListener(...args)
    }

    const originalRemoveEventListener = (mediaQueryList as any).removeEventListener.bind(
      mediaQueryList,
    )
    ;(mediaQueryList as any).removeEventListener = (...args: any[]) => {
      listeners--
      manageResizeListener()

      return originalRemoveEventListener(...args)
    }

    function changeEvent() {
      const matches = getMatches()

      if (matches !== mediaQueryList.matches) {
        const event = new basic.Event('change', { bubbles: true })

        mediaQueryList.matches = matches
        event.matches = matches

        if ((mediaQueryList as MediaQueryList).onchange) {
          ;(mediaQueryList as MediaQueryList).onchange!(event)
        }

        ;(mediaQueryList as any).dispatchEvent(event)
      }
    }

    function manageResizeListener() {
      if (listeners === 1) {
        window.addEventListener('resize', changeEvent)
      }

      if (listeners === 0) {
        window.removeEventListener('resize', changeEvent)
      }
    }

    return mediaQueryList as MediaQueryList
  }
}
