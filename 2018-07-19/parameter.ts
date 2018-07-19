// 参数名旁使用？实现可选参数的功能。

function buildName(firstName: string, lastName?: string) {
  console.log(lastName ? firstName + " " + lastName : firstName);
  // return lastName ? firstName + " " + lastName : firstName
}

buildName("诸", "葛");
buildName("诸");
// buildName("诸", "葛", "亮");   错误语法，不支持， 会报错
