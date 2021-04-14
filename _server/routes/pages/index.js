'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var ctrl = require('./controller');
exports.default = function (router) {
  router.get(/^(?!\/(apis|static)).*$/, ctrl.index);
};
