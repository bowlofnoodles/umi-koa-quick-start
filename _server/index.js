'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Koa = require('koa');
var koaRouter = require('koa-router');
var path = require('path');
var staticCache = require('koa-static-cache');
var bodyParser = require('koa-bodyparser');
var pages_1 = require('./routes/pages');
var apis_1 = require('./routes/apis');
var resolve = function (dir) {
  return path.resolve(process.cwd(), './' + dir);
};
var app = new Koa();
// api router
var apisRouter = new koaRouter();
apis_1.default(apisRouter);
app.use(apisRouter.routes()).use(apisRouter.allowedMethods());
// page router
var pageRouter = new koaRouter();
pages_1.default(pageRouter);
app.use(pageRouter.routes()).use(pageRouter.allowedMethods());
// static file app
app.use(
  staticCache(resolve('dist'), {
    index: false,
    maxAge: 1000 * 60 * 60 * 24 * 10,
    prefix: '/static/',
  }),
);
app.use(bodyParser());
app.listen(3456);
console.log('server is listening in ' + 3456);
