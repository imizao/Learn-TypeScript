class Animal {
  private name: string;
  constructor(theName: string) { this.name = theName; }
}

new Animal("Cat").name // 报错，因为'name' 是私有的。