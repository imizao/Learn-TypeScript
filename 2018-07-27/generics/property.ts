function getProperty(obj: object, key: string) {
  console.log(obj[key]);
  return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4}

getProperty(x, "a");
getProperty(x, "m"); // undefined