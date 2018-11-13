function sumMatrix(matrix: number[][]) {
  var sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    var currentRow = matrix[i];
    console.log(`ai = ${i}`)
    for (var i = 0; i < currentRow.length; i++) {
      console.log(`bi = ${i}`)
      sum += currentRow[i];
    }
  }

  return sum;
}
console.log(sumMatrix([[1,1,3]]))

function sumMatrix1(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    console.log(`ci = ${i}`)
    let currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      console.log(`di = ${i}`)
      sum += currentRow[i];
    }
  }
  return sum;
}
console.log(sumMatrix1([[1,1,3], [2,3,4]]))