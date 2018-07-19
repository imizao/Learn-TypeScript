class Person1{
  public name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  tell() {
    console.log(this.name + this.age);
  }
}

class Student extends Person1 {
  gender: string;
  constructor(gender: string) {
    super("yy", 23);
    this.gender = gender;
  }
  tell() {
    console.log(this.name+this.age+this.gender);
  }
}

var student = new Student('male');
student.tell();