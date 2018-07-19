// 参数名旁使用？实现可选参数的功能。
function buildName(firstName, lastName) {
    console.log(lastName ? firstName + " " + lastName : firstName);
    // return lastName ? firstName + " " + lastName : firstName
}
buildName("诸", "葛");
buildName("诸");
buildName("诸", "葛", "亮");   //诸 葛
