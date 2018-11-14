interface ClockInterface2 {
  currentTime: Date;
}

class Clock implements ClockInterface2 {
  currentTime: Date;
  constructor(h: number, m: number) {}
}

interface ClockInterface1 {
  currentTime: Date;
  setTime(d: Date);
}

class Clock1 implements ClockInterface1 {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}