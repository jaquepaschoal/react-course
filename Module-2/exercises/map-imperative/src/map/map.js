'use strict'

const map = (arr,func)=>{

  if(typeof func !== 'function')
    throw new TypeError('func is not a function')
  
  let newArr = []
  for(let x = 0; x < arr.length; x++) {
    newArr.push(func(arr[x],x,arr));
  }

  return newArr
}

export default map