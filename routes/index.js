const config = require('../config/sqlDefault')
const mysql = require('../mysql')
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/getData', async (ctx, next) => {
  let data = await mysql.query()
  ctx.body = {
    "code": 1,
    "data": data,
    "mesg": 'ok'
  }
})

module.exports = router