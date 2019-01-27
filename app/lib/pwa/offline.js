/**
 * Registers Service Worker on the site
 * Need more? check out:
 * https://github.com/GoogleChrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
 */

/* eslint no-console:0 */
/* globals navigator */

if (
  process.env.NODE_ENV === 'production' &&
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator
) {
  navigator.serviceWorker
    .register('service-worker.js')
    .then(() => {
      console.log('Service worker registered');
    })
    .catch(e => {
      console.error('Error during service worker registration:', e);
    });
}
