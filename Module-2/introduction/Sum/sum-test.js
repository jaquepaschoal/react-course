'use strict'

const sum = require ('./sum');


console.assert(
  typeof sum === 'function', 
  'Should sum is a function'
);

console.assert(
  sum(1,2) === 3, 
  'Should sum return 3.'
);

console.log('All tests passed!');