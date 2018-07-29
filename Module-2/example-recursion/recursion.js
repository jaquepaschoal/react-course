//1. Precisa chamar ela mesma
//2. Ter uma estratégia pra parar a função

//um jeito
const sum = (arr) => {
  if(arr.length === 0)
    return 0

  return arr[0] + sum(arr.slice(1))
}

//outro jeito
const sum2 = (arr) => {
  if(arr.length === 0)
    return 0

  const [head, ...tail] = arr
  return head + sum(tail)
}

console.log(sum2([1, 2, 3]))

