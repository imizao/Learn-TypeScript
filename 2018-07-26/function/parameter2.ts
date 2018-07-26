function buildName2(firstName: string, lastName?: string) {
  if(lastName) {
    return firstName + " " + lastName;
  }
  else
    return firstName;
}

let result1 = buildName2("Bob");
// let result2 = buildName2("zhu", "ge", "liang");
let result3 = buildName2("zhu", "ge");

console.log(result1);
// console.log(result2);
console.log(result3);