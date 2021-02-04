# zenweb-cors
zenweb cors module

## Quick start

```bash
$ npm i @zenweb/cors
```

app.js
```js
'use strict';

const app = module.exports = require('zenweb').create();

app.setup('@zenweb/cors', {
  origin: '*',
});

app.router.get('/', ctx => {
  ctx.body = 'ok';
});

app.start();
```
