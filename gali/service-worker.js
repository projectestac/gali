/* eslint-disable no-restricted-globals */
/* global importScripts */

if ('function' === typeof importScripts) {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');

  // Catch possible "SKIP_WAITING" events
  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  // Clean old caches created with `sw-precache`
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys()
        .then(cacheNames => {
          return Promise.all(
            cacheNames
              .filter(cacheName => /^(precache-v3|runtime)+/.test(cacheName))
              .map(cacheName => {
                console.log(`SW - Deleting old cache "${cacheName}"`);
                return caches.delete(cacheName);
              })
          );
        })
    );
  });

  /* global workbox */
  if (workbox) {

    // Set debug mode based on search params when registering, like: `sw.js?debug`
    // From: https://stackoverflow.com/questions/50795315/workbox-set-debug-mode-dynamically
    const url = new URL(location.href);
    const debug = url.searchParams.has('debug');
    workbox.setConfig({ debug });

    // Import statements
    const {
      core: { setCacheNameDetails, clientsClaim },
      precaching: { precacheAndRoute, createHandlerBoundToURL },
      routing: { NavigationRoute, registerRoute },
      strategies: { StaleWhileRevalidate, CacheFirst },
      expiration: { ExpirationPlugin },
      cacheableResponse: { CacheableResponsePlugin },
      recipes: { googleFontsCache },
    } = workbox;

    // Set a specific prefix for this SW, used in cache names
    setCacheNameDetails({
      prefix: 'gali',
    });

    // Take control immediatly
    clientsClaim();

    // Injection point for manifest files
    precacheAndRoute([
      { 'url': 'index.html', 'revision': '20210418' },
      { 'url': 'gali.css', 'revision': '20210418' },
      { 'url': 'gali.html', 'revision': '20210418' },
      { 'url': 'gali.js', 'revision': '20210418' },
      { 'url': 'player.html', 'revision': '20210418' },
      { 'url': 'img/logo_petit.gif', 'revision': '20210418' },
      { 'url': 'img/led_taronja.gif', 'revision': '20210418' },
      { 'url': 'img/led_taronja_ok.gif', 'revision': '20210418' },
      { 'url': 'img/led_verd.gif', 'revision': '20210418' },
      { 'url': 'img/led_verd_ok.gif', 'revision': '20210418' },
      { 'url': 'img/selecciona.gif', 'revision': '20210418' },
      { 'url': 'img/selecciona-oc.gif', 'revision': '20210418' },
      { 'url': 'js/jquery-3.6.0.min.js', 'revision': '20210418' },
    ]);

    // custom cache rules
    const handler = createHandlerBoundToURL('./index.html');
    const navigationRoute = new NavigationRoute(handler, {
      denylist: [/^\/_/, /\/[^/]+\.[^/]+$/],
    });
    registerRoute(navigationRoute);

    // Cache for activities
    registerRoute(
      /^https:\/\/clic\.xtec\.cat\/projects\//,
      new StaleWhileRevalidate({
        cacheName: 'gali-activities',
        plugins: [
          new CacheableResponsePlugin({
            statuses: [200],
          }),
          new ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 7, // 7 Days
            purgeOnQuotaError: true,
          }),
        ],
      }),
    );

    // Use the new recipe for Google Fonts in WorkBox 6, instead of the full pattern
    googleFontsCache();

    // Cache for big logos and miscellaneous icons (small logos are always pre-cached)
    registerRoute(
      /\/img\/[/\w]*\.(?:jpg|gif|png)$/,
      new CacheFirst({
        cacheName: 'gali-img-cache',
        plugins: [
          new ExpirationPlugin({
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days            
          }),
        ],
      })
    );

  } else
    console.log('Workbox could not be loaded. No offline support!');
}
