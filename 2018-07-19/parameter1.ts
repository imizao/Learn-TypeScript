function buildName1(firstName = "诸", lastName?: string) {
  console.log(firstName + " " + lastName);
}

buildName1("葛"); // 葛 undefined
buildName1(undefined, "葛");
