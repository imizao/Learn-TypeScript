declare class Greeter {
  constructor(greeting: string)

  greeting: string;
  showGreeting(): void;
}
const myGreeter = new Greeter("Hello World");
myGreeter.greeting = "howdy"
myGreeter.showGreeting();

class SpecialGreeter extends Greeter {
  constructor() {
    super('Very special greetings');
  }
}