/**
  * 返回查找到的第一个元素所在位置
  */
 // indexOf(searchElement: T, fromIndex?: number): number;
 /**
   * 返回反序查找的第一个元素所在位置
   */
 // lastIndexOf(searchElement: T, fromIndex?: number): number;

let aArray: Array<string> = ['a','b','c','d','c','a'];
let indexC = aArray.indexOf('c')
console.log(indexC)

let lastA = aArray.lastIndexOf('c');
console.log(lastA)