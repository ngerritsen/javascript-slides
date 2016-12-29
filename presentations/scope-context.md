===
# Javascript
## scope & context

===
📋

===
💻

===
# Scope 🔭

===
The scope is an imaginary object with all variables you have access to at a certain point.

=== dark
```javascript
⬅
const pirate = 'Captain Hook';
const shout = 'Arrr!!';
```


==== dark
```javascript
const pirate = 'Captain Hook';
⬅
const shout = 'Arrr!!';
```

| pirate | Captain hook |

=== dark
```javascript
const pirate = 'Captain Hook';
const shout = 'Arrr!!';
⬅
```

| pirate | Captain hook |
| shout  | Arrr!!       |

===
Hoisting the pirate.

===
Only _function_ hoisting is useful. _var_ is hoisted but not assigned.

=== dark
```javascript
const pirate = 'Captain Hook';
const pirateMessage = shout(); ⬅

function shout() {
  const message = pirate + ' says: Arrr!!';
  return message;
}
```

| pirate | Captain hook |
| shout  | [Function]   |

=== dark
```javascript
const pirate = 'Captain Hook';
const pirateMessage = shout();

function shout() {
  const message = pirate ⬅ + ' says: Arrr!!';
  return message;
}
```

| parent scope  | *             |
| *pirate       | Captain Hook  |
| *shout        | [Function]    |

=== dark
```javascript
const pirate = 'Captain Hook';
const pirateMessage = shout();

function shout() {
  const message = pirate + ' says: Arrr!!';
  return message; ⬅
}
```
| message       | Captain hook says: Arrr!  |
| parent scope  | *                         |
| *pirate       | Captain Hook              |
| *shout        | [Function]                |

=== dark
```javascript
const pirate = 'Captain Hook';
const pirateMessage = shout();
⬅

function shout() {
  const message = pirate + ' says: Arrr!!';
  return message;
}
```

| pirateMessage | Captain hook says: Arrr!  |
| pirate        | Captain Hook              |
| shout         | [Function]                |

===
Scopes inherit from their parent scope.

===
Scoping like its 2016

===
_vars_ are function scoped, _let_ and _const_ are block scoped.

===
Filescope

===
Node.js has a file scope, the browser has IIFY's instead.

===
# Context 🌍

===
context !== scope

===
The context is an object determined by how a function is called.

===
Creating a rocket 🚀

===
Take care when using _this_, the caller has control over what it is.

===
Constructing a rocket 🚀

===
Constructor functions create objects by using _context_.

===
Prototyping a rocket 🚀

===
Context inherits from the _prototype_.

===
Getting classy 👠

===
In Javscript, classes are _fancy_, "better" constructor functions.

=== dark
```javascript
class MyModule {
  constructor(element) {
    this._element = element;
    this.message = 'Hello world!';
    this._init();
  }

  _init() {
    this._element.addEventListener(this._onClick)
  }

  _onClick() {
    alert(this.message)
  }
}
```


=== dark
```javascript
class MyModule {
  constructor(element) {
    this._element = element;
    this.message = 'Hello world!';
    this._init();
  }

  _init() {
    this._element.addEventListener(this._onClick.bind(this))
  }

  _onClick() {
    alert(this.message)
  }
}
```


===
Rockets without context 🚀

===
Always weight the benefits of using context against the downsides.
