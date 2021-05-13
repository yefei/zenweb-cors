import { Options } from '@koa/cors';

export type CorsOptions = Options;

export declare function setup(core: Core, options?: CorsOptions): void;
