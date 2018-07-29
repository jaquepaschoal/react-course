import { expect } from 'chai'
import filter from './filter'

it('filter should be a function',()=>{
  expect(filter).to.be.a('function')
})


it('filter([3, 4], (item) => item > 2) should return [3, 4]',()=>{
  expect(filter([3, 4], (item)=>item > 2)).to.be.deep.equal([3, 4])
})

it('filter([2, 4], (item) => item > 2) should return [4]',()=>{
  expect(filter([2, 4], (item)=>item > 2)).to.be.deep.equal([4])
})

it('filter([2, 4], (item,index) => index === 0) should return [2]',()=>{
  expect(filter([2, 4], (item,index)=>index === 0)).to.be.deep.equal([2])
})

it('filter([2, 4], (item,index) => index > 0) should return [4]',()=>{
  expect(filter([2, 4], (item,index)=>index > 0)).to.be.deep.equal([4])
})

it('filter([2, 4], (item,index,arr) => arr.length == 2) should return [ 2, 4 ]',()=>{
  expect(filter([2, 4], (item,index,arr) => arr.length == 2)).to.be.deep.equal([ 2, 4 ])
})