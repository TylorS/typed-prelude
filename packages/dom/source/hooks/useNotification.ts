import { Disposable, withIsDisposed } from '@typed/disposable'
import { Env, Pure } from '@typed/env'
import { Overwrite } from '@typed/objects'
import { checkCanUseNotification } from '../checks'
import { useDisposable } from './useDisposable'
import { usePredicate } from './usePredicate'
import { usePureState } from './usePureState'

export function useNotification(): (
  notificationOptions: Overwrite<NotificationOptions, { title?: string }>,
) => Pure<boolean> {
  const canUseNotification = usePredicate(checkCanUseNotification)
  const [hasReceivedPermission, setHasPermission] = usePureState(
    canUseNotification ? Notification.permission === 'granted' : false,
  )

  useDisposable(() => {
    if (!canUseNotification || hasReceivedPermission) {
      return Disposable.None
    }

    return withIsDisposed(async isDisposed => {
      await Notification.requestPermission()

      return setHasPermission(() => !isDisposed() && Notification.permission === 'granted')
    })
  }, [canUseNotification])

  return ({
    title = '',
    ...options
  }: Overwrite<NotificationOptions, { title?: string }>): Pure<boolean> =>
    Env.create(cb => {
      const canMakeNotification = canUseNotification && hasReceivedPermission
      const disposable = canMakeNotification ? createNotification(title, options) : Disposable.None

      return cb(canMakeNotification), disposable
    })
}

function createNotification(title: string, options: NotificationOptions) {
  const notification = new Notification(title, options)

  return { dispose: () => notification.close() }
}
