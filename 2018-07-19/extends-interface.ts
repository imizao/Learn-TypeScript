interface Shape{
  color: string;
}

interface PenStroke{
  penWidth: number;
}

interface Square extends Shape, PenStroke{
  sideLength: number;
}

let s = <Square>{};
s.color = "blue";
s.penWidth = 100;
s.sideLength = 10;

console.log(s);