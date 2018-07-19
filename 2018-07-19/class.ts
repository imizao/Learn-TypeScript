class Person{
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  print() {
    return this.name + this.age;
  }
}

let person:Person = new Person('yy', 23);

console.log(person.print());