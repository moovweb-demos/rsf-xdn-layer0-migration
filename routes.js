// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')
const { API, SSR, cacheResponse } = require('./cache')
// const prerenderRequests = require('./layer0/prerenderRequests')

module.exports = new Router()
  .match('/service-worker.js', ({ serviceWorker }) => {
    return serviceWorker('.next/static/service-worker.js')
  })
  .match('/', cacheResponse(SSR))
  .match('/api', cacheResponse(API))
  .match('/s/:categorySlug*', cacheResponse(SSR))
  .match('/api/s/:categorySlug*', cacheResponse(API))
  .match('/p/:productId', cacheResponse(SSR))
  .match('/api/p/:productId', cacheResponse(API))
  .use(nextRoutes) // automatically adds routes for all files under /pages

