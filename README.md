# Middy Bug

Repo for a bug report into [MiddyJS](https://github.com/middyjs/middy).

When the code in this repo is deployed, it generates the following error:

```plaintext
2022-02-20 13:37:45.787 ERROR   Uncaught Exception      {"errorType":"TypeError","errorMessage":"(0 , core_1.default) is not a function","stack":["TypeError: (0 , core_1.default) is not a function","    at Object.<anonymous> (/var/task/src/fulfillment.js:193:38)","    at Module._compile (internal/modules/cjs/loader.js:1085:14)","    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1114:10)","    at Module.load (internal/modules/cjs/loader.js:950:32)","    at Function.Module._load (internal/modules/cjs/loader.js:790:12)","    at Module.require (internal/modules/cjs/loader.js:974:19)","    at require (internal/modules/cjs/helpers.js:93:18)","    at _tryRequireFile (/var/runtime/UserFunction.js:63:32)","    at _tryRequire (/var/runtime/UserFunction.js:151:20)","    at _loadUserApp (/var/runtime/UserFunction.js:197:12)"]}
```
