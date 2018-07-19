// 可选属性
interface Person{
  name?: string;
  age?: number;
}

function printInfo(info: Person) {
  console.log(info);
}

let info = {
  "name": "mizao",
  "age": 23
}

printInfo(info);

let info2 = {
  "name": "mizao"
}

printInfo(info2);