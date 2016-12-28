===
# Javascript
## modules

===
## module _[moj-ool]_ - Computers
Part of a program that performs a distinct function.

===
## module _[moj-ool]_
A separable component.

===

- Function
- Objects
- Files

===

- Function
- Objects
- Files ⬅

===
- CommonJS
- Asynchronous Module Definition (AMD)
- ECMAScript 6 modules

=== dark
CommonJS

```js
// main.js
const message = require('./message.js');
console.log(message);

// message.js
module.exports = 'Hello world!';
```

=== dark
AMD

```js
// main.js
define(['dependency'], (dependency) => {
  console.log(message);
});

// message.js
define('message', [], () => {
  return 'Hello world!';
});
```

=== dark
ECMAScript 6 modules

```js
// main.js
import message from 'message.js';
console.log(message);

// message.js
export default message;
```

===
|             | CommonJS  | AMD     | ES6 modules       |
|-------------|-----------|---------|-------------------|
| Main use    | Node      | Browser | Browser (for now) |
| Async       | ❌         | ✅      | ✅                |
| Static      | ❌         | ❌      | ✅                |

===
Building a JSON API 🌏

===

Referring to a file 👉

=== dark

Relative file

```js
require('./some-file.js');

// ./some-file.js
```

=== dark

Node module

```js
require('some-file');

// {PROJECT_ROOT}/node_modules/some-file/{MAIN}
```

=== dark

Package JSON (main default: _index.js_)

```js
{
  "main": "./src/main.js"
}
```

===

Node.js 🔗 npm

=== dark

Relative file or module

```js
require('./some-file');

// ./some-file.js
// ./some-file/index.js
// ./some-file/{MAIN}
```

===

ES6 Modules
↓
_Transpile (Babel)_
↓
CommonJS in ES5
↓
_Bundle (Webpack)_
↓
ES5 Bundle

===

So yeah... ES6 modules are currently transpiled to AMD or a single bundle. 😅

===

Putting the JSON API live 🌎
