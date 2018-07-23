interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string;
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}

let myArray: ReadonlyStringArray = ["Alice", "Bob"];
myArray[2] = "Mallory";
// 不能设置myArray[2],因为索引签名是只读的。