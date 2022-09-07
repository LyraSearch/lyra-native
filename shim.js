// Android JS does not support BigInt and Lyra requires it, so shim it if it's not present
// https://github.com/facebook/react-native/issues/28492#issuecomment-824698934
// eslint-disable-next-line unicorn/prefer-module
if (typeof BigInt === 'undefined') global.BigInt = require('big-integer');
