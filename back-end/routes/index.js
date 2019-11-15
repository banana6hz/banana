// routes/index.js
 
const fs = require('fs');
const router = require('koa-router')()// 需要注意的是，在导入 koa-router 的时候，需要在末尾加一个括号
 
router.get('/', async (ctx, next) => {
 ctx.type = 'text/html';
 ctx.body = fs.createReadStream('./views/index.html');
//  await ctx.render("index",{
//     title:"nodeWeb 首页"
//   })
});
 
module.exports = router