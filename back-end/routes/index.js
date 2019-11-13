// routes/index.js
 
const fs = require('fs');
const router = require('koa-router')()
 
router.get('/', async (ctx, next) => {
 ctx.type = 'text/html';
 ctx.body = fs.createReadStream('./views/index.html');
});
 
module.exports = router