function add(x: string, y: string): string {
  return "Hello TypeScript";
}

let add2 = function (x: string, y: string): string {
  return "Hello TypeScript";
}

let add3: (x: string, y: string) => string = function (x: string, y: string): string {
  return "Hello TypeScript";
}

let aTest = add('1', '2');
if(aTest === "Hello TypeScript") {
  console.log('返回成功');
}