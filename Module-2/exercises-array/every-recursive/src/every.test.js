import { expect } from 'chai'
import every from './every'


it('every should be a function', ()=> {
  expect(every).to.be.a('function')
})

it('every([], (item) => item) should return true',()=>{
  expect(every([], (item)=>item)).to.be.deep.equal(true)
})

it('every([3], (item) => item > 2) should return true',()=>{
  expect(every([3], (item)=>item > 2)).to.be.deep.equal(true)
})

it('every([3,2], (item) => item > 2) should return false ',()=>{
  expect(every([3,2], (item)=>item > 2)).to.be.deep.equal(false)
})

it('every([3,2], (item) => item > 1) should return true ',()=>{
  expect(every([3,2], (item)=>item > 1)).to.be.deep.equal(true)
})

it('every([3,2], (item, x) => x > 2) should return false ',()=>{
  expect(every([3,2], (item, x)=>x > 2)).to.be.deep.equal(false)
})

it('every([3,2], (item, x, arr) => arr.length === 2) should return true ',()=>{
  expect(every([3,2], (item, x, arr)=>arr.length === 2)).to.be.deep.equal(true)
})