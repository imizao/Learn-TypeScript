
function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

console.log(loggingIdentity([2,4,5]));

let myIdentity: <U>(arg: U) => U = identity;
// and
let myIdentity1: {<G>(arg: G): G} = identity;