// 以下是哪个函数效果一样，其中add3函数是函数完整类型。
function add(x, y) {
    return "Hello TypeScript";
}
var add2 = function (x, y) {
    return "Hello TypeScript";
};
var add3 = function (x, y) {
    return "Hello TypeScript";
};
var aTest = add3('1', '2');
if (aTest === "Hello TypeScript") {
    console.log('返回成功');
}
