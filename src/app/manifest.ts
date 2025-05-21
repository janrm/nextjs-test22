import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        short_name: 'hisys-app',
        name: 'Hockey Information System App',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait-primary',
        background_color: '#207fc0',
        theme_color: '#1b807d',
        icons: [
            {
                src: '/icons/icon-192x192.png',
                "sizes": "192x192",
                "type": "image/png",
            },
            {
                src: '/icons/icon-512x512.png',
                "sizes": "512x512",
                "type": "image/png",
            }
        ],
    }
}
