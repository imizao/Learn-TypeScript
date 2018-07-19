// 以下是哪个函数效果一样，其中add3函数是函数完整类型。

function add(x: string, y: string): string {
  return "Hello TypeScript";
}

let add2 = function (x: string, y: string): string {
  return "Hello TypeScript";
}

let add3: (x: string, y: string) => string = function (x: string, y: string): string {
  return "Hello TypeScript";
}


let aTest = add3('1', '2');
if(aTest === "Hello TypeScript") {
  console.log('返回成功');
}
