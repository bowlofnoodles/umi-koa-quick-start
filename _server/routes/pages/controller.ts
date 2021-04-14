import * as fs from 'fs';
import * as path from 'path';

const resolve = (dir) => path.resolve(process.cwd(), `./${dir}`);

export const index = async (ctx, next) => {
  let html = fs.readFileSync(resolve('dist/index.html'), 'utf-8');
  ctx.type = 'text/html';
  ctx.body = html;
};
