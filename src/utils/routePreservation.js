export const ROUTE_STORAGE_KEY = 'portfolio_app_route';

export function isAppHash(hash) {
  return Boolean(hash && hash.startsWith('#/') && !hash.includes('googtrans'));
}

export function saveAppRoute(pathname, search = '') {
  const path = `${pathname || '/'}${search || ''}`;
  if (path !== '/') {
    sessionStorage.setItem(ROUTE_STORAGE_KEY, path);
  }
}

export function restoreAppRouteIfNeeded() {
  const saved = sessionStorage.getItem(ROUTE_STORAGE_KEY);
  if (!saved || saved === '/') return;

  const hash = window.location.hash;
  const needsRestore =
    !hash || hash === '#' || hash === '#/' || hash.includes('googtrans');

  if (needsRestore) {
    window.location.replace(
      `${window.location.pathname}${window.location.search}#${saved}`
    );
  }
}
