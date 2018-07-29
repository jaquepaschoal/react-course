'use strict'

const every = ( arr, func ) => {


  for( let x = 0; x < arr.length; x++) {
    if(!func(arr[x], x, arr))
      return false
  }

  return true
}

export default every