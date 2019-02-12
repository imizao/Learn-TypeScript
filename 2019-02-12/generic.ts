class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {return x + y; };
console.log(myGenericNumber.add(1,3))
console.log(myGenericNumber.add(2,666))

let stringGeneric = new GenericNumber<string>();

stringGeneric.zeroValue = "22";
stringGeneric.add = function (x, y) { return x + y}

console.log(stringGeneric.add(stringGeneric.zeroValue, 'test'));