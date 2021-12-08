import cors from '@koa/cors';

/**
 * @param {import('@zenweb/core').Core} core 
 * @param {object} [options]
 */
export function setup(core, options) {
  core.use(cors(options));
}
