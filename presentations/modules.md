===
# Javascript
## modules

===
📋

===
💻

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
- Global scope 😖
- CommonJS
- Asynchronous Module Definition (AMD)
- ECMAScript 6 modules

=== dark
Global scope 😖

```js
// main.js
console.log(window.message);

// message.js
window.message = 'Hello world!';
```

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
define('main', ['message'], (message) => {
  console.log(message);
});

// message.js
define('message', [], () => {
  return 'Hello world!';
});
```

=== dark
ES6 modules

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

Main file

```js
// package.json
{
  "main": "./src/main.js"
}
```

Default: _index.js_

=== dark

Relative file or module

```js
require('./some-file');

// ./some-file.js
// ./some-file/{MAIN}
```

===

Node.js 🔗 npm

=== dark

Requires/imports are by reference!

```js
// myObject.js
module.exports = { name: 'John' };

// a.js
require('./myObject.js').name = 'Niels';

// b.js
console.log(require('./myObject.js').name); // 'Niels'
```

===

Putting the JSON API live 🌎

===

What about ES6 Modules ❓

===

- Not yet supported by browsers
- You need HTTP2 + server push for performance
- Can be used now using transpiling and bundling

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

Going client side 🖥
