function buildName(firstName) {
    var restOfName = [];
    console.log(arguments);
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
        
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName('Joseph', "Samuel", "Lucas", "Mackinzie");
console.log(employeeName);
