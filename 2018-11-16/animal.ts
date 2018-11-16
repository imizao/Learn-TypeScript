class Shoes {
  private ordinaryShoes: string;
  private accelerateShoes: string;
  constructor(s: number){
    if(this.ordinaryShoes) {
      this.speed(10)
    } else if (this.accelerateShoes) {
      this.speed(15)
    }
  }
  speed(s: number) {
    return s;
  }
  
}

class Animal extends Shoes {
  private a:number
  constructor(s:number){
     super(s)
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters + this.a}m.`);
  }
}



class Dog extends Animal {
  back() {
    console.log('Woof Woof~')
  }
}

class Cat extends Animal {
  back() {
    console.log('miao miao~')
  }
}

const dog = new Dog(3);
dog.back()
dog.move(12)
dog.back()

const cat = new Cat(2)
cat.back()
cat.move(11)
cat.back()
