interface Named {
  name: string;
}

let x: Named;

let y = {name: 'Alice', location: 'Seattle'};
x = y;
console.log(x);

function greet(n: Named) {
  console.log('Hello, ' + n.name);
}

greet(x);