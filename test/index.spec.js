import assert from 'assert';
import findMaximumSum from '../src/index.js';

describe('Find Maximum Sum Test', () => {
    it('should return 87 given [-1, 9, 4, 5, -4, 7] as input', () => {
        const { sum } = findMaximumSum([-1, 9, 4, 5, -4, 7]);
        assert.deepEqual(sum, 87);
    });

    it('should return 27 given [0, 1, 2, 3, 4, 5] as input', () => {
        const { sum } = findMaximumSum([0, 1, 2, 3, 4, 5]);
        assert.deepEqual(sum, 27);
    });

    it('should return 1 given [-1,0,1] as input', () => {
        const { sum } = findMaximumSum([-1,0,1]);
        assert.deepEqual(sum, 1);
    });

    it('should return 63 given [5,-5,0,9,0,1,1,1,-3] as input', () => {
        const { sum } = findMaximumSum([5,-5,0,9,0,1,1,1,-3]);
        assert.deepEqual(sum, 63);
    });

    it('should return 1 given [-10,0,0,0,1] as input', () => {
        const { sum } = findMaximumSum([-10,0,0,0,1]);
        assert.deepEqual(sum, 1);
    });

    it('should return -6 given [-10,1,1,1,1] as input', () => {
        const { sum } = findMaximumSum([-10,1,1,1,1]);
        assert.deepEqual(sum, -6);
    });

    it('should return 2 given [1,1] as input', () => {
        const { sum } = findMaximumSum([1,1]);
        assert.deepEqual(sum, 2);
    });
});
