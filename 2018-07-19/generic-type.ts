function Hello<T>(arg: T): T {
  return arg;
}

let outPut = Hello<string>("Hello Generic");
let outPut2 = Hello(123);
console.log(outPut);
console.log(outPut2);

// 这个泛型简单到C++都躲在角落里瑟瑟发抖<(*￣▽￣*)/