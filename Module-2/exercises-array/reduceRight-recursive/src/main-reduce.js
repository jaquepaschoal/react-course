'use strict'

const reduce = (arr,func,initial)=> {
  let acc = initial
  let arrCopy = arr

  if( initial === undefined ) {
    acc = arrCopy[0]
    arrCopy = arrCopy.slice(1)
  }
  
  for(let x = arrCopy.length; ; x--) {
     acc = func(acc, arrCopy[x],x,arrCopy)
  }
  return acc
}

export default reduce