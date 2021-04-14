import * as Koa from 'koa';
import * as koaRouter from 'koa-router';
import * as path from 'path';
import * as staticCache from 'koa-static-cache';
import * as bodyParser from 'koa-bodyparser';

import setPageRouter from './routes/pages';
import setApisRouter from './routes/apis';

const resolve = (dir) => path.resolve(process.cwd(), `./${dir}`);

const app = new Koa();

// api router
const apisRouter = new koaRouter();
setApisRouter(apisRouter);
app.use(apisRouter.routes()).use(apisRouter.allowedMethods());

// page router
const pageRouter = new koaRouter();
setPageRouter(pageRouter);
app.use(pageRouter.routes()).use(pageRouter.allowedMethods());

// static file app
app.use(
  staticCache(resolve('dist'), {
    index: false,
    maxAge: 1000 * 60 * 60 * 24 * 10,
    prefix: `/static/`,
  }),
);
app.use(bodyParser());

app.listen(3456);
console.log(`server is listening in ${3456}`);
