import merge from 'webpack-merge';
import { GenerateSW } from 'workbox-webpack-plugin';
import baseConfig from './webpack.config.base.babel';

export default merge(baseConfig, {
  plugins: [
    new GenerateSW({
      swDest: `${__dirname}/dist/sw.js`,
      importWorkboxFrom: 'local',
      skipWaiting: true,
      clientsClaim: true,
      cacheId: 'workbox-cache',
      cleanupOutdatedCaches: true,
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://jsonplaceholder.typicode.com/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
            expiration: {
              maxEntries: 1,
              maxAgeSeconds: 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: new RegExp('^https://via.placeholder.com/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'image',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    }),
  ],
});
