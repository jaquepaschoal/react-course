'use strict'

const filter = (arr,func = (item) => item ) => {
  let newArray = []

  for(let x = 0; x < arr.length; x++) {
    if(func(arr[x], x, arr))
      newArray.push(arr[x]);
  }

  return newArray
}

export default filter