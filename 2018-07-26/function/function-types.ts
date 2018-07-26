function add(x: number, y: number) {
  return x + y;
}

let myAdd = function (x: number, y: number): number {
  return x + y;
}

let myAdd1: (x: number, y: number) => number = function (x: number, y: number): number {return x + y;}

let myAdd2: (baseValue: number, increment: number) => number = function (x: number, y: number): number {return x + y;};