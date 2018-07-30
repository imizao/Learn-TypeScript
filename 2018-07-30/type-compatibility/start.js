var x;
var y = { name: 'Alice', location: 'Seattle' };
x = y;
console.log(x);
function greet(n) {
    console.log('Hello, ' + n.name);
}
greet(y);
