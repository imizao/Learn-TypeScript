function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName('Joseph', "Samuel", "Lucas", "Mackinzie");
console.log(employeeName);