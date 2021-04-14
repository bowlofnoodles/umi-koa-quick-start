import * as ctrl from './controller';

export default (router) => {
  router.get(`/apis/test`, ctrl.testApi);
};
