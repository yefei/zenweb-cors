import * as cors from '@koa/cors';
import { Options as CorsOption } from '@koa/cors';
import { Core } from '@zenweb/core';

export {
  CorsOption
}

export function setup(core: Core, option?: CorsOption) {
  core.use(cors(option));
}
