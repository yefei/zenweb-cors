# zenweb-cors
zenweb cors module

跨域支持

## Quick start

```bash
$ npm i @zenweb/cors
```

```ts
import { create } from 'zenweb';
import modCors from '@zenweb/cors';

const app = create();

app.setup(modCors({  origin: '*' }));
```

## Changelog

## 2.4.0
- @koa/cors: ^3
- null 检查
