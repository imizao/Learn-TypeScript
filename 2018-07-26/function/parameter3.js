function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result1 = buildName("Bob");
console.log(result1);
var result2 = buildName("Bob", undefined);
console.log(result2);
// let result3 = buildName("Bob", "Adams", "Sr.");
var result4 = buildName("Bob", "Adam");
console.log(result4);
