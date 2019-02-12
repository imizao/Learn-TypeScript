function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity1<T>(arg: T): T {
  // console.log(arg.length) // T没有length属性
  return arg;
}

function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// 同上;

function loggingIdentity3<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}



let myIdentity1: <T>(arg: T) => T = identity;
// 换名字
let myIdentity2: <U>(arg: U) => U = identity;
// 签名的对象
let myIdentity3: {<T>(arg: T): T} = identity;
// 泛型接口
interface GenericIdentityFn {
  <T>(arg: T): T;
}

let myIdentity4: GenericIdentityFn = identity;

// 泛型参数当做整个接口的一个参数

interface GenericIdentityFn2<T> {
  (arg: T): T;
}

let myIdentity5: GenericIdentityFn2<number> = identity;