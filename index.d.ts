import { Options } from '@koa/cors';
import { Core } from '@zenweb/core';

export type CorsOptions = Options;

export declare function setup(core: Core, options?: CorsOptions): void;
