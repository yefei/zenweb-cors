# jiango-node-cors
jiango cors module

## Quick start

```bash
$ npm i @jiango/cors
```

app.js
```js
'use strict';

const app = module.exports = require('jiango').create();

app.setup('@jiango/cors', {
  origin: '*',
});

app.router.get('/', ctx => {
  ctx.body = 'ok';
});

app.start();
```
