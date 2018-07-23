class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NotOkey {
  // [x: number]: Animal; 报错
  [x: string]: Dog;
}