'use strict'

const reverse = (arr) => {
  let newArr = []

  for( let x = arr.length; x--; ) {
    newArr.push(arr[x])
  }
  return newArr
}

export default reverse 