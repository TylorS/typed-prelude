const UNDEFINED = 'undefined'

export const checkCanUseWindow = () => typeof window !== UNDEFINED
export const checkCanUseDocument = () => typeof document !== UNDEFINED
export const checkCanUseNavigator = () => typeof navigator !== UNDEFINED
export const checkCanUseServiceWorker = () => checkCanUseNavigator() && 'serviceWorker' in navigator
export const checkCanUseHistory = () => typeof history !== UNDEFINED
export const checkCanUseLocation = () => typeof location !== UNDEFINED
export const checkCanUseLocalStorage = () => typeof localStorage !== UNDEFINED
export const checkCanUseSessionStorage = () => typeof sessionStorage !== UNDEFINED
export const checkCanUseXhr = () => typeof XMLHttpRequest !== UNDEFINED
export const checkCanUseMatchMedia = () => typeof matchMedia !== UNDEFINED
export const checkCanUseCustomElements = () => typeof customElements !== UNDEFINED
export const checkCanUseNotification = () => checkCanUseWindow() && 'Notification' in window
