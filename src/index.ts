import * as koacors from '@koa/cors';
import { Options as CorsOption } from '@koa/cors';
import { SetupFunction } from '@zenweb/core';

export {
  CorsOption
}

export default function setup(option?: CorsOption): SetupFunction {
  return function cors(setup) {
    setup.middleware(koacors(option));
  }
}
