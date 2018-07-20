enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c); // 1

enum Color1 {Red = 1, Green, Blue}
let d: Color1 = Color1.Green;
console.log(d); // 2  按1，2，3并不是按0，1，2来数的

enum Color2 {Red = 2, Green = 4, Blue = 6}
let e: Color2 = Color2.Green;
console.log(e); // 4

enum Color3 {Red = 1, Green, Blue}
let f: string = Color3[2];
console.log(f); // Green  按1，2，3并不是按0，1，2来数的
