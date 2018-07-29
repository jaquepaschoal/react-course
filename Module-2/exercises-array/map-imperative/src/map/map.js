'use strict'

const map = (arr,func)=>{

  if( !Array.isArray(arr) )
    throw new TypeError('The first parameter must be an array')

  if( typeof func !== 'function' )
    throw new TypeError('The second parameter must be a function')
  
  let newArr = [] 
  for(let x = 0; x < arr.length; x++) {
    newArr.push(func(arr[x],x,arr));
  }

  return newArr
}

export default map