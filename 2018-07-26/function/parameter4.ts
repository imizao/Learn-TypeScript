function buildName(firstName = "will", lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob");                     // error, too few parameters
let result2 = buildName("Bob", "Adams", "Sr.");     // 报错， 太多参数
let result3 = buildName("Bob", "Adams");            // okey and returns "Bob Adams";
let result4 = buildName(undefined, "Adams");        // okey and returns "will Adams";

