/**
  * Combines two or more arrays.
  * @param items Additional items to add to the end of array1.
  */
 // concat(...items: T[][]): T[];
 /**
   * Combines two or more arrays.
   * @param items Additional items to add to the end of array1.
   */
 // concat(...items: (T | T[])[]): T[];
 /**
  * 该方法返回指定起始位置的一个新的数组
  */
 // slice(start?: number, end?: number): T[];


let array: Array<number> = [1,2,3];
let array2: Array<number> = [4,5,6];

let arrayValue = 7;

array = array.concat(array2);
console.log(array)

array = array.concat(arrayValue);
console.log(array)

let newArray = array.slice(2,4)
console.log(newArray);

