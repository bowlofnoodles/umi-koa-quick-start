import * as ctrl from './controller';

export default (router) => {
  router.get(/^(?!\/(apis|static)).*$/, ctrl.index);
};
