import { expect } from 'chai'
import find from './find'

it('find should be a function',()=>{
  expect(find).to.be.a('function')
})

it('find([1, 2], (item) => item < 2 ) should return 1',()=>{
  expect(find([1, 2], (item) => item < 2 )).to.be.deep.equal(1)
})

it('find([2, 0, 3], (item) => item < 3 ) should return 2',()=>{
  expect(find([2, 0, 3], (item) => item < 3 )).to.be.deep.equal(2)
})

it('find([3], (item) => item < 3 ) should return undefined',()=>{
  expect(find([3], (item) => item < 3 )).to.be.deep.equal(undefined)
})

it('find([3, 2], (item, index) => index < 0 ) should return 2',()=>{
  expect(find([3, 2], (item, index) => index > 0 )).to.be.deep.equal(2)
})

// it('find([3, 2], (item, index, arr) => index < 0 ) should return 2',()=>{
//   expect(find([3, 2], (item, index) => index > 0 )).to.be.deep.equal(2)
// })

