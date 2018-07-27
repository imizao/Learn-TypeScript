interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// loggingIdentity(3);
let aLength = loggingIdentity({length: 10, value: 3});
//console.log(aLength);