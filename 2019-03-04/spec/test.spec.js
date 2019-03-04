var quickSort = require('./quicksort').default

var assert = require('chai').assert;

describe('quickSort', () => {
  it('should renturn sorted array', () => {
    assert.deepEqual(quickSort([3,4,2,1,5], true), [1,2,3,4,5])
  })
  it('has only one number', () => {
    assert.deepEqual(quickSort([1], true), [1])
  })
  it('has no number', () => {
    assert.deepEqual(quickSort([], true), [])
  })
  it('should repeating number', () => {
    assert.deepEqual(quickSort([3,1,2,4,2], true), [1,2,2,3,4])
  })
})