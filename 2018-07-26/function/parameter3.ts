function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob");
console.log(result1);

let result2 = buildName("Bob", undefined);
console.log(result2);

// let result3 = buildName("Bob", "Adams", "Sr.");
let result4 = buildName("Bob", "Adam");
console.log(result4);