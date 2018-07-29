'use strict'

const find = ( arr, func ) => {
  for(let x=0; x < arr.length; x++) {
    if(func(arr[x], x, arr)) {
      return arr[x]
    }
  }
}
export default find
