self.addEventListener('push', function (event) {

    if (event.data) {
        const data = event.data.text()
        const options = {
            body: data.body,
            icon: data.icon || '/icon.png',
            badge: '/badge.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2',
            },
        }
        event.waitUntil(self.registration.showNotification(data, options))
        console.log('Received a push message', JSON.stringify(data))
    }
})

self.addEventListener('notificationclick', function (event) {
    console.log('Notification click received.')
    event.notification.close()
    event.waitUntil(clients.openWindow('https://app-dev.hisys.nl/'))
})

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('HiSysv1').then( (cache) => {
            return cache.addAll([
                '/'
            ]);
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    )
})
