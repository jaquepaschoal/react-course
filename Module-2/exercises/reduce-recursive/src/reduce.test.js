import { expect } from 'chai'
import reduce from './reduce'


it('reduce should be a function', ()=> {
  expect(reduce).to.be.a('function')
})

it('reduce([1, 2], (acc) => acc + 1, 0 ) should return 2 ',()=>{
  expect(reduce([1, 2], (acc) => acc + 1, 0 )).to.be.deep.equal(2)
})

it('reduce([1, 2, 3], (acc,item) => acc + item, 0 ) should return 6 ',()=>{
  expect(reduce([1, 2, 3], (acc,item) => acc + item, 0 )).to.be.deep.equal(6)
})

it('reduce([2, 3, 4], (acc,item) => acc + item, 0 ) should return 9 ',()=>{
  expect(reduce([2, 3, 4], (acc,item) => acc + item, 0 )).to.be.deep.equal(9)
})

it('reduce([1, 2], (acc,item,index) => acc + index, 0) should return 1 ',()=>{
  expect(reduce([1, 2], (acc,item,index) => acc + index, 0)).to.be.deep.equal(1)
})

it('reduce([1, 2], (acc,item,index,arr) => acc + arr[index],0) should return 3 ',()=>{
  expect(reduce([1, 2], (acc,item,index,arr) => acc + arr[index],0)).to.be.deep.equal(3)
})


