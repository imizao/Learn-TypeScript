class Hello {
  private _name: string;
  private _age: number;
  get name(): string{
    return this._name;
  }
  set name(value: string){
    this._name = value;
  }
  get age(): number{
    return this._age;
  }
  set age(age: number) {
    if (age>0 && age<100) {
      console.log("年例在0-100之间"); // 如果在这个范围，无法取age，hello.age为undefiend
      return;
    }
    this._age = age;
  }
}

let hello = new Hello();
hello.name = "mizao";
hello.age = 15;
console.log(hello.name);
console.log(hello.age);