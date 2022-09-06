// Android JS does not support BigInt and Lyra requires it, so shim it if it's not present
// eslint-disable-next-line unicorn/prefer-module
if (typeof BigInt === 'undefined') global.BigInt = require('big-integer');
