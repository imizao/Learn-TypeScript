// 数组的声明
let array1: Array<number>;
let array2: number[];

// 数组的初始化

let array3: Array<number> = new Array<number>();
let array4: number[] = [1,2,3];

// 数组的赋值、添加、更改
let array: Array<number> = [1,2,3,4];
console.log(array)

array[0] = 20;
console.log(array)

array[4] = 5;
console.log(array)

array.push(6);
console.log(array)

array.unshift(8,0) // 在第一个位置依次添加
console.log(array)

// 删除

let array5: Array<number> = [1,2,3,4]

let popValue = array5.pop(); // 弹出
console.log(array5)
console.log(popValue)

array5.splice(0,1) // 删除元素
console.log(array5)

array5.shift()  // 删除第一个元素
console.log(array5) 