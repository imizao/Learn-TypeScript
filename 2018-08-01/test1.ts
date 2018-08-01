import zip = require("./ZipCodeValidator1");

let strings = ["hello", "11111", "101"];
let validator = new zip();

strings.forEach(s => {
  console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
})