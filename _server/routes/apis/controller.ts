export const testApi = async (ctx, next) => {
  ctx.type = 'application/json';

  console.log('logloglogloglog');
  ctx.body = {
    a: 1,
    b: 2,
    c: 3,
  };
};
