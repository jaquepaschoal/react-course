import { expect } from 'chai'
import some from './some'


it('some should be a function', ()=> {
  expect(some).to.be.a('function')
})

it('some([], (item) => item) should return true',()=>{
  expect(some([], (item)=>item)).to.be.deep.equal(false)
})

it('some([3], (item) => item > 2) should return true',()=>{
  expect(some([3], (item)=>item > 2)).to.be.deep.equal(true)
})

it('some([3,2], (item) => item > 2) should return true ',()=>{
  expect(some([3,2], (item)=>item > 2)).to.be.deep.equal(true)
})

it('some([3,2], (item) => item > 1) should return true ',()=>{
  expect(some([3,2], (item)=>item > 1)).to.be.deep.equal(true)
})

it('some([3,2], (item, x) => x > 2) should return false ',()=>{
  expect(some([3,2], (item, x)=>x > 2)).to.be.deep.equal(false)
})

it('some([3,2], (item, x, arr) => arr.length === 2) should return true ',()=>{
  expect(some([3,2], (item, x, arr)=>arr.length === 2)).to.be.deep.equal(true)
})