interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg;
}
console.log(loggingIdentity(['222',22]))
console.log(loggingIdentity({length: 10, value: 33}))