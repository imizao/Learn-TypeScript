class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(20);
dog.bark();
