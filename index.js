'use strict';

const debug = require('debug')('zenweb:cors');
const cors = require('@koa/cors');

/**
 * @param {import('zenweb').Core} core 
 * @param {object} [options]
 */
function setup(core, options) {
  debug('options: %o', options);
  core.koa.use(cors(options));
}

module.exports = setup;
