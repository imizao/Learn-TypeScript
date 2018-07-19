function buildName1(firstName, lastName) {
    if (firstName === void 0) { firstName = "诸"; }
    console.log(firstName + " " + lastName);
}
buildName1("葛"); // 葛 undefined
buildName1(undefined, "葛");
