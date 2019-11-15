const Koa = require('koa');
const app = new Koa();

const index = require('./routes/index')
const static = require('koa-static')
const main = static(__dirname + '/public')// 将 public 目录设置为静态资源目录
//	app.use(require('koa-static')(__dirname + '/public'));
const views = require('koa-views')
app.use(index.routes(), index.allowedMethods())// allowedMethods 用于校验请求的方法，如果用 post 请求访问 get 接口，就会直接返回失败
app.use(main)
app.use(views(__dirname + '/views'))

app.listen(3000);

