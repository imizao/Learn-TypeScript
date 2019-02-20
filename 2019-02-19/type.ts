// 对象
type User = {
  name: string;
  age: number;
  website: WebSite;
}

// 方法
type say = (age: number) => string;

// 类
class TaSaid {
  website: string;
  say: (age: number) => string;
}