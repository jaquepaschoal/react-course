'use strict'

const some = (arr,func) => {

  for( let x = 0; x < arr.length; x++) {
    if(func( arr[x], x, arr))
      return true
  }

  return false
}

export default some