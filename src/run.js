require('@babel/register')({
	presets: ['@babel/preset-env']
});


const { default: findMaximumSum } = require('./index');
let result;
result = findMaximumSum([-1, 9, 4, 5, -4, 7]);
console.log(`Input [-1, 9, 4, 5, -4, 7] produces sequence: ${result.sequence} = ${result.sum}`);
result = findMaximumSum([0, 1, 2, 3, 4, 5]);
console.log(`Input [0, 1, 2, 3, 4, 5] produces sequence: ${result.sequence} = ${result.sum}`);
result = findMaximumSum([-1, 0, 1]);
console.log(`Input [-1, 0, 1] produces sequence: ${result.sequence} = ${result.sum}`);
result = findMaximumSum([5, -5, 0, 9, 0, 1, 1, 1, -3]);
console.log(`Input [5, -5, 0, 9, 0, 1, 1, 1, -3] produces sequence: ${result.sequence} = ${result.sum}`);
result = findMaximumSum([-10, 0, 0, 0, 1]);
console.log(`Input [-10, 0, 0, 0, 1] produces sequence: ${result.sequence} = ${result.sum}`);
result = findMaximumSum([-10, 1, 1, 1, 1]);
console.log(`Input [-10, 1, 1, 1, 1] produces sequence: ${result.sequence} = ${result.sum}`);
result = findMaximumSum([1, 1]);
console.log(`Input [1, 1] produces sequence: ${result.sequence} = ${result.sum}`);