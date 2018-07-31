// function pluck(o, names) {
//   return names.map(n => 0[n]);
// }
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: "Jarid",
    age: 35
};
var strings = pluck(person, ["name"]);
console.log(strings);
